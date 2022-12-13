import { Component } from "react";
import ReactPlayer from "react-player"


class Benchpress extends Component {
    render() {
        return (
            <div>
            <div className="hl_main">
                <p className="hl_main1" >
                    <h1>벤치프레스</h1>
                </p>

                <p className="hl_main2"  >

                    벤치프레스는 대표적인 가슴 근육운동이다.<br />
                    상체의 대근육 중 하나인 가슴근육의 두께와 넓이를 키우는 복합관절운동으로써,<br />
                    주근육은 가슴근육이지만 팔과 어깨도 함께 사용하여 자세를 달리 잡으면<br />
                    팔근육이나 어깨근육에도 보다 더 자극을 줄수 있는 운동이다.<br />
                </p>

                <p className="hl_player"  >
                    <ReactPlayer
                        className="player"
                        url={"https://www.youtube.com/watch?v=MxrdZrt6uQM"}
                        playing controls
                        width= "1200px"
                        height="800px"
                    />

                    <h1 style={{ color: "white" }}>VIDEO</h1>
                </p>

                <p className="hl_main3" >
                    벤치프레스 자세는 벤치의 각도 조절을 통해 효과를 달리할수 있다. 일자 벤치를 그대로 이용하는것이 기본 동작이며,<br />
                    이는 가슴근육을 골고루 발달시킬수 있다. 여기서 벤치를 위로 비스듬히 세워주는것은 인클라인 자세로써,<br />
                    윗 근육 발달에 좋고 벤치를 더 아래로 하는것은 디클라인 자세로, 아랫근육발달에 좋다.

                    <br />
                    <br />


                    기본 그립은 팔을 굽혀 바벨을 내렸을때 팔의 각도가 일자로 맞아떨어질 정도의 간격으로 넉넉하게 잡아줘야한다.<br />
                    여기서 더 넓게 잡거나 더 좁게 잡으면 말했듯이 다른 근육의 자극이 높아지므로, <br />
                    가슴근육의 자극에 집중하고 싶다면 기본 그립에 충실하여 잡아준다.
                </p>
            </div>
            </div>
        )
    }
}

export default Benchpress;