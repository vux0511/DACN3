import { Link } from "react-router-dom";

function CategoryCard(categoryList) {
    return (
        <Link to={"/"}>
            <div className="category__card">
                <img
                    src={`http://localhost:5001/images/categories/${categoryList.categoryList.imageCategory}`}
                    alt=""
                    className="category__card-img"
                />
                <div className="category__card-name">
                    {categoryList.categoryList.nameCategory}
                </div>
            </div>
        </Link>
    );
}

export default CategoryCard;
