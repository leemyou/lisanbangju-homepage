// 설교목록 페이지

import React, { useEffect} from 'react'
import styled from 'styled-components';
// import List from '../components/List'

import {firestore} from '../components/Firebase';
// import Pagination from '../components/Pagination'

const Sermonlist = () => {

    useEffect(() => {
        console.log(firestore)
    })



    return (
        <div className='main-body' id="sermon">
            <h1 className='main-title'>설교목록</h1>
        	<hr className='main-title-line'/>
            

        
            
            {/* <List sermon={sermon_data}/> */}


        </div>
    )
}

export default Sermonlist;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cccc;
`