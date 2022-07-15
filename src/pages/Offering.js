// 온라인헌금 페이지

import React from 'react'

const Offering = () => {
    const goKakao = () => {
        // 기능추가 해야함
        window.open('http://pf.kakao.com/_MCSNb/chat')
    }

  return (
    <div className='main-body' id="offering">
        <h1 className='main-title'>온라인 헌금</h1>
        <hr className='main-title-line'/>

        <div>
            <h2>00은행&nbsp;&nbsp; 0000-000-000000&nbsp;&nbsp; 예금주:일산방주교회</h2>
            <p>기부금영수증 신청 및 기타 문의사항은 일산방주교회 카카오톡으로 문의 부탁드립니다.</p>
        
            <button className='btn-offer-kakao' onClick={goKakao}>카카오톡 바로가기</button>
        </div>

    </div>
  )
}

export default Offering
