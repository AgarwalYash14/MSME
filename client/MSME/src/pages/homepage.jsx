import CatalogItems from "../components/catalogitems";
import CreateCatalog from "../components/createcatalog";
import BulkUploadComponent from "../components/bulk";
import React, { useState } from "react";
import "../styles/homepage.css";

export default function Homepage() {
    const [displayCatalogItems, setDisplayCatalogItems] = useState(true);
    const [displayBulkUploadComponent, setDisplayBulkUploadComponent] =
        useState(false);

    const toggleComponent = () => {
        setDisplayCatalogItems((prevState) => !prevState);
    };

    const toggleComponent_2 = () => {
        setDisplayBulkUploadComponent((prevState) => !prevState);
    };

    return (
        <>
            <div className="homepage">
                <h1 className="main">
                    Collaborative Catalogue Management Platform
                </h1>
                <div style={{ display: "flex" }}>
                    <input
                        className="search"
                        type="search"
                        name=""
                        id=""
                        placeholder="Find your products"
                    />
                    <button
                        style={{
                            background: "#f78b15",
                            fontFamily: "Montserrat",
                            color: "#fff",
                            padding: "15px",
                            width: "230px",
                            borderRadius: "10px",
                            border: "1px solid",
                        }}
                        onClick={toggleComponent}
                    >
                        Create new Catalog
                    </button>
                    <button
                        style={{
                            background: "#f78b15",
                            fontFamily: "Montserrat",
                            color: "#fff",
                            padding: "15px",
                            marginLeft: "10px",
                            width: "200px",
                            borderRadius: "10px",
                            border: "1px solid",
                        }}
                        onClick={toggleComponent_2}
                    >
                        Bulk Upload
                    </button>
                </div>
                <div className="section-2">
                    {displayCatalogItems && !displayBulkUploadComponent && (
                        <CatalogItems />
                    )}
                    {!displayCatalogItems && !displayBulkUploadComponent && (
                        <CreateCatalog />
                    )}
                    {displayBulkUploadComponent && <BulkUploadComponent />}
                </div>
            </div>
        </>
    );
}
