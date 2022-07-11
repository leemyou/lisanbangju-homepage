// 메인화면
import React from 'react'
import styled from 'styled-components';
import Carousels from '../components/Carousels'


const Home = () => {
    return (
    // <Container id="Home">
    //     <h1>Home</h1>
    // </Container>
    <div className='main-body' id='Home'>
        <Carousels />
    </div>

    )
}

export default Home

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #c8c8c8;
`