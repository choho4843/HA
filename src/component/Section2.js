import { Component } from "react";
import { UncontrolledCollapse,Card, CardImg, CardBody, Button} from 'reactstrap';

const url = "https://blog.naver.com/lbg6811"
const url1 = "https://www.gpnmall.kr/?_C_=474&n_media=27758&n_query=%ED%95%98%EC%9D%B4%EB%93%9C%EB%A1%9C%EC%9B%A8%EC%9D%B4&n_rank=1&n_ad_group=grp-a001-04-000000031284938&n_ad=nad-a001-04-000000220226201&n_keyword_id=nkw-a001-04-000005033262238&n_keyword=%ED%95%98%EC%9D%B4%EB%93%9C%EB%A1%9C%EC%9B%A8%EC%9D%B4&n_campaign_type=4&n_contract=tct-a001-04-000000000640445&n_ad_group_type=5&NaPm=ct%3Dlbyvbllk%7Cci%3D0Ba0000t8%2DfxDjjKweYd%7Ctr%3Dbrnd%7Chk%3Dc8294771d058a25e76ef2ab54cc268c4781ac15d"
const url2 = "https://www.coupang.com/vp/products/6697920737?itemId=15502760748&vendorItemId=82722079255&q=%EC%9B%8C%ED%84%B0+%EB%A1%9C%EC%9E%89%EB%A8%B8%EC%8B%A0&itemsCount=36&searchId=45ce593252ed4210a8279c170e8c4182&rank=37&isAddedCart="
class Section2 extends Component {

    render() {
        return (
            <>
                <div className="ad_box" style={{ width: '600px' }} id="toggle1">
                    <Card>
                        <CardImg src={require("../img/ad.jpg")} />
                        <CardBody>
                        </CardBody>
                        <UncontrolledCollapse toggler="toggle1">
                            <CardBody>
                                HealthAce는 한국 헬스와 PT의 경쟁력 향상을 위해 운영하는<br />
                                Health 전문 포털사이트로 헬스 트랜드 . 전략 연구 . 공모/전시/행사 소식<br />
                                헬스 관련 기업 정보 등을 제공하여 현업 헬스트레이너, <br />
                                관련 기업등 헬스에 특화된 사이트를 보유하고 있습니다 <br/>
                                <Button onClick={()=>{window.open(url)}}>지금 보러가기</Button>
                            </CardBody>
                        </UncontrolledCollapse>
                    </Card>
                </div>
                <div className="ad_box1" style={{ width: '600px' }} id="toggle2" >
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
                                프리미엄 HWPI 유청 단백질을 생산하고자하는 의지가 담겨있습니다.<br/>
                                <Button onClick={()=>{window.open(url1)}}>지금 보러가기</Button>
                            </CardBody>
                        </UncontrolledCollapse>
                    </Card>
                </div>
                <div className="ad_box2" style={{ width: '600px' }} id="toggle3" >
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
                                근력 운동 + 유산소 운동<br/>
                                <Button onClick={()=>{window.open(url2)}}>지금 보러가기</Button>
                               
                            </CardBody>
                        </UncontrolledCollapse>
                    </Card>
                </div>
            </>
        )
    }
}
export default Section2;