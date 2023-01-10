import { Component } from "react";
import ReactPlayer from "react-player"
import { UncontrolledCollapse, Button, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';


class Side extends Component {
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
                            <h1>사이드레터럴레이즈</h1>
                        </p>

                        <p className="hl_main2"  >
                            사이드 레터럴 레이즈는 어깨 근육인 삼각근 측명 부위를 발달시키는 운동입니다.<br/>
                            저중량 고반복으로 사이드 레터럴 레이즈를 하면 어깨 측면 근육의 볼륨 또한 키울 수 있기 때문에<br/>
                            이 운동은 어깨를 넓게 만들고 싶어 하는 사람이라면 운동 루틴에 넣어줘야 할 운동입니다.
                        </p>
                        <p className="hl_player"  >
                            <ReactPlayer
                                className="player"
                                url={"https://www.youtube.com/watch?v=YdhHnZxcpgY"}
                                playing controls
                                width="1200px"
                                height="800px"
                            />

                            <h1 style={{ color: "white" }}>VIDEO</h1>
                        </p>

                        <p className="hl_main3" >
                            다리를 어깨 넓이로 벌린 뒤 흉곽을 열고 몸을 지탱해줍니다.<br />
                            몸을 정자세로 서있기 보단 살짝 앞으로 기울여 줍니다.<br />
                            승모근에는 최대한 힘을 빼려한 뒤 어깨 높이까지만 덤벨을 옆으로 천천히 들어 올려줍니다.<br />
                            덤벨을 내릴 대 최대한 천천히 자극을 느끼며 내려주는게 포인트 입니다. <br />

                            <br />
                            <br />
                            덤벨사용이 손목이 꺽이지 않도록 운동해주며 반동을 이용해주기보다는 어깨로만 이동을 해줍니다. 측면 삼각근으로 덤벨을 들어준다고 생각하고 운동을 진행합니다.<br />

                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default Side;