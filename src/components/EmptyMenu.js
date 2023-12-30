import { Link } from 'react-router-dom';

const EmptyMenu = () => {
    return (
        <div className="empty-menu-body">
            <h2>OH OH!!! We do not have the menu for this restaurant at the moment.</h2>
            <h4>Sorry for the inconvenience. Please call the restaurant.</h4>
            <Link to="/" className="custom-link">
                <button className="empty-menu-button">Home</button>
            </Link>
        </div>
    );
};

export default EmptyMenu;
