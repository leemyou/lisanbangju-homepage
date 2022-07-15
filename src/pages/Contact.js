//Contact 페이지

import React from 'react'
import './PageStyle.css';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact" className="main-body" >
            <h1 className='main-title'>CONTACT</h1>
            <hr className='main-title-line' />

            <div className='contact-body'>
                <ul >
                    <li>
                        <img src='img/kakao.png' alt='kakao' className='contact-img'/>
                        <h3>Kakao</h3>
                        <p>
                            일산방주교회 카카오톡 채널입니다 <br/>
                            플러스 친구를 추가하시면 다양한 교회 소식들을<br/>
                            카카오톡을 통해 받아보실 수 있습니다
                        </p>
                        <a className='contact-link' href='http://pf.kakao.com/_MCSNb'>바로가기</a>
                    </li>

                    <li>
                        <img src='img/youtube.png' alt='youtube' className='contact-img'/>
                        <h3>YouTube</h3>
                        <p>
                            일산방주교회 유튜브 채널입니다 <br/>
                            구독을 통해 실시간 온라인 예배를 드리실 수 있고, <br/>
                            이전 예배 영상을 통해 예배를 드리실  수 있습니다
                        </p>
                        <a className='contact-link' href='https://www.youtube.com/channel/UCe0eUxng8zRUILZgSWiDaDQ/featured'>바로가기</a>
                    </li>

                    <li>
                        <img src='img/instagram.png' alt='instagram' className='contact-img'/>
                        <h3>Instagram</h3>
                        <p>일산방주교회 인스타그램입니다 <br/>
                            팔로우하시면 교회소식들을 보실 수 있고,<br/>
                            소통하실 수 있습니다.
                        </p>
                        <a className='contact-link' href='https://www.instagram.com/ilsan_bangju/'>바로가기</a>
                    </li>

                </ul>

            </div>

        </div>
    )
}

export default Contact;