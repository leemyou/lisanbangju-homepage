//푸터

import React from 'react'
import styled from 'styled-components';
import logo from '../img/logo_white.png';

const Footerbody = styled.footer`
    background-color: #464646;
    width: 100%;
    height: 80%;
    position: relative;
    margin: 0;
    padding: 0;
    
    @media (max-width: 991px){
        height: 100%;
    }
`
const Logo = styled.img`
    display: block;
    margin: 0 auto;
    width: 19vh;

    /* @media (max-width: 991px) {
    } */
`
const FooterText = styled.span`
    text-align: center;
    color: #fff;
    font-weight: 100;

    @media (max-width: 991px) {
        display: block;
        margin: 0 auto;
    }
`

const CRight = styled.p`
    color: #bbbbbb;
    padding-bottom: 30px;

    @media (max-width: 991px) {
        margin-top: 60px;
        padding-bottom: 20px;
    }
`

const Footer = () => {
  return (
    <Footerbody>
        <Logo src={logo} alt="logo"/>
        <FooterText>
            <p>
                일산방주교회 <br/>
                담임목사 오시헌 <br/>
                031) 976-0313<br/>
                경기도 고양시 일산서구 일중로 17 (포오스프라자 3층)<br/>
            </p>
            <CRight>ⓒ 2022. IlsanBangju Church. All rights reserved.</CRight>
        </FooterText>
    </Footerbody>
  )
}

export default Footer