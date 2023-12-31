import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <div className="empty-menu-body">
            <h1>Ooooops!!!</h1>
            <h2>You came to the wrong page.</h2>
            <Link to="/" className="custom-link">
                <button className="empty-menu-button">Home</button>
            </Link>
        </div>
    );
};
