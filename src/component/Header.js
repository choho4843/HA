
import { Component } from "react";
import { Link } from 'react-router-dom';
import {  Modal, ModalBody, ModalHeader, Col, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import Button from '@mui/material/Button';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            repassword: '',
            loginmodal: false,
            joinmodal: false,
            idcheck: false,
            loginValue: { id: '', password: '' },
            joinValue: { id: '', password: '', name: '', email: '' }
        }
    }

    loginToggle = (e) => {
        this.setState({ loginmodal: !this.state.loginmodal })
    }
    joinToggle = (e) => {
        this.setState({ joinmodal: !this.state.joinmodal })
    }

    loginChange = (e) => {
        console.log(e.target.value);
        let name = e.target.name;
        let value = e.target.value;

        this.setState({ loginValue: { ...this.state.loginValue, [name]: value } })
    }
    joinChange = (e) => {
        console.log(e.target.value);
        let name = e.target.name;
        let value = e.target.value;

        if (name == 'id') {
            this.setState({ idcheck: false })
        }

        this.setState({ joinValue: { ...this.state.joinValue, [name]: value } })
    }


    login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/login", null, {
            params: this.state.loginValue
        })
            .then(res => {
                this.props.setId(res.data);
                this.setState({ id: res.data });
                this.loginToggle();
            })
            .catch(err => {
                console.log(err);
                alert("아이디 또는 패스워드가 틀립니다.");
            })
    }

    checkid = (e) => {
        axios.post('http://localhost:8080/doubleid', null, {
            params: { id: this.state.joinValue.id }
        })
        .then(res=> {
            if(res.data==true) {
                alert("사용할 수 없는 아이디입니다.")
            } else {
                alert("사용 가능한 아이디입니다.");
                this.setState({idcheck:true});
            }
        })
        .catch(err=> {
            alert("사용할 수 없는 아이디입니다.");
        })
    }
    join = (e) => {
        console.log(this.state.joinValue);
        if (this.state.joinValue.name == '') {
            alert('이름을 입력하세요.');
            return;
        } else if (this.state.joinValue.id == '') {
            alert('아이디를 입력하세요.');
            return;
        } else if (this.state.joinValue.password == '') {
            alert("비밀번호를 입력하세요.");
            return;
        } else if (this.state.joinValue.password != this.state.repassword) {
            alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
            return;
        } else if (this.state.joinValue.email == '') {
            alert("이메일을 입력하세요.");
            return;
        } else if (this.state.idcheck == false) {
            alert("아이디 중복 체크하세요.");
            return;
        }

        axios.post("http://localhost:8080/join", null, {
            params: this.state.joinValue
        })
            .then(res => {
                if (res.data == true)
                    this.joinToggle();
                else alert("회원가입 실패");
            })
            .catch(err => {
                console.log(err);
                alert("회원가입 실패")
            })
    }

    checkComunity = (e) => {
        if(this.state.id=='') {
            e.preventDefault();
            alert('로그인이 필요합니다.')
        }
    }

    render() {
        return (
            <div style={{texalign:"center"}}>
                <div className="nav-items">
                    <div className="nav-item">
                        <Link to={'/'} id="logo">HealthAce</Link>
                    </div>
                    <div className="nav-item">
                        <Link to={'/HealthLearning'} id="logo">HealthLearning</Link>
                    </div>
                    <div className="nav-item">
                        <Link to={'/community'} id="logo" onClick={this.checkComunity}>Community</Link>
                    </div>
                </div>
                <ul style={{ listStyle: "none", float: "right" }}>
                    <li className="nav-item-n"> <Button id="logo" style={{ textDecoration: "none" }} onClick={this.joinToggle}><b>Join</b></Button></li>
                    <Modal isOpen={this.state.joinmodal} fade={true} toggle={this.joinToggle}>
                        <ModalHeader style={{ margin: "0 auto" }} >회원가입</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup row>
                                    <Col sm={4}>
                                        <label for="id" >이름</label>
                                    </Col>
                                    <Col sm={5}>
                                        <Input type='text' name='name' id="name" value={this.state.joinValue.name} onChange={this.joinChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={4}>
                                        <label for="id" >아이디</label>
                                    </Col>
                                    <Col sm={5}>
                                        <Input type='text' name='id' id="id" value={this.state.joinValue.id} onChange={this.joinChange} />
                                    </Col>
                                    <Col>
                                        <Button sm={3} color='secondary' onClick={this.checkid}>중복</Button>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={4}>
                                        <label for="password" >비밀번호</label>
                                    </Col>
                                    <Col sm={5}>
                                        <Input type='password' name='password' id="password" value={this.state.joinValue.password} onChange={this.joinChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={4}>
                                        <label for="password" >비밀번호 확인</label>
                                    </Col>
                                    <Col sm={5}>
                                        <Input type='password' name='repassword' value={this.state.repassword} id="repassword" onChange={(e)=>{this.setState({repassword:e.target.value})}}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={4}>
                                        <label for="email" >E-mail</label>
                                    </Col>
                                    <Col sm={5}>
                                        <Input type='text' name='email' id="email" value={this.state.joinValue.email} onChange={this.joinChange} />
                                    </Col>
                                </FormGroup>
                                <Col><Button onClick={this.join} >회원 가입</Button></Col>

                            </Form>
                        </ModalBody>
                    </Modal>
                    <li className="nav-item-m"> <Button id="logo" style={{ textDecoration: "none" }} onClick={this.loginToggle}><b>Login</b></Button></li>
                    <Modal isOpen={this.state.loginmodal} fade={true} toggle={this.loginToggle}>
                        <ModalHeader style={{ margin: "0 auto" }} >Login</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup row>
                                    <Col sm={4}>
                                        <label for="id" >아이디</label>
                                    </Col>
                                    <Col sm={5}>
                                        <Input type='text' name='id' id="id" value={this.state.loginValue.id} onChange={this.loginChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={4}>
                                        <label for="password" >비밀번호</label>
                                    </Col>
                                    <Col sm={5}>
                                        <Input type='password' name='password' id="password" value={this.state.loginValue.password} onChange={this.loginChange} />
                                    </Col>
                                </FormGroup>
                                <Col><Button onClick={this.login}>로그인</Button></Col>
                            </Form>
                        </ModalBody>
                    </Modal>
                    <li className="nav-item-s">{this.state.id}</li>
                </ul>

            </div>
        )
    }
}
export default Header;