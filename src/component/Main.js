import { Component } from "react";
import Section0 from "./Section0";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <div><Section0 /></div>
                <Section1/>
                <Section2/>
                <Section3/>
            </div>
        )
    }
}
export default Main;