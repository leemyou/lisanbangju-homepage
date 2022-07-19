import React from 'react';
import './ListStyle.css';


const List = ({sermon}) => {
    console.log(sermon);

    return(
        <>
            <ul>
                {sermon.map((post) => (
                    <li key={post.id}>t{sermon.title}</li>
                ))}
            </ul>
        </>

    );
}
export default List;