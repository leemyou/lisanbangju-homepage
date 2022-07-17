// 예배 안내 페이지
import React from 'react'
import styled from 'styled-components';
import Holder from 'react-holder-component'

function Service() {
return (
    <div className='main-body' id='service'>
        <h1 className='main-title'>예배안내</h1>
        <hr className='main-title-line'/>

        <Container>
            {/* 목사님이 보내주시는 예배 안내 이미지로 대체 */}
            <Holder
                    className=" w-100 h-100"
                    text='예배 안내 이미지'
            />
        </Container>

    </div>
)
}

export default Service



export const Container = styled.div`
    width: 60%;
    height: 60vh;
    background-color: #111;
    margin: 0 auto
`