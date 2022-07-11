import React, {useState} from 'react';
import styled from 'styled-components';

const VedioMain = styled.div`
    width: 1280px;
    height: 720px;
    background-color: white;
    margin: 50px auto 0 auto;
`

function Vedio() {

    const [url,] = useState('https://www.youtube.com/embed/otImsm7KTDA');

    return(
        <VedioMain>
            <iframe
                width="100%" height="100%" 
                //여기 영상 주소는 매주 바뀌어야 함
                src={url}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>

        </VedioMain>
    )
}
export default Vedio;
