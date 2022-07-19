// 설교목록 페이지

import React, { useEffect, useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';
// import List from '../components/List'

const Sermonlist = () => {

    const [url, setUrl] = useState('')

    useEffect(() => {
        axios.get('http://localhost:2999')
            .then(res => {
                setUrl(res.data[0])
                console.log(res.data.sermon[0].content)
                setUrl(res.data.sermon[0].content)
            })
    })

    const nextPage = () => {
        var al = document.querySelector('testing')

        alert(al.innerText);


    }


    return (
        <div className='main-body' id="sermon">
            <h1 className='main-title'>설교목록</h1>
        	<hr className='main-title-line'/>
            

            <button id='testing' onClick={nextPage}>test</button>
            <h4>{}
                <b>
                    {url}
                </b>
            </h4>
            
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