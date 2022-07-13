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
    </div>
  )

}

export default Way

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #111;
`