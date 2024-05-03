import React from "react";
import Catalog from "react-catalog-view";

export default function ProductData(props) {
    let products = [
        {
            id: 1,
            title: "Canvas",
            description: "High quality canvas shoes.",
            price: "20",
            discounted: "15",
            currency: "$",
            image: "http://domain.com/images/1.jpg",
        },
        {
            id: 2,
            title: "Sport shoes",
            description: "Sporty shoes, durable at affordable ranges.",
            price: "25",
            currency: "$",
            discounted: "15",
            image: "http://domain.com/images/5.jpg",
        },
        {
            id: 3,
            title: "Heels",
            description: "Fashionable trendy heels.",
            currency: "$",
            price: "30",
            image: "http://domain.com/images/6.jpg",
        },
    ];

    const CONTENT_KEYS = {
        imgKey: "image",
        cardTitleKey: "title",
        cardDescriptionKey: "description",
        priceKey: "price",
        discountedPriceKey: "discounted",
        priceCurrencyKey: "currency",
        discountCurrencyKey: "currency",
    };

    const handleBtnOneClick = (args, event, objectData) => {
        // Handle click for button one
    };

    const handleBtnTwoClick = (args, event, objectData) => {
        // Handle click for button two
    };

    const handleImageClick = (args, event, objectData) => {
        // Handle click on image
    };

    const renderCardControls = (dataObj) => {
        return (
            <div>
                <input className="my-custom-input" placeholder="custom-input" />
                <button className="my-custom-button" type="submit">
                    {" "}
                    OK{" "}
                </button>
            </div>
        );
    };

    return (
        <Catalog
            data={products}
            contentKeys={CONTENT_KEYS}
            skeleton={0}
            cardSize="sm"
            btnOneText="View"
            btnTwoText="Purchase Now"
            btnOneHandler={handleBtnOneClick}
            btnTwoHandler={handleBtnTwoClick}
            imageClickHandler={handleImageClick}
            cardControls={renderCardControls}
        />
    );
}
