// 설교목록 페이지

import React, {useMemo,} from 'react'
// import axios from 'axios'
import styled from 'styled-components';
import List from '../components/List'
// import Pagination from '../components/Pagination';

const Sermonlist = () => {
    // const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await axios.get(
    //             "https://jsonplaceholder.typicode.com/posts"
    //         );
    //         setPosts(response.data);
    //     }
    //     fetchData();
    // }, [])
    // const data = useMemo(() => posts, [posts]);

    const columns = useMemo(() => 
    [
        {
            accessor: 'sermonTitle',  // 데이터 오브젝트와 연결할 이름
            Header: '설교 제목' // 실제 테이블에 나타나는 이름
        },
        {
            accessor: 'sermonBody', 
            Header: '본문'
        },
        {
            accessor: 'service',
            Header: '예배'
        },
        {
            accessor: 'sermonDate',
            Header: '날짜'
        },
        {
            accessor: 'minister',
            Header: '설교자'
        }
    ]
    , []);



    const data = useMemo(() => [
        {
            'sermonTitle': '복음은 절대 세상과 친해질 수 없습니다',
            'sermonBody' : '에베소서 2장 1~7절',
            'service' : '주일예배',
            'sermonDate' : '2022 / 07 / 10',
            'minister' : '오시헌 담임목사'
        },
        {
            'sermonTitle': '복음은 절대 세상과 친해질 수 없습니다',
            'sermonBody' : '에베소서 2장 1~7절',
            'service' : '주일예배',
            'sermonDate' : '2022 / 07 / 10',
            'minister' : '오시헌 담임목사'
        },
        {
            'sermonTitle': '복음은 절대 세상과 친해질 수 없습니다',
            'sermonBody' : '에베소서 2장 1~7절',
            'service' : '주일예배',
            'sermonDate' : '2022 / 07 / 10',
            'minister' : '오시헌 담임목사'
        },
        {
            'sermonTitle': '복음은 절대 세상과 친해질 수 없습니다',
            'sermonBody' : '에베소서 2장 1~7절',
            'service' : '주일예배',
            'sermonDate' : '2022 / 07 / 10',
            'minister' : '오시헌 담임목사'
        }
    ], [])



    return (
        <div className='main-body' id="sermon">
            <h1 className='main-title'>설교목록</h1>
        	<hr className='main-title-line'/>
            
            <List columns={columns} data={data} />

        </div>
    )
}

export default Sermonlist;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cccc;
`