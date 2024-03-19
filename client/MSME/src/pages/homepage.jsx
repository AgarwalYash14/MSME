import CatalogItems from "../components/catalogitems";
import CreateCatalog from "../components/createcatalog";
import React, { useState } from "react";
import "../styles/homepage.css";

export default function Homepage() {
    const [displayCatalogItems, setdisplayCatalogItems] = useState(true);

    const toggleComponent = () => {
        setdisplayCatalogItems((prevState) => !prevState);
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
                            padding: "15px",
                            width: "200px",
                            borderRadius: "10px",
                            border: "1px solid",
                        }}
                        onClick={toggleComponent}
                    >
                        Create new Catalog
                    </button>
                </div>
                <div className="section-2">
                    <div>
                        <h2>Product Categories:</h2>
                        <select name="" id="">
                            <option value="HandcraftedProducts">
                                Handcrafted Products
                            </option>
                            <option value=""></option>
                        </select>
                    </div>
                    {displayCatalogItems ? <CatalogItems /> : <CreateCatalog />}
                </div>
            </div>
        </>
    );
}
