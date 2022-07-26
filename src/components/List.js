import React from 'react';
import { useTable } from 'react-table';
import './ListStyle.css';


const List = ({ columns, data, setpagepost, loading }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

    const onClickYoutube = (e) => {
        alert(e.target.id); // cell_0_title
        alert(data[0].youtube);
        // data[0].youtube
    }

    return(
        // <>
        //     <ul>
        //         {posts.map((post) => (
        //             <li key={post.id}>{post.title}</li>
        //         ))}
        //     </ul>
        // </>

        <table className="table-sheet" {...getTableProps()} >
        <thead className='table-head'>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th className='ths' {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                </tr>
            ))}
        </thead>


        <tbody className='table-body' {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}  onClick={onClickYoutube}>
                {row.cells.map((cell) => (
                    <td className='tds' {...cell.getCellProps()} id={cell.getCellProps().key}>
                        {cell.render("Cell")}
                    </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}
export default List;