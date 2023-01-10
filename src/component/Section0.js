import { Component } from "react";
import {UncontrolledCarousel} from 'reactstrap';
import card1 from '../img/lower.jpg';
import card2 from '../img/bench.jpg';
import card3 from '../img/shoulder.jpg';
import card4 from '../img/back.jpg';
import card5 from '../img/am1.jpg';
import card6 from '../img/home.jpg';

const items = [
    {
        src:card1,
        caption:'',
        altText:'',
        header:''
    },
    {
        src:card2,
        caption:'',
        altText:'',
        header:''
    },
    {
        src:card3,
        caption:'',
        altText:'',
        header:''
    },
    {
        src:card4,
        caption:'',
        altText:'',
        header:''
    },
    {
        src:card5,
        caption:'',
        altText:'',
        header:''
    },
    {
        src:card6,
        caption:'',
        altText:'',
        header:''
    },
];
class Section0 extends Component {
    render() {
        return (
                <div>
       
                <UncontrolledCarousel items={items}/>
                <br/>
                
            </div>
        )
    }
}
export default Section0;