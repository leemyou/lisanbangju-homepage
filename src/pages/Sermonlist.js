// 설교목록 페이지

import React from 'react'
import styled from 'styled-components';

const Sermonlist = () => {
  return (
    <div className='main-body' id="sermon">
        <h1 className='main-title'>설교목록</h1>
    </div>
  )
}

export default Sermonlist;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cccc;
`