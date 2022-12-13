import { Component } from "react";
import Section0 from "./Section0";
import Section1 from "./Section1";
import Section2 from "./Section2";

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <br/>
                <Section0 />
                <Section1/>
                <Section2/>
            </div>
        )
    }
}
export default Main;