/*global kakao*/ 

import React, {useEffect} from 'react'

const Map = () => {

    const lat = 37.681225;
    const lon = 126.774190;

    // const { kakao } = window;

    useEffect(() => {
        let container = document.getElementById('map');

        let option = {
            center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
            level: 1 // 지도의 확대 레벨
        };

        let map = new kakao.maps.Map(container, option); // 지도를 생성합니다

        // 마커가 표시될 위치입니다 
        var markerPosition  = new kakao.maps.LatLng(lat, lon); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 인포윈도우에 표출될 내용
        var iwContent = '<div style="padding:10px; text-align:center; width:250px;">경기도 고양시 일산서구 일중로 17<br> 포오스프라자 3층<br> <a href="https://map.kakao.com/link/to/일산방주교회,37.681225,126.774190" style="color:blue" target="_blank">길찾기 바로가기</a></div>', 
        iwPosition = new kakao.maps.LatLng(lat, lon); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent 
        });

        infowindow.open(map, marker);

    },[ lat, lon])

    return (
        <>
            <div 
                style={{
                marginTop: '60px',
                width: '100%',
                height: '60vh',
                backgroundColor: '#c8c8c8'
                }} 
                id='map'
            >
            </div>
        </>
    )
}

export default Map