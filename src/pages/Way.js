//오시는길 페이지
import React from 'react'
import styled from 'styled-components';
import Map from '../components/Map'

const Way = () => {
  return (
    <div className='main-body' id='way'>
        <h1 className='main-title'>오시는 길</h1>
        <hr className='main-title-line'/>
        <Map/>
        <LocTitle>경기도 고양시 일산서구 일중로 17</LocTitle>
        <LocSubtitle>(일산동 524-16) 포오스프라자 3층 일산방주교회 </LocSubtitle>
    </div>
  )

}

export default Way

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #111;
`
const LocTitle = styled.h4 `
    font-size: 2rem;
    text-align: center;
    margin-top: 20px;
`
const LocSubtitle = styled.p`
    text-align: center;
    font-size: 1.1rem;
`