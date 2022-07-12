// 주일말씀 및 메인페이지 

import React from 'react'
import Vedio from '../components/Vedio';
// import styled from 'styled-components';

export const Words = () => {
  	return (
    	<div className='main-body' id='words'>
        	<h1 className='main-title'>주일말씀</h1>
        	<hr className='main-title-line'/>
			<Vedio/>
    	</div>
  	)
}


export default Words;
