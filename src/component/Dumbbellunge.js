import { Component } from "react";
import ReactPlayer from "react-player"
import { UncontrolledCollapse, Button, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';


class Dumbbellunge extends Component {
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
                            <h1>덤벨 런지</h1>
                        </p>

                        <p className="hl_main2"  >
                            런지는 일상생활에서 걷고 달리는 동작에 필요한 근육들을 강화시켜주고 축구 농구등의 스포츠에서 부상당하기<br />
                            쉬운 햄스트링에 대한 강화, 그리고 많은 분들이 원하시는 힙, 엉덩이 근육을 발달시켜주는 등 다양한 기능에 영향을 주는 운동입니다.
                            <br />
                        </p>

                        <p className="hl_player"  >
                            <ReactPlayer
                                className="player"
                                url={"https://www.youtube.com/watch?v=xSY-gKao3mc"}
                                playing controls
                                width="1200px"
                                height="800px"
                            />

                            <h1 style={{ color: "white" }}>VIDEO</h1>
                        </p>

                        <p className="hl_main3" >
                            무릎이 발끝을 넘지 않는다. 동작 자체가 한 발을 앞으로 내딛으며 무게중심을 앞쪽으로 이동시키기 때문에 무게중심이 발 앞꿈치 쪽으로 실리게 되는 실수가 많이 발생합니다.<br />
                            발바닥 전체에 체중을 실어주시고 무게중심을 아래로 이동시킵니다.<br />
                            스쿼트에서와 마찬가지로 체중이 앞쪽에 실리면서 무릎에 부담을 줄 수 있습니다.
                            <br />
                            <br />
                            무릎이 발끝을 향하게 한다.
                            흔히들 오다리, 엑스다리라고 불리는 내반슬과 외반슬이신 분들은 특히 주의하시는 것이 좋습니다.<br />
                            이것 또한 스쿼트와 마찬가지로 무릎이 굽혀 내려가는 진행방향이 발끝과 같은 방향을 향하도록 진행하셔야 무릎에 부담 없이 동작을 수행하실 수 있습니다.
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default Dumbbellunge;