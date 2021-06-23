import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About us</Link>
                    </li>
                    <li>
                        {/* <a href="/contact-us">Contact us</a> */}
                        <Link to="/contact-us">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}