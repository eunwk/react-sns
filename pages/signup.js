import React from 'react';
import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import MainPageLayout from '../components/pageLayouts/MainPageLayout';
// import SubPageLayout from '../components/layouts/SubPageLayout';


const SignUp = () => {
    return (
        <MainPageLayout>
            <Head>
                <title>회원가입 | 커뮤니티 이름</title>
            </Head>
            <h1>회원가입</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>이메일</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>비밀번호확인</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">회원가입</Button>
            </Form>
            <div><Link href="#"><a>아이디찾기</a></Link></div>
            <div><Link href="#"><a>비밀번호 찾기</a></Link></div>
            <div><Link href="#"><a>회원가입</a></Link></div>
            <div className="other-login">
                <h2>간편회원가입</h2>
                <Link href="#"><a>카카오</a></Link>
                <Link href="#"><a>구글</a></Link>
                <Link href="#"><a>깃허브</a></Link>
                <Link href="#"><a>페이스북</a></Link>
            </div>
        </MainPageLayout>
    )
}

export default SignUp;