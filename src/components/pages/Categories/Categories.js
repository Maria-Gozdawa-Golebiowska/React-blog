import { useSelector } from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../../redux/categoriesRedux';

const Categories = () => {
    const categories = useSelector(getAllCategories) || [];

    return (
        <section>
            <h1>Categories</h1>
            <ListGroup className="mt-5">
                {categories.map((category, index) => (
                    <ListGroup.Item key={index}>
                        <Link to={`/category/${category}`}>{category}</Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </section>
    );
}

export default Categories;
