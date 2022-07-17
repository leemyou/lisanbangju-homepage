import React from "react";
import styled from "styled-components";

const PageUl = styled.ul`
  /* float: left; */
    list-style: none;
    text-align: center;
    border-radius: 3px;
    /* color: white; */
    padding: 1px;
    /* border-top: 3px solid #186ead; */
    /* border-bottom: 3px solid #186ead; */
`;

const PageLi = styled.li`
    display: block;
    font-size: 1rem;
    margin: 0 auto;
    /* font-weight: 600; */
    padding: 5px;
    /* border-radius: 5px; */
    /* width: 25px; */
    &:hover {
        cursor: pointer;
        /* color: white; */
        font-weight: 600;
        /* background-color: #263a6c; */
    }
    &:focus::after {
        /* color: white; */
        font-weight: 800;
        /* background-color: #263a6c; */
    }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    /* color: white; */
    font-weight: 600;
    /* background-color: #263a6c; */
  }
`;


const Pagination = ({ sermonPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / sermonPerPage); i++) {
        pageNumbers.push(i);
    }

    //다음페이지로 넘어가는거
    function nextPage(){
        
    }
    // 이전 페이지
    function prePage() {

    }


    return (
        <div style={{display: 'flex', backgroundColor:'lightblue'}}>
            <button onClick={prePage}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>

            <nav>
            <PageUl className="pagination">
                {pageNumbers.map((number) => (
                    <PageLi key={number} className="page-item">
                        <PageSpan onClick={() => paginate(number)} className="page-link">
                            {number}
                        </PageSpan>
                    </PageLi>
                ))}
            </PageUl>
            </nav>
            <button onClick={nextPage}>
            <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
        </div>
    );
};
export default Pagination;