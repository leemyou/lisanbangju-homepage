import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const VedioMain = styled.div`
    width: 100vw;
    height: 60vh;
    background-color: white;
    margin: 50px auto 0 auto;
`

function Vedio() {

        // https://www .youtube.c om/watch?v = 2rCwZ1tVEvY&ab_channel=%EC%9D%BC%EC%82%B0%EB%B0%A9%EC%A3%BC%EA%B5%90%ED%9A%8C
        //https://www.youtube.com/embed/2rCwZ1tVEvY

        //RDj_ZUmnAu0
        //2rCwZ1tVEvY
        //qLcGiXvOqyk
        //5q8M3ZICSnc
    const [link, setLink] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                'http://localhost:2999'
            );
                setLink(response.data.link.youtube);
        }
        fetchData();

        var channel = 'https://www.youtube.com/embed/'+link.slice(32, 43);
        setUrl(channel);
    }, [link])




    return(
        <VedioMain>
            <iframe
                width="100%" height="100%" 
                //여기 영상 주소는 매주 바뀌어야 함
                src={url}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>

        </VedioMain>
    )
}
export default Vedio;