import "./index.css";

const Header = () => (
    <nav className="nav-header">
        <div className="nav-logo">
            <p className="logo-letter">R</p>
        </div>
        <ul className="nav-menu-section">
            <li className="nav-item">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                    className="nav-item-image"
                    alt="facebook"
                    />
            </li>
            <li>
                <img
                    src="https://pbs.twimg.com/profile_images/1318652224638124032/wrpp2Nl4_400x400.png"
                    className="nav-item-image"
                    alt="whatsapp"
                />
            </li>
            <li>
                <img
                    src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
                    className="nav-item-image"
                    alt="twittier"
                />
            </li>
            <li>
                <img    
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111585.png"
                    className="nav-item-image"
                    alt="Quora"
                />
            </li>
        </ul>
    </nav>
)

export default Header;