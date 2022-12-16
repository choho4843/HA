import { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div style=
                {{ backgroundColor: 'gray', width: '100%', position: 'relative', left: 0, top: 0, zIndex: 10 }}>
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link to={'/'} id="logo"><b>HealthAce</b></Link>
                    </li>
                    <li className="nav-item">
                    <Link to={'/HealthLearning'} id="logo"><b>HealthAce</b></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/Community'}>Community</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/withdraw'}>Commicial</Link>
                    </li>
                </ul>
            </div>  
        )
    }
}
export default Header;