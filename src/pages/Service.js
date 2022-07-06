// 예배 안내 페이지
import React from 'react'
import styled from 'styled-components';

function Service() {
  return (
    <div className='main-body' id='service'>
        <h1 className='main-title'>예배안내</h1>
    </div>
  )
}

export default Service



export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #111;
`
