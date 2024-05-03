import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/createcatalog.css";
import styles from "../styles/addProduct.module.css";
import { imageStorage } from "../config/firebase"; // Adjust the path accordingly
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firestore, addDoc, collection, doc, setDoc } from "../config/firebase"; // Import setDoc function
import { v4 as uuidv4 } from "uuid";

export default function CreateCatalog() {
    const navigate = useNavigate();
    const [showAddProducts, setShowAddProducts] = useState(false);
    const [showCreateButton, setShowCreateButton] = useState(true);

    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImage, setProductImage] = useState(null);

    const handleClickAI = () => {
        window.open("http://127.0.0.1:7860/", "_blank");
    };

    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleCreateCatalog = () => {
        setShowAddProducts(true);
        setShowCreateButton(false);
    };

    useEffect(() => {
        // Reset form fields when showAddProducts is set to false
        if (!showAddProducts) {
            setProductName("");
            setProductDescription("");
            setProductPrice("");
            setProductImage(null);
        }
    }, [showAddProducts]);

    const handleSubmit = (event) => {
        event.stopPropagation(); // Prevent event propagation

        if (
            !productImage ||
            !productName ||
            !productDescription ||
            !productPrice
        ) {
            alert("Please fill in all fields");
            return;
        }

        // Generate a unique identifier for the catalog
        const catalogId = uuidv4();

        // Get a reference to the location where the product image will be stored in Firebase Storage
        const imageRef = ref(
            imageStorage,
            `catalogs/${catalogId}/${productImage.name}`
        );

        // Upload product image to Firebase Storage
        uploadBytes(imageRef, productImage)
            .then((snapshot) => {
                // Get the download URL of the uploaded image
                return getDownloadURL(snapshot.ref);
            })
            .then((imageUrl) => {
                // Store product details along with the image URL in Firestore
                const catalogDocumentRef = doc(
                    firestore,
                    `catalogs/${catalogId}` // Adjusted path to reference the catalog document
                );
                return setDoc(
                    catalogDocumentRef,
                    {
                        // Using setDoc to create/update the document with product information
                        products: {
                            [uuidv4()]: {
                                // Using a randomly generated ID for each product
                                name: productName,
                                description: productDescription,
                                price: productPrice,
                                imageUrl: imageUrl,
                            },
                        },
                    },
                    { merge: true }
                ); // Merging data to avoid overwriting existing catalog information
            })
            .then(() => {
                console.log("Product added successfully");
                alert("Product added successfully");
            })
            .catch((error) => {
                console.error("Error adding product: ", error.message); // Log the specific error message
                alert("An error occurred while adding product");
            });
    };

    return (
        <div className="create_catalog">
            {showCreateButton && (
                <div className="button" onClick={handleCreateCatalog}>
                    <h1>Create Catalog</h1>
                </div>
            )}
            {showAddProducts && (
                <div className={styles.form}>
                    <h1>Add Product</h1>
                    <div className={styles.catalog_form}>
                        <div className={styles.catalog_upload}>
                            <h2>Product Image</h2>
                            <div className={styles.upload_img}>
                                <div
                                    className={styles.uploadLabel}
                                    onClick={handleImageClick}
                                >
                                    {productImage ? (
                                        <img
                                            className={styles.uploadImage}
                                            src={URL.createObjectURL(
                                                productImage
                                            )}
                                            alt="Uploaded product"
                                        />
                                    ) : (
                                        <img
                                            className={styles.uploadImage}
                                            src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                                            alt="Upload product"
                                        />
                                    )}
                                </div>
                                <input
                                    type="file"
                                    className={styles.fileInput}
                                    onChange={(e) =>
                                        setProductImage(e.target.files[0])
                                    }
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                />
                            </div>
                        </div>
                        <div className={styles.input_labels}>
                            <div className={styles.input_label_1}>
                                <h1>Product Name</h1>
                                <input
                                    className={styles.inputField}
                                    type="text"
                                    value={productName}
                                    onChange={(e) =>
                                        setProductName(e.target.value)
                                    }
                                    placeholder="Enter product name..."
                                />
                            </div>
                            <div className={styles.input_label_2}>
                                <h1>Product Description</h1>
                                <textarea
                                    className={styles.inputField}
                                    value={productDescription}
                                    onChange={(e) =>
                                        setProductDescription(e.target.value)
                                    }
                                    placeholder="Enter product description..."
                                ></textarea>
                            </div>
                            <div className={styles.input_label_3}>
                                <h1>Product Price</h1>
                                <input
                                    className={styles.inputField}
                                    type="number"
                                    value={productPrice}
                                    onChange={(e) =>
                                        setProductPrice(e.target.value)
                                    }
                                    placeholder="Enter product price..."
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className={styles.catalog_upload_button}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "45%",
                        }}
                    >
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className={styles.uploadButton}
                        >
                            Add Product
                        </button>
                        <button
                            onClick={handleClickAI}
                            className={styles.uploadButton}
                        >
                            Using AI
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
