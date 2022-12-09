import { Component } from "react";
import {Link} from 'react-router-dom';
import { UncontrolledCollapse, Button,Modal,CardBody,Card } from 'reactstrap';

class Header extends Component {
    render () {
        return(
        <div style=
        {{backgroundColor:'grey', width:'100%', position:'fixed', left:0, top:0, zIndex:10}}>
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link to={'/'} id="logo"><b>HealthAce</b></Link>
                    </li>
                    <li className="nav-item">
                    <Button id="toggle">HealthLearning</Button>
                    <UncontrolledCollapse toggler="toggle">
                        <div>community</div>
                    </UncontrolledCollapse>
                       
                       
                    </li>
                    <li className="nav-item">
                        <Link to={'/deposit'}>HealthCommunity</Link>
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