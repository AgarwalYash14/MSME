import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/createcatalog.css";

import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import {
    firestore,
    collection,
    doc,
    setDoc,
    imageStorage,
} from "../config/firebase"; // Import Firestore functions
import { v4 as uuidv4 } from "uuid";

export default function BulkUploadComponent() {
    const navigate = useNavigate();
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setUploadedFiles(files);
    };

    const handleUpload = async () => {
        const uploadedFilesPromises = uploadedFiles.map(async (file) => {
            try {
                // Generate a unique identifier for the catalog
                const catalogId = uuidv4();

                // Get a reference to the location where the product image will be stored in Firebase Storage
                const imageRef = ref(
                    imageStorage,
                    `catalogs/${catalogId}/${file.name}`
                );

                // Upload product image to Firebase Storage
                const snapshot = await uploadBytes(imageRef, file);

                // Get the download URL of the uploaded image
                const imageUrl = await getDownloadURL(snapshot.ref);

                // Store product details along with the image URL in Firestore
                const catalogDocumentRef = doc(
                    firestore,
                    `catalogs/${catalogId}` // Adjusted path to reference the catalog document
                );
                await setDoc(
                    catalogDocumentRef,
                    {
                        // Using setDoc to create/update the document with product information
                        products: {
                            [uuidv4()]: {
                                // Using a randomly generated ID for each product
                                name: file.name,
                                description: "Description", // Add your own description here
                                price: 0, // Add your own price here
                                imageUrl: imageUrl,
                            },
                        },
                    },
                    { merge: true }
                ); // Merging data to avoid overwriting existing catalog information

                console.log("Product added successfully");
            } catch (error) {
                console.error("Error adding product:", error.message);
                throw error;
            }
        });

        try {
            await Promise.all(uploadedFilesPromises);
            alert("All files uploaded successfully");
            setUploadedFiles([]); // Clear uploaded files after successful upload
        } catch (error) {
            alert("An error occurred while uploading files");
        }
    };

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid black",
                    padding: "20px 32.5vw",
                }}
            >
                <div className="button">
                    <h1>Bulk Upload</h1>
                </div>
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    style={{ display: "none" }}
                />
                <button onClick={() => fileInputRef.current.click()}>
                    Select Files
                </button>
                {uploadedFiles.length > 0 && (
                    <button onClick={handleUpload}>Upload Files</button>
                )}
            </div>
        </div>
    );
}
