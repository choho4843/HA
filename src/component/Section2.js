import { Component } from "react";
import { UncontrolledCollapse,Card, CardImg, CardBody, } from 'reactstrap';

class Section2 extends Component {
    render() {
        return (
            <>
                <div className="ad_box" style={{ width: '700px' }} id="toggle1">
                    <Card>
                        <CardImg src={require("../img/ad.jpg")} />
                        <CardBody>
                        </CardBody>
                        <UncontrolledCollapse toggler="toggle1">
                            <CardBody>
                                HealthAce는 한국 헬스와 PT의 경쟁력 향상을 위해 운영하는<br />
                                Health 전문 포털사이트로 헬스 트랜드 . 전략 연구 . 공모/전시/행사 소식<br />
                                헬스 관련 기업 정보 등을 제공하여 현업 헬스트레이너, <br />
                                관련 기업등 헬스에 특화된 사이트를 보유하고 있습니다
                            </CardBody>
                        </UncontrolledCollapse>
                    </Card>
                </div>
                <div className="ad_box1" style={{ width: '700px' }} id="toggle2" >
                    <Card>
                        <CardImg src={require("../img/pro.png")} />
                        <CardBody>
                        </CardBody>
                        <UncontrolledCollapse toggler="toggle2">
                            <CardBody>
                                플래티넘 하이드로 웨이
                                플래티넘은 백금을 의미합니다.아주 높은 고온 정제 과정을 <br />
                                통해서 불순물이 없는 깨끗한 백금이 탄생하듯이 <br />
                                하이드로 웨이는 고같드로 하이드로 과정을 거쳐서 순수한<br />
                                프리미엄 HWPI 유청 단백질을 생산하고자하는 의지가 담겨있습니다.
                            </CardBody>
                        </UncontrolledCollapse>
                    </Card>
                </div>
                <div className="ad_box2" style={{ width: '700px' }} id="toggle3" >
                    <Card>
                        <CardImg src={require("../img/equipment.png")} />
                        <CardBody>
                        </CardBody>
                        <UncontrolledCollapse toggler="toggle3">
                            <CardBody>
                                점점 사라지는 근력 <br />
                                급격히 줄어드는 근육 <br />
                                이제 엑스킹으로<br />
                                뱃살걱정 끝 !! <br />
                                근력 운동 + 유산소 운동
                            </CardBody>
                        </UncontrolledCollapse>
                    </Card>
                </div>
            </>
        )
    }
}
export default Section2;