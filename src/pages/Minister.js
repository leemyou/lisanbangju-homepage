//교역자 안내 페이지
import React from 'react'
import styled from 'styled-components';
import Holder from 'react-holder-component';


const UL = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: 5%;
`
const LI = styled.li`
    justify-content: space-between;
    margin: 0 40px;
    height: 350px;
    background-color: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 2px 15px 15px 5px gray;
`
const H4 = styled.h4`
    font-size: 1.3rem;
    text-align: center;
    margin-top: 10px;
`

const Minister = () => {
    return (
    <div className='main-body' id='minister'>
        <h1 className='main-title'>교역자안내</h1>
        <hr className='main-title-line'/>

        
        <UL className='minister-body'>

            <LI className='minister-item'>
                {/* 나중에 이 부분 이대로 이미지로 바꾸면 됨. */}
                <Holder
                    className="d-block"
                    width= '250px'
                    height= '300px'
                    text='img'
                    updateOnResize={true}
                    alt="First Selide"
                />
                <H4>담임목사 오시헌</H4>
            </LI>
            <LI className='minister-item'>
                <Holder
                    className="d-block"
                    width= '250px'
                    height= '300px'
                    text='img'
                    updateOnResize={true}
                    alt="First Selide"
                />
                <H4>부담임목사 유준희</H4>
            </LI>
            <LI className='minister-item'>
                <Holder
                    className="d-block"
                    width= '250px'
                    height= '300px'
                    text='img'
                    updateOnResize={true}
                    alt="First Selide"
                />
                <H4>심방 전도사 김남옥 </H4>
            </LI>
        </UL>

    </div>
    )
}

export default Minister

// export const Container = styled.div`
//     width: 100%;
//     height: 100vh;
//     background-color: #9999;
// `