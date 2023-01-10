import { Component } from "react";
import ReactPlayer from "react-player"
import { UncontrolledCollapse, Button, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';


class Pullup extends Component {
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
                            <h1>턱걸이</h1>
                        </p>

                        <p className="hl_main2"  >
                            어떤 운동을 하든 등근육을 발달시키기 위해서는 반드시 들어가는 필수 동작으로 그 중요성과 효율성은 두말할 필요가 없는 그야말로 최고의 맨몸 운동.<br />
                            후술하겠지만 상완이두근과 등근육 뿐만 아니라 상체근육 전체를 골고루 단련시키는 운동. 요즈음 여러 맨몸운동 사이트에서 괜히 턱걸이를 강조하는 게 아니다.<br />
                            광배근이 워낙 다른 운동에도 영향력이 상당하다 보니 보디빌딩. 크로스핏 등의 운동 뿐만 아니라 투기 종목 등에서도 정말 일상적으로 실시하는 운동이 바로 턱걸이다.<br />
                        </p>
                        <p className="hl_player"  >
                            <ReactPlayer
                                className="player"
                                url={"https://www.youtube.com/watch?v=38hYWnsOgZ0"}
                                playing controls
                                width="1200px"
                                height="800px"
                            />

                            <h1 style={{ color: "white" }}>VIDEO</h1>
                        </p>

                        <p className="hl_main3" >
                            철봉을 자신의 어깨 넓이 만큼 잡습니다.<br/>
                            가슴을 들어 견갑을 후인하강 시킵니다.<br/>
                            가슴이 죽지 않도록 가슴을 활쫙 피면서 광배근을 이용해 몸을 철봉으로 당겨줍니다.<br/>
                            철봉을 찍을 때 가슴을 터치한다는 느낌으로 올라간 뒤 내려올 떄 천천히 광배근에 자극을 느끼며 내려와주시면 됩니다.<br/>
                            <br />
                            <br />
                            턱걸이 실시 할때에는 숄더 패킹이 중요합니다.<br/>
                            숄더패킹은 어깨 부상을 예방하기 위해 견갑골을 후인 하강 하는 것을 말합니다. 철봉에 매달려 가슴을 위로 들어 준다음 날개뼈를 아래로 당겨주시면 됩니다.<br/>
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default Pullup;