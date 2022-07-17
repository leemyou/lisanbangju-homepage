import React from 'react';
import './ListStyle.css';


const List = ({sermon}) => {
    console.log(sermon);

    return(
        <>
            <ul>
                {sermon.map((post, idx) => (
                    <li key={post.id}>t{sermon.id}</li>
                ))}
            </ul>
        </>

    );
}
export default List;