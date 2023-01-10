import { Link } from "react-router-dom";
// Toast-UI Viewer 임포트
import { Button, Col, Form, Input } from "reactstrap";
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import AllList from "./AllList";
import { AiOutlineUserDelete } from "react-icons/ai"
import { AiOutlinePlus } from "react-icons/ai"
import { Component } from "react";



function Community() {
    const markdown = '## 마크다운 헤더';

    // HTML: span태그 글자색을 파란색으로 설정
    const html = '<h3> html 헤더 <span style="color:blue;">파란색</span></h3>';
  
    return (
        
       <div>
       <Link to={'/writeform2'}>
       <Button className="boardbutton" style={{ backgroundColor: "white", color: "black" }}><AiOutlineUserDelete style={{ position: "relative", right: "315px" }} />당신의 운동영상 지금 바로 공유해보세요
           <AiOutlinePlus style={{ position: "relative", left: "315px" }} /></Button></Link>
 
   
        
        <AllList/>
         
      </div>
    );
  }
  
  export default Community;