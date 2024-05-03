import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";
import CatalogView from "react-catalog-view";
import { firestore } from "../config/firebase";
import { ref } from "firebase/storage";
import { getStorage } from "../config/firebase";

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = collection(firestore, "catalogs");
                const snapshot = await getDocs(productsCollection);
                const productsData = [];

                snapshot.forEach(async (doc) => {
                    const productData = doc.data();
                    const imagePath = productData.imagePath;
                    const defaultImageUrl = "default_image_url"; // Provide a default image URL if imagePath is missing
                    let imageUrl = defaultImageUrl;

                    if (imagePath) {
                        try {
                            const imageRef = ref(getStorage(), imagePath);
                            imageUrl = await getDownloadURL(imageRef);
                        } catch (error) {
                            console.error("Error fetching image URL:", error);
                        }
                    } else {
                        console.error(
                            "Image path is undefined or null for product:",
                            productData
                        );
                    }

                    productsData.push({ ...productData, imageUrl });
                });

                setProducts(productsData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false); // Set loading to false even if there's an error
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Catalog</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <CatalogView
                    data={products}
                    contentKeys={{
                        name: "name",
                        description: "description",
                        price: "price",
                        imageUrl: "imageUrl",
                    }}
                    renderItem={(item) => (
                        <div>
                            <img src={item.imageUrl} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>Price: {item.price}</p>
                        </div>
                    )}
                />
            )}
        </div>
    );
};

export default Catalog;
