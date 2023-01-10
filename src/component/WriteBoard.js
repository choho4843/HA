import {  useRef, useState } from 'react';
import axios from 'axios';
// Toast 에디터
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export default function WriteBoard() {

    const editorRef = useRef();
    const handleRegisterButton = () => {
      // 입력창에 입력한 내용을 HTML 태그 형태로 취득
      console.log(editorRef.current?.getInstance().getHTML());
      // 입력창에 입력한 내용을 MarkDown 형태로 취득
      console.log(editorRef.current?.getInstance().getMarkdown());
    }
    const [board,setBoard] = useState({title:'', writer:'',subtitle:''})
    const [files,setFiles] = useState({});
  
    const fileChange =(e)=> {
      setFiles({file:e.target.files[0]})
    }
  
    const change =(e)=> {
      const name = e.target.name;
      const value = e.target.value;
      
      setBoard({...board, [name]: value})
    }
  
    const submit=(e) => {
      e.preventDefault();
      console.log(board.title);
      console.log(board.writer);
      console.log(board.subtitle);
  
      const formData = new FormData();
      formData.append('title',board.title);
      formData.append('writer',board.writer);
      formData.append('subtitle',board.subtitle);
      formData.append('file',files.file)
  
      axios.post('//localhost:8080/writeform2',formData)
      .then((response)=> {
        console.log(response.data);
        alert(response.data);
      })
      .catch((error)=> {
        console.log(error);
      })
    }

  return (
    <div>
      <br />
      <div>
        <div>
          <br />
          <form>
            <table>
              {/* 제목 */}
              <tr><td>
                <div class="input-group input-group -lg">
                  <span class="input-group-text" id="title" for='title' >제목</span>
                  <input type="text" name='title' class="form-control" id='title' value={board.title} onChange={change}
                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                </div>
                <br/>
                </td>
              </tr>
              <tr><td>
                <div class="input-group input-group -lg">
                  {/*부제목 */}
                  <span class="input-group-text" id='writer' for='writer'>작성자</span>
                  <input type="text" name='writer' class="form-control" id='subTitle' value={board.writer} onChange={change}
                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                </div>
                <br/>
                </td>
              </tr>
              <tr><td>
                <div class="input-group input-group -lg" >
                  {/* 작성자입력란 */}
                  <span class="input-group-text" id='subtitle' for='subtitle' >부제목</span>
                  <textarea class="form-control" name='subtitle' id="subtitle" value={board.subtitle} onChange={change} />
                </div>
                <br/>
                </td>
              </tr>
              <tr><td>

                
                    <div>
                       
                        <Editor
                        ref={editorRef} 
                          placeholder="내용을 입력해주세요."
                          previewStyle="vertical" // 미리보기 스타일 지정
                          height="300px" // 에디터 창 높이
                          initialEditType="wysiwyg" //
                          toolbarItems={[
                            // 툴바 옵션 설정
                            ['heading', 'bold', 'italic', 'strike'],
                            ['hr', 'quote'],
                            ['ul', 'ol', 'task', 'indent', 'outdent'],
                            ['table', 'image', 'link'],
                            ['code', 'codeblock']
                          ]}
                          // useCommandShortcut={false} // 키보드 입력 컨트롤 방지
                        ></Editor>
 
                      </div>                 
                </td>
              </tr>
              <tr>
              <td>
                <div class="input-group mb-3" >
                  <label class="input-group-text" for="">썸네일</label>
                  <input type="file" class="form-control" name='file' id='board_file' accept='image/*'
                    onChange={fileChange} />
                </div>
                </td>
              </tr>
            </table>
          </form>
          <div>
            <button type='button' className='btn btn-outline-dark' onClick={submit}>등록</button>
          </div>
        </div>
      </div>
      <br/><br/>
    </div>
  );
}