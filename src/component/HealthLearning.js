import { Component } from "react";
import { CardBody, CardImg, CardFooter } from "reactstrap";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


class HealthLearning extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idx: 1
        }
    }



    divChange = (e) => {
        console.log(e.target)
        console.log(e.target.value)
        this.setState({ idx: e.target.value })
    }

    render() {
        return (
            <div>         {/*전체 div  */}
                <div style={{ float: "left", width: "15%" }}>                 {/* 메뉴 div  */}
                    <ul style={{ listStyle: "none" }}>
                        <li><button className="side_bar" value={"1"} onClick={this.divChange} style={{backgroundColor:"white", border:"0" , padding:"30px"}}>가슴 운동</button></li><br />
                        <li><button className="side_bar" value={"2"} onClick={this.divChange} style={{backgroundColor:"white", border:"0" , padding:"30px"}}>하체 운동</button></li> <br />
                        <li><button className="side_bar" value={"3"} onClick={this.divChange} style={{backgroundColor:"white", border:"0" , padding:"30px"}}>어깨 운동</button></li> <br />
                        <li><button className="side_bar" value={"4"} onClick={this.divChange} style={{backgroundColor:"white", border:"0" , padding:"30px"}}>등 운동</button></li> <br />
                        <li><button className="side_bar" value={"5"} onClick={this.divChange} style={{backgroundColor:"white", border:"0" , padding:"30px"}}>팔 운동</button></li> <br />
                        <li><button className="side_bar" value={"6"} onClick={this.divChange} style={{backgroundColor:"white", border:"0" , padding:"30px"}}> 홈트레이닝</button></li> <br />
                    </ul>
                </div>
                <div style={{ float: "right", width: "85%" }}> {/* 오른쪽 사진링크 div */}
                    {this.state.idx == 1 && <div style={{ width: "100%", height: "700px", position: "relative" }}> {/* 부위별 사진-가슴 */}
                        <div className="learning1">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/bench.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter style={{left:"10%"}}><h3>벤치프레스</h3></CardFooter>
                        </div>
                        <div className="learning2">
                            <CardBody >
                                <Link to={'/chestpress'} id="logo"><b><CardImg src={require("../img/chest.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>체스트프레스</h3></CardFooter>
                        </div>
                        <div className="learning3">
                            <CardBody >
                                <Link to={'/peckdeckfly'} id="logo"><b><CardImg src={require("../img/fly.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>펙덱플라이</h3></CardFooter>
                        </div>
                        <div className="learning4">
                            <CardBody >
                                <Link to={'/Dips'} id="logo"><img src={require("../img/dips.png")} style={{ width: '400px', borderRadius: "10%" }} /></Link>
                            </CardBody><br/>
                            <CardFooter><h3>딥스</h3></CardFooter>
                        </div>
                        <div className="learning5">
                            <CardBody >
                                <Link to={'/Cabelfly'} id="logo"><b><CardImg src={require("../img/k.fly.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>케이블플라이</h3></CardFooter>
                        </div>
                        <div className="learning6">
                            <CardBody >
                                <Link to={'/dumbbelpress'} id="logo"><b><CardImg src={require("../img/deombel.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>덤벨프레스</h3></CardFooter>
                        </div>
                    </div>
                    }
                    {this.state.idx == 2 && <div style={{ width: "100%", height: "700px", position: "relative" }}>{/* 부위별 사진-하체 */}
                        <p className="learning1">
                            <CardBody >
                                <Link to={'/squat'} id="logo"><b><CardImg src={require("../img/squat.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>스쿼트</h3></CardFooter>
                        </p>
                        <p className="learning2">
                            <CardBody >
                                <Link to={'/legextension'} id="logo"><b><CardImg src={require("../img/leg.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>레그익스텐션</h3></CardFooter>
                        </p>
                        <p className="learning3">
                            <CardBody >
                                <Link to={'/legpress'} id="logo"><b><CardImg src={require("../img/legpress.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>레그프레스</h3></CardFooter>
                        </p>
                        <p className="learning4">
                            <CardBody >
                                <Link to={'/dumbbellunge'} id="logo"><b><CardImg src={require("../img/deombelrunje.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>덤벨런지</h3></CardFooter>
                        </p>
                    </div>
                    }
                    {this.state.idx == 3 && <div style={{ width: "100%", height: "700px", position: "relative" }}> {/* 부위별 사진-어깨 */}
                        <p className="learning1">
                            <CardBody >
                                <Link to={'/militarypress'} id="logo"><b><CardImg src={require("../img/milli.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>밀리터리프레스</h3></CardFooter>
                        </p>
                        <p className="learning2">
                            <CardBody >
                                <Link to={'/upright'} id="logo"><b><CardImg src={require("../img/uplight.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>업라이트 로우</h3></CardFooter>
                        </p>
                        <p className="learning3">
                            <CardBody >
                                <Link to={'/side'} id="logo"><b><CardImg src={require("../img/shoulder.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>사이드레터럴레이즈</h3></CardFooter>
                        </p>
                        <p className="learning4">
                            <CardBody >
                                <Link to={'/sholderpress'} id="logo"><b><CardImg src={require("../img/sholder.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>숄더프레스</h3></CardFooter>
                        </p>
                    </div>
                    }
                    {this.state.idx == 4 && <div style={{ width: "100%", height: "700px", position: "relative" }}> {/* 부위별 사진-등 */}
                        <p className="learning1">
                            <CardBody >
                                <Link to={'/pullup'} id="logo"><b><CardImg src={require("../img/pull.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>턱걸이</h3></CardFooter>
                        </p>
                        <p className="learning2">
                            <CardBody >
                                <Link to={'/letpull'} id="logo"><b><CardImg src={require("../img/down.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>랫플다운</h3></CardFooter>
                        </p>
                        <p className="learning3">
                            <CardBody >
                                <Link to={'/barbellrow'} id="logo"><b><CardImg src={require("../img/babel.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>바벨로우</h3></CardFooter>
                        </p>
                        <p className="learning4">
                            <CardBody >
                                <Link to={'/seatedrow'} id="logo"><b><CardImg src={require("../img/citied.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>시티드로우</h3></CardFooter>
                        </p>
                        <p className="learning5">
                            <CardBody >
                                <Link to={'/cabledown'} id="logo"><b><CardImg src={require("../img/cable.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>케이블암플다운</h3></CardFooter>
                        </p>
                        <p className="learning6">
                            <CardBody >
                                <Link to={'/dead'} id="logo"><b><CardImg src={require("../img/dead.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>데드리프트</h3></CardFooter>
                        </p>
                    </div>
                    }
                    {this.state.idx == 5 && <div style={{ width: "100%", height: "700px", position: "relative" }}> {/* 부위별 사진-팔 */}
                        <p className="learning1">
                            <CardBody >
                                <Link to={'/easybar'} id="logo"><b><CardImg src={require("../img/easybar.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>이지바컬</h3></CardFooter>
                        </p>
                        <p className="learning2">
                            <CardBody >
                                <Link to={'/overhead'} id="logo"><b><CardImg src={require("../img/overhand.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>오버헤드 익스텐션</h3></CardFooter>
                        </p>
                        <p className="learning3">
                            <CardBody >
                                <Link to={'/concentration'} id="logo"><b><CardImg src={require("../img/concen.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>컨센트레이션컬</h3></CardFooter>
                        </p>
                        <p className="learning4">
                            <CardBody >
                                <Link to={'/cablepress'} id="logo"><b><CardImg src={require("../img/pressdown.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>케이이블 프레스 다운</h3></CardFooter>
                        </p>
                        <p className="learning5">
                            <CardBody >
                                <Link to={'/barbelcull'} id="logo"><b><CardImg src={require("../img/cull.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>바벨컬</h3></CardFooter>
                        </p>
                    </div>
                    }
                    {this.state.idx == 6 && <div style={{ width: "100%", height: "700px", position: "relative" }}> {/* 부위별 사진-홈트레이닝 */}
                        <p className="learning1">
                            <CardBody >
                                <Link to={'/cobra'} id="logo"><b><CardImg src={require("../img/cobra.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>코브라스트레칭</h3></CardFooter>
                        </p>
                        <p className="learning2">
                            <CardBody >
                                <Link to={'/jumping'} id="logo"><b><CardImg src={require("../img/jumping.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>점핑잭</h3></CardFooter>
                        </p>
                        <p className="learning3">
                            <CardBody >
                                <Link to={'/mountain'} id="logo"><b><CardImg src={require("../img/mountain.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>마운틴클라이머</h3></CardFooter>
                        </p>
                        <p className="learning4">
                            <CardBody >
                                <Link to={'/sidebridge'} id="logo"><b><CardImg src={require("../img/side.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>사이드브릿지</h3></CardFooter>
                        </p>
                        <p className="learning5">
                            <CardBody >
                                <Link to={'/plank'} id="logo"><b><CardImg src={require("../img/home.png")} style={{ width: '400px', borderRadius: "10%" }} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>플랭크</h3></CardFooter>
                        </p>
                        <p className="learning6">
                            <CardBody >
                                <Link to={'/burpee'} id="logo"><b><CardImg src={require("../img/test.png")} style={{ width: '400px' , borderRadius: "10%"}} /></b></Link>
                            </CardBody><br/>
                            <CardFooter><h3>버피테스트</h3></CardFooter>
                        </p>
                    </div>
                    }
                </div>
            </div>
        )
    }
}
export default HealthLearning;