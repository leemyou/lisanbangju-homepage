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

        // // 마커가 표시될 위치입니다 
        var markerPosition  = new kakao.maps.LatLng(lat, lon); 

        // // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

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
            {/* <MapBody id='map'/> */}
        </>
    )
}

export default Map