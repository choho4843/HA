import axios from "axios";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { Viewer } from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import { Link } from "react-router-dom";
import { Button } from "reactstrap";


export default function DetailBoard(){
    const [board,setBoard] = useState({writer:'',title:'',subtitle:'',content:'',thumbnail:'',regdate:''})
    const {id} = useParams();
    const [show,setshow] = useState(false);


    
    
    

    useEffect(() => {
        axios.get(`http://localhost:8080/boarddetail/${id}`)
    .then((response)=>{
        setBoard(response.data);
        setshow(true);
    })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return(
        <div>
        <br />
            <br/>
            <form >
              <table style={{  width: "100%", maxWidth: "1120px", margin: "0 auto", width: "100%", height: "100%"}}>
                {/* 제목 */}
                <tr>
                  <div className="input-group input-group -lg">
                    <span className="input-group-text" id="title" for='title' >제&nbsp;&nbsp;&nbsp;목</span>
                    <input type="text" name='title' className="form-control" id='title' value={board.title} 
                      aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" readOnly/>
                  </div>
                </tr>
                <br/>
                <tr>
                  <div class="input-group input-group -lg">
                    {/*부제목 */}
                    <span className="input-group-text" id='writer' for='writer'>작성자</span>
                    <input type="text" name='writer' className="form-control" id='subTitle' value={board.writer} 
                      aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" readOnly/>
                  </div>
                </tr>
                <br/>
                <tr>
                  <div className="input-group input-group -lg" >
                    {/* 작성자입력란 */}
                    <span className="input-group-text" id='subtitle' for='subtitle' >부제목</span>
                    <input className="form-control" name='subtitle' id="subtitle" value={board.subtitle}
                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" readOnly/>
                  </div>
                </tr>
                <br/>
                <tr>
                  <div>
  
                    <center>
                    {show && <Viewer initialValue={board.content} readOnly/>}
                
                    </center>
                  </div>
                </tr>
                <tr>
                <Link to={'/community'} className='detailbutton'>
                  <button type='button' className='btn btn-outline-dark'>
                     확인
                     </button>
                     </Link>
                </tr>
              </table>
            </form>
           
      </div>
    )
}