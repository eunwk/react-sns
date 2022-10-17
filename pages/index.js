import React from 'react';
import MainPageLayout from '../components/layouts/MainPageLayout';
// import SubPageLayout from '../components/layouts/SubPageLayout';


const Home = () => {
    return (
        <MainPageLayout>
            <h1>게시글</h1>
            <h2>새로운 게시글</h2>
            <h2>인기게시글</h2>
            <h2>인기카테고리1</h2>
            <h2>인기카테고리2</h2>
        </MainPageLayout>
    )
}

export default Home;