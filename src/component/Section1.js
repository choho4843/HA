import { Component } from "react";
import ReactPlayer from "react-player"

class Section1 extends Component {
    render() {
        return (

            <div className="mainplayer" text-align="center">
                <div style={{float:'left'}}>
                    <ReactPlayer
                        width='1000px'         // 플레이어 크기 (가로)
                        height='720px'
                        className="player"
                        url={"https://www.youtube.com/watch?v=_4VRmEYFVcg"}
                        playing controls
                    />
                </div>
                <div style={{float:'right'}}>
                    <p className="player_text" >

                        HA는 대한민국 숏폼 사진 플랫폼입니다.<br />
                        <br />
                        <br />
                        HA의 미션은 여러 사람들의 의견을 공유하고<br />
                        운동활력을 고취,기쁨을 선사하는 것입니다!<br />
                    </p>
                </div>
            </div>



        )
    }
}
export default Section1;