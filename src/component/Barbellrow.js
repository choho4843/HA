import { Component } from "react";
import ReactPlayer from "react-player"
import { UncontrolledCollapse, Button, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';


class Barbellrow extends Component {
    render() {
        return (
            <>
                             <div style={{ float: "left", width: "15%", paddingLeft: "3%" }}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button color="white" id="toggle1">
                        <span className="side_bar1">∨&nbsp;&nbsp;가슴 운동</span>
                    </Button>
                    <UncontrolledCollapse toggler="toggle1">
                        <CardBody>
                            <Link to={'/benchpress'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;벤치프레스</b></Link><br />
                            <Link to={'/chestpress'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;체스트프레스</b></Link><br />
                            <Link to={'/peckdeckfly'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;펙덱플라이</b></Link><br />
                            <Link to={'/dips'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;딥스</b></Link><br />
                            <Link to={'/cabelfly'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;케이블 플라이</b></Link><br />
                            <Link to={'/dumbbelpress'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;덤벨 프레스</b></Link><br />
                        </CardBody>
                    </UncontrolledCollapse>
                    <br />
                    <Button color="white" id="toggle2">
                        <span className="side_bar1">∨&nbsp;&nbsp;하체 운동</span>
                    </Button>
                    <UncontrolledCollapse toggler="toggle2">
                        <CardBody>
                            <Link to={'/squat'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;스쿼트</b></Link><br />
                            <Link to={'/legextension'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;레그익스텐션</b></Link><br />
                            <Link to={'/legpress'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;레그프레스</b></Link><br />
                            <Link to={'/dumbellunge'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;덤벨런지</b></Link><br />
                        </CardBody>
                    </UncontrolledCollapse>
                    <br />
                    <Button color="white" id="toggle4">
                        <span className="side_bar1">∨&nbsp;&nbsp;어깨 운동</span>
                    </Button>
                    <UncontrolledCollapse toggler="toggle4">
                        <CardBody>
                            <Link to={'/militarypress'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;밀리터리프레스</b></Link><br />
                            <Link to={'/upright'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;업라이트로우</b></Link><br />
                            <Link to={'/side'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;사이드레터럴레이즈</b></Link><br />
                            <Link to={'/sholderpress'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;숄더프레스</b></Link><br />
                        </CardBody>
                    </UncontrolledCollapse>
                    <br />
                    <Button color="white" id="toggle3">
                        <span className="side_bar1">∨&nbsp;&nbsp;등 운동</span>
                    </Button>
                    <UncontrolledCollapse toggler="toggle3">
                        <CardBody>
                            <Link to={'/pullup'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;턱걸이</b></Link><br />
                            <Link to={'/letpull'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;랫플다운</b></Link><br />
                            <Link to={'/barbellrow'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;바벨로우</b></Link><br />
                            <Link to={'/seatedrow'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;시티드로우</b></Link><br />
                            <Link to={'/cabledown'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;케이블암플다운</b></Link><br />
                            <Link to={'/dead'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;데드리프트</b></Link><br />
                        </CardBody>
                    </UncontrolledCollapse>
                    <br />

                    <Button color="white" id="toggle5">
                        <span className="side_bar1">∨&nbsp;&nbsp;팔 운동</span>
                    </Button>
                    <UncontrolledCollapse toggler="toggle5">
                        <CardBody>
                            <Link to={'/easybar'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;이지바컬</b></Link><br />
                            <Link to={'/overhead'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;오버헤드 익스텐션</b></Link><br />
                            <Link to={'/concentration'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;컨센트레이션컬</b></Link><br />
                            <Link to={'/cabelpress'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;케이블프레스다운</b></Link><br />
                            <Link to={'/barbelcull'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;바벨컬</b></Link><br />

                        </CardBody>
                    </UncontrolledCollapse>
                    <br />
                    <Button color="white" id="toggle6">
                        <span className="side_bar1">∨&nbsp;&nbsp;홈트레이닝</span>
                    </Button>
                    <UncontrolledCollapse toggler="toggle6">
                        <CardBody>
                            <Link to={'/cobra'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;코브라스트레칭</b></Link><br />
                            <Link to={'/jumping'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;점핑잭</b></Link><br />
                            <Link to={'/mountain'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;마운틴클라이머</b></Link><br />
                            <Link to={'/sidebridge'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;사이드브릿지</b></Link><br />
                            <Link to={'/plank'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;플랭크</b></Link><br />
                            <Link to={'/burpee'} id="logo" className="side_bar2"><b>&nbsp;&nbsp;버피테스트</b></Link><br />
                        </CardBody>
                    </UncontrolledCollapse>

                </div>
                <div style={{ float: "right", width: "85%", height: "120" }}>
                    <div className="hl_main">
                        <p className="hl_main1" >
                            <h1>바벨로우</h1>
                        </p>

                        <p className="hl_main2"  >
                            벤트오버 바벨로우는 등 근육을 단련하고 싶은 사람이라면 꼭 해야 하는 운동 중 하나다. 등에 있는 대부분의 운동을 사용하기 때문이다.<br />
                            꾸준히 한다면 넓고 두꺼운 등을 만들 수 있다. 등 근육이 사용되고 있는지, 자극을 느끼기도 쉬워 초보자에게도 권장된다.<br />
                            자극하고 싶은 등 근육 부위를 얼마나 숙이는지, 바벨을 어떻게 잡는지에 따라 조절할 수 있다.
                        </p>
                        <p className="hl_player"  >
                            <ReactPlayer
                                className="player"
                                url={"https://www.youtube.com/watch?v=EEqGCoTuYfQ"}
                                playing controls
                                width="1200px"
                                height="800px"
                            />

                            <h1 style={{ color: "white" }}>VIDEO</h1>
                        </p>

                        <p className="hl_main3" >
                        운동 효과를 높이려면 주의해야 할 점이 있다. 몸을 낮출 때는 허리가 아닌 둔부부터 내려야 한다. 등을 곧게 펼 때는 복근에 힘을 줘 허리에 무리가 가지 않도록 해야 한다.<br/>
                         가슴은 내밀고 어깨는 뒤로 당긴다. 시선은 발보다 약간 앞을 봐 목이 구부러지지 않도록 한다. 바벨을 당길 땐 손목이 굽지 않게 주의하고, 팔꿈치가 몸의 바깥쪽을 향하게 해야 한다.<br/>
                          바벨을 들고 내릴 때 자연스럽게 팔꿈치가 옆구리를 스치는 것이 좋다. 바가 복부나 흉골에 최대한 닿았을 땐 팔꿈치가 몸통보다 높게 위치해야 한다.<br/>
                           팔꿈치를 펼 때는 완전히 곧게 펴지 말야아 한다. 잘못하다 다칠 수 있다. 또한, 더 큰 효과를 보려면 바벨은 천천히 힘을 통제하면서 내리는 것이 좋다.

                            <br />
                            <br />
                            바벨로우는 생각보다 고중량을 다룰 수 있는 운동입니다. 그러다보니 허리를 굽힌 상태로 진행하는 바벨로우는 기립근에 큰 부하를 줄 수 있고<br />
                            그러다 보니 허리가 약한 사람들은 바벨 로우 중량을 올리기힘들고, 자세를 제대로 유지하기 힘든 운동입니다.<br/>

                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default Barbellrow;