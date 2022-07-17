// 설교목록 페이지

import React, {useState} from 'react'
import styled from 'styled-components';
import List from '../components/List'

import {firestore} from '../components/Firebase';
import Pagination from '../components/Pagination'

const Sermonlist = () => {

    const sermon_data = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sermonPerPage, setsermonPerPage] = useState(10);

    const sermon = firestore.collection('sermon');

    //전체 확인하기
    sermon
      .get()
      .then((docs) => {
      let sermon_data = [];
      docs.forEach((doc) => {
        // 도큐먼트 객체를 확인
        // console.log(doc);
        // 도큐먼트 데이터 가져오기
        // console.log(doc.data());
        // 도큐먼트 id 가져오기
        // console.log(doc.id);

        if (doc.exists) {
          sermon_data = [...sermon_data, { id: doc.id, ...doc.data() }];
        }
      });
    //   console.log(sermon_data);
    })

    const indexOfLast = currentPage * sermonPerPage;
    const indexOfFirst = currentPage - sermonPerPage;
    const currentPosts = (sermon_data) => {
        let currentPosts = 0;
        currentPosts = sermon_data.slice(indexOfFirst, indexOfFirst);
        return currentPosts;
    }


    return (
        <div className='main-body' id="sermon">
            <h1 className='main-title'>설교목록</h1>
        	<hr className='main-title-line'/>
            

        
            
            <List sermon={sermon_data}/>
            <Pagination
                sermonPerPage={sermonPerPage}
                totalPosts={sermon_data.length}
                paginate={setCurrentPage}
            />

        </div>
    )
}

export default Sermonlist;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cccc;
`