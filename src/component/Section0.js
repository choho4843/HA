import { Component } from "react";
import {Button, UncontrolledCarousel} from 'reactstrap';
import card1 from '../img/bench.jpg';
import card2 from '../img/body.jpg';



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
    // {
    //     src:card3,
    //     caption:'',
    //     altText:'',
    //     header:''
    // },
    // {
    //     src:card4,
    //     caption:'',
    //     altText:'',
    //     header:''
    // },
    // {
    //     src:card5,
    //     caption:'',
    //     altText:'',
    //     header:''
    // },
];
class Section0 extends Component {
    render() {
        return (
            <div className='section_main'>
                <div className='componentBox'>
                <br/>
                <br/>
                {/* <span className='L-text'>
                    프렌즈 체크카드,<br/>
                    내가 고르는 선택의 즐거움
                </span>
                <span className='S-text'>
                    프렌즈 디자인부터 멋스러운 블랙 컬러 카드까지 원하는 
                    디자이과 기능을 선택할 수 있습니다.
                </span><br/>
                <Button color='light' size='sm'>프렌즈 체크카드&gt;</Button>&nbsp;
                <br/><br/> */}
                <UncontrolledCarousel items={items}/>
            </div>
        </div>
        )
    }
}
export default Section0;