import "../styles/homepage.css";

export default function Homepage() {
    return (
        <>
            <div className="homepage">
                <h1>Collaborative Catalogue Management Platform</h1>
                <div>
                    <input type="search" name="" id="" />
                    <button>Create new Catalog</button>
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
                    <div></div>
                </div>
            </div>
        </>
    );
}
