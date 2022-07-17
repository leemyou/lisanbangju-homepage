//교역자 안내 페이지
import React from 'react'
import Holder from 'react-holder-component';
import './Minister.css'


const Minister = () => {
    return (
    <div id='minister'>
        <h1 className='main-title'>교역자안내</h1>
        <hr className='main-title-line'/>

        
        <ul className='minister-body'>

            <li className='minister-item'>
                {/* 나중에 이 부분 이대로 이미지로 바꾸면 됨. */}
                <Holder
                    className="d-block"
                    width= '250px'
                    height= '300px'
                    text='img'
                    updateOnResize={true}
                    alt="First Selide"
                />
                <h4 className='minister-title'>담임목사 오시헌</h4>
            </li>
            <li className='minister-item'>
                <Holder
                    className="d-block"
                    width= '250px'
                    height= '300px'
                    text='img'
                    updateOnResize={true}
                    alt="First Selide"
                />
                <h4 className='minister-title'>부담임목사 유준희</h4>
            </li>
            <li className='minister-item'>
                <Holder
                    className="d-block"
                    width= '250px'
                    height= '300px'
                    text='img'
                    updateOnResize={true}
                    alt="First Selide"
                />
                <h4 className='minister-title'>심방 전도사 김남옥 </h4>
            </li>
        </ul>

    </div>
    )
}

export default Minister

// export const Container = styled.div`
//     width: 100%;
//     height: 100vh;
//     background-color: #9999;
// `