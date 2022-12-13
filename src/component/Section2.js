import { Component } from "react";

class Section2 extends Component {
    render() {
        return (
            <>
                <div className="ad_box" >
                    <img src={require("../img/ad.jpg")} width='1200px' height='1000px' />
                </div>
                <p className="ad_text" text-align="right" >

                    HealthAce는 한국 헬스와 PT의 경쟁력 향상을 위해 운영하는 <br />
                    Health 전문 포털사이트로 <br />
                    <br />헬스 트랜드 . 전략 연구 . 공모/전시/행사 소식 .헬스 <br />
                    관련 기업 정보 등을 제공하여 현업 헬스트레이너, <br />
                    관련 기업등 헬스에 특화된 사이트를 보유하고 있습니다<br />
                </p>
            </>
        )
    }
}
export default Section2;