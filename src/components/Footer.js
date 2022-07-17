//푸터

import React from 'react'
import styled from 'styled-components';
import logo from '../img/logo_white.png';

const Footerbody = styled.footer`
    background-color: #464646;
    height: 33vh;
    position: relative;
    margin: 0;
    padding: 0;

    @media (max-width: 991px){
        height: 450px;
    }
`
const Logo = styled.img`
    width: 19vh;
    position: absolute;
    left: 5vw;
    top: 50%;
    transform: translateY(-50%) ;

    @media (max-width: 991px) {
        top: 10px;
        left: 50%;
        transform: translateX(-50%) ;
    }
`
const FooterText = styled.span`
    position: absolute;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) ;
    color: #fff;
    font-weight: 100;
`

const CRight = styled.p`
    color: #bbbbbb;

    @media (max-width: 991px) {
        position: absolute;
        bottom: -130px;
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