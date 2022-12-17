import { Component } from "react";
import { CardBody, Button, CardImg, CardFooter } from "reactstrap";
import { Link } from 'react-router-dom';


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
                        <li><button color="white" value={"1"} onClick={this.divChange} style={{backgroundColor:"white", border:"0" , padding:"50px"}}>가슴 운동</button></li><br />
                        <li><Button color="white" value={"2"} onClick={this.divChange}>하체 운동</Button></li> <br />
                        <li><Button color="white" value={"3"} onClick={this.divChange}>어깨 운동</Button></li> <br />
                        <li><Button color="white" value={"4"} onClick={this.divChange}>등 운동</Button></li> <br />
                        <li><Button color="white" value={"5"} onClick={this.divChange}>팔 운동</Button></li> <br />
                        <li><Button color="white" value={"6"} onClick={this.divChange}>홈트레이닝</Button></li> <br />
                    </ul>
                </div>
                <div style={{ float: "right", width: "85%" }}> {/* 오른쪽 사진링크 div */}
                    {this.state.idx == 1 && <div style={{ width: "100%", height: "700px", position: "relative" }}> {/* 부위별 사진-가슴 */}
                        <p className="learning1">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/bench.jpg")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>벤치프레스</h3></CardFooter>
                        </p>
                        <p className="learning2">
                            <CardBody >
                                <Link to={'/chestpress'} id="logo"><b><CardImg src={require("../img/chest.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>체스트프레스</h3></CardFooter>
                        </p>
                        <p className="learning3">
                            <CardBody >
                                <Link to={'/peckdeckfly'} id="logo"><b><CardImg src={require("../img/fly.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>펙덱플라이</h3></CardFooter>
                        </p>
                        <div className="learning4">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><img src={require("../img/dips.png")} style={{ width: '400px', borderRadius: "10%" }} /></Link>
                            </CardBody>
                            <CardFooter><h3>딥스</h3></CardFooter>
                        </div>
                        <p className="learning5">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/k.fly.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>케이블플라이</h3></CardFooter>
                        </p>
                        <p className="learning6">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/deombel.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>덤벨프레스</h3></CardFooter>
                        </p>
                    </div>
                    }
                    {this.state.idx == 2 && <div style={{ width: "100%", height: "700px", position: "relative" }}>{/* 부위별 사진-하체 */}
                        <p className="learning1">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/squat.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>스쿼트</h3></CardFooter>
                        </p>
                        <p className="learning2">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/leg.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>레그익스텐션</h3></CardFooter>
                        </p>
                        <p className="learning3">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/legpress.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>레그프레스</h3></CardFooter>
                        </p>
                        <p className="learning4">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/deombelrunje.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>덤벨런지</h3></CardFooter>
                        </p>
                    </div>
                    }
                    {this.state.idx == 3 && <div style={{ width: "100%", height: "700px", position: "relative" }}> {/* 부위별 사진-어깨 */}
                        <p className="learning1">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/milli.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>밀리터리프레스</h3></CardFooter>
                        </p>
                        <p className="learning2">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/ka.fly.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>케이블리버스플라이</h3></CardFooter>
                        </p>
                        <p className="learning3">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/side.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>사이드레터럴레이즈</h3></CardFooter>
                        </p>
                        <p className="learning4">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/sholder.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>숄더프레스</h3></CardFooter>
                        </p>
                    </div>
                    }
                    {this.state.idx == 4 && <div style={{ width: "100%", height: "700px", position: "relative" }}> {/* 부위별 사진-등 */}
                        <p className="learning1">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/pull.jpg")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>턱걸이</h3></CardFooter>
                        </p>
                        <p className="learning2">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/down.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>랫플다운</h3></CardFooter>
                        </p>
                        <p className="learning3">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/babel.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>바벨로우</h3></CardFooter>
                        </p>
                        <p className="learning4">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/citied.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>시티드로우</h3></CardFooter>
                        </p>
                        <p className="learning5">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/cable.jpg")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>케이블암플다운</h3></CardFooter>
                        </p>
                        <p className="learning6">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/dead.jpg")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>데드리프트</h3></CardFooter>
                        </p>
                    </div>
                    }
                    {this.state.idx == 5 && <div style={{ width: "100%", height: "700px", position: "relative" }}> {/* 부위별 사진-팔 */}
                        <p className="learning1">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/easybar.jpg")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>이지바컬</h3></CardFooter>
                        </p>
                        <p className="learning2">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/overhand.jpg")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>오버핸드 익스텐션</h3></CardFooter>
                        </p>
                        <p className="learning3">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/concen.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>컨센트레이션컬</h3></CardFooter>
                        </p>
                        <p className="learning4">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/dumbel.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>덤벨컬</h3></CardFooter>
                        </p>
                        <p className="learning5">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/k.fly.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>케이블플라이</h3></CardFooter>
                        </p>
                        <p className="learning6">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/cull.jpg")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>바벨컬</h3></CardFooter>
                        </p>
                    </div>
                    }
                    {this.state.idx == 6 && <div style={{ width: "100%", height: "700px", position: "relative" }}> {/* 부위별 사진-홈트레이닝 */}
                        <p className="learning1">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/cobra.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>코브라스트레칭</h3></CardFooter>
                        </p>
                        <p className="learning2">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/jumping.jpg")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>점핑잭</h3></CardFooter>
                        </p>
                        <p className="learning3">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/mountain.png")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>마운틴클라이머</h3></CardFooter>
                        </p>
                        <p className="learning4">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/side.jpg")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>사이드브릿지</h3></CardFooter>
                        </p>
                        <p className="learning5">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/plank.jpg")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
                            <CardFooter><h3>플랭크</h3></CardFooter>
                        </p>
                        <p className="learning6">
                            <CardBody >
                                <Link to={'/benchpress'} id="logo"><b><CardImg src={require("../img/test.jpg")} style={{ width: '400px' }} /></b></Link>
                            </CardBody>
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