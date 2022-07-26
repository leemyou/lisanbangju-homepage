import React, {useState} from "react";
import styled from "styled-components";

const PageUl = styled.ul`
    position:absolute;
    width: auto;
    height: 40px;

    left: 45%;
    padding: 1px;
    margin-top:40px;

    @media (max-width: 1000px) {
        display: none;
    }
`;

const PageLi = styled.li`
    text-align: center;
    display: block;
    font-size: 1rem;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
        font-weight: 600;
        background-color: red;

    }

`;

const PageSpan = styled.span`
    &:hover::after,
    &:focus::after {
        border-radius: 100%;
        font-weight: 600;
    }
    // background-color:red;
`;


const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const [background, setBackgroundColor] = useState(false);



    return (
        <div style={{display: 'flex', backgroundColor:'lightblue'}}>
            <nav sytle={{position:'relative'}}>
                <PageUl className="pagination">
                    {pageNumbers.map((number) => (
                        <PageLi key={number} className="page-item">
                            <PageSpan onClick={() => {(paginate(number)) (alert(number)) (setBackgroundColor(true))} } className="page-link">
                                {number}
                            </PageSpan>
                        </PageLi>
                    ))}
                </PageUl>
            </nav>
        </div>
    );
};
export default Pagination;