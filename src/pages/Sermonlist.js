// 설교목록 페이지

import React, { useEffect, useState, useMemo} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import List from '../components/List'
import Pagination from '../components/Pagination';

const Sermonlist = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

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

    const columns = useMemo(() => columnData, [columnData]);


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
    }, []);

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = (posts) => {
        let currentPosts = 0;
        currentPosts = posts.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    };


    return (
        <div className='main-body' id="sermon">
            <h1 className='main-title'>설교목록</h1>
        	<hr className='main-title-line'/>
            
            
            <List data = {currentPosts(posts)} columns={columns} loading={loading}/>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={setCurrentPage}
            ></Pagination>

        </div>
    )
}

export default Sermonlist;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cccc;
`