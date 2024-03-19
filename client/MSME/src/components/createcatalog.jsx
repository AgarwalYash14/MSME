import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/createcatalog.css";
import styles from "../styles/addProduct.module.css";
import { ref } from "firebase/storage";
import { storage } from "../config/firebase";

export default function CreateCatalog() {
    const navigate = useNavigate();
    const [showAddProducts, setShowAddProducts] = useState(false);
    const [showCreateButton, setShowCreateButton] = useState(true);

    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImage, setProductImage] = useState(null);

    const handleCreateCatalog = () => {
        setShowAddProducts(true);
        setShowCreateButton(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    const [img, setImg] = useState("");

    const handleClick = () => {
        ref(storage, `files/`);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // Handle image file change here
    };
    return (
        <div className="create_catalog">
            {showCreateButton && (
                <div className="button" onClick={handleCreateCatalog}>
                    <h1>Create Catalog</h1>
                </div>
            )}
            {showAddProducts && (
                // <div id="addProducts">
                //     <div className={styles.container}>
                //         <div className={styles.formContainer}>
                //             <div className="text-center">
                //                 <h2 className={styles.title}>Add Product</h2>
                //             </div>
                //             <form
                //                 className={styles.form}
                //                 onSubmit={handleSubmit}
                //             >
                //                 <div className="catalog_upload">
                //                     <div>
                //                         <label className={styles.inputLabel}>
                //                             Product Image
                //                         </label>
                //                         <div className="flex items-center justify-center margin-right">
                //                             <label
                //                                 className={styles.uploadLabel}
                //                             >
                //                                 <div className="h-full w-full text-center flex flex-col items-center justify-center">
                //                                     <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                //                                         {productImage ? (
                //                                             <img
                //                                                 className={
                //                                                     styles.uploadImage
                //                                                 }
                //                                                 src={URL.createObjectURL(
                //                                                     productImage
                //                                                 )}
                //                                                 alt="Uploaded product"
                //                                             />
                //                                         ) : (
                //                                             <img
                //                                                 className={
                //                                                     styles.uploadImage
                //                                                 }
                //                                                 src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                //                                                 alt="Upload product"
                //                                             />
                //                                         )}
                //                                     </div>
                //                                     <input
                //                                         type="file"
                //                                         className={
                //                                             styles.fileInput
                //                                         }
                //                                         onChange={
                //                                             handleImageChange
                //                                         }
                //                                     />
                //                                 </div>
                //                             </label>
                //                         </div>
                //                     </div>
                //                     <div>
                //                         <div className="grid grid-cols-1 space-y-2">
                //                             <label
                //                                 className={styles.inputLabel}
                //                             >
                //                                 Product Name
                //                             </label>
                //                             <input
                //                                 className={styles.inputField}
                //                                 type="text"
                //                                 value={productName}
                //                                 onChange={(e) =>
                //                                     setProductName(
                //                                         e.target.value
                //                                     )
                //                                 }
                //                                 placeholder="Enter product name..."
                //                             />
                //                         </div>
                //                         <div className="grid grid-cols-1 space-y-2">
                //                             <label
                //                                 className={styles.inputLabel}
                //                             >
                //                                 Product Description
                //                             </label>
                //                             <textarea
                //                                 className={styles.inputField}
                //                                 value={productDescription}
                //                                 onChange={(e) =>
                //                                     setProductDescription(
                //                                         e.target.value
                //                                     )
                //                                 }
                //                                 placeholder="Enter product description..."
                //                             ></textarea>
                //                         </div>
                //                         <div className="grid grid-cols-1 space-y-2">
                //                             <label
                //                                 className={styles.inputLabel}
                //                             >
                //                                 Product Price
                //                             </label>
                //                             <input
                //                                 className={styles.inputField}
                //                                 type="text"
                //                                 value={productPrice}
                //                                 onChange={(e) =>
                //                                     setProductPrice(
                //                                         e.target.value
                //                                     )
                //                                 }
                //                                 placeholder="Enter product price..."
                //                             />
                //                         </div>
                //                     </div>
                //                 </div>
                //                 <div className="text-center">
                //                     <button
                //                         type="submit"
                //                         className={styles.uploadButton}
                //                     >
                //                         Add Product
                //                     </button>
                //                 </div>
                //             </form>
                //         </div>
                //     </div>
                // </div>
                <div className={styles.form}>
                    <h1>Add Product</h1>
                    <div className={styles.catalog_form}>
                        <div className={styles.catalog_upload}>
                            <h2>Product Image</h2>
                            <div className={styles.upload_img}>
                                {productImage ? (
                                    <img
                                        className={styles.uploadImage}
                                        src={URL.createObjectURL(productImage)}
                                        alt="Uploaded product"
                                    />
                                ) : (
                                    <img
                                        className={styles.uploadImage}
                                        src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                                        alt="Upload product"
                                    />
                                )}
                                <input
                                    type="file"
                                    className={styles.fileInput}
                                    onChange={handleImageChange}
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
                                    type="text"
                                    value={productPrice}
                                    onChange={(e) =>
                                        setProductPrice(e.target.value)
                                    }
                                    placeholder="Enter product price..."
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.catalog_upload_button}>
                        <button type="submit" className={styles.uploadButton}>
                            Add Product
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
