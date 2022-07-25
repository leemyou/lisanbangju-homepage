// 설교목록 페이지

import React, { useEffect, useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import List from '../components/List'
import Pagination from '../components/Pagination';

const Sermonlist = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    // 한 페이지당 보여줄 숫자
    const [postsPerPage, setPostsPerPage] = useState(10);


    // 리사이즈 이벤트를 감지하여 가로 길이에 따라 모바일 결정
    const resizingHandler = () => {
        if(window.innerWidth <= 1000) {
            setPostsPerPage(100)
        }else{
            setPostsPerPage(10)
        }
    }

    // const [url, setUrl] = useState([]);

    const columnData = [
        {
            accessor: 'title',
            Header: '설교제목'
        },
        {
            accessor: 'content',
            Header: '본문'
        },
        {
            accessor: 'type',
            Header: '예배'
        },
        {
            accessor: 'date',
            Header: '예배 날짜'
        },
        {
            accessor: 'talker',
            Header: '설교자'
        }
    ]

    // const columns = useMemo(() => [ columns,columnData]);


    // 데이터 호출
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // 이 때 빙글빙글
            const response = await axios.get(
                'http://localhost:2999'
            );
                setPosts(response.data.sermon)
                console.log(response.data.sermon)
                // setUrl(res.data.sermon[0].youtube)
                setLoading(false);
        }
        fetchData();


        // 처음부터 모바일 사이즈면 모바일 사이즈로 보이도록 설정
        if(window.innerWidth <= 1000) {
            setPostsPerPage(100);
        }
        window.addEventListener('resize', resizingHandler);
        return () => {
            // 메모리 누수 줄이기
            window.removeEventListener('resize', resizingHandler);
        }
    }, []);



    // 페이지네이션 데이터
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = (posts) => {
        let currentPosts = 0;
        currentPosts = posts.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    };
    // 페이지네이션 안보이게


    return (
        <SermonBody className='main-body' id="sermon">
            <h1 className='main-title'>설교목록</h1>
        	<hr className='main-title-line'/>
            
            {/* 테이블 */}
            <List data = {currentPosts(posts)} columns={columnData} setpagepost={setPostsPerPage} loading={loading}/>
            
            {/* 페이지네이션 */}
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={setCurrentPage}
            ></Pagination>

        </SermonBody>
    )
}

export default Sermonlist;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cccc;
`

const SermonBody = styled.div`
    width: 100vw;
    height: 110vh;
    background-color: #F5F5F5;
    /* padding-top: 100px; */

    @media (max-width: 1000px){
        // setPostsPerPage(100);
        height: auto;
        /* margin-bottom: 40px; */
    }

`

