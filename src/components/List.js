import React from 'react';
import { useTable } from 'react-table';
import './ListStyle.css';


const List = ({ columns, data }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

    const onClickYoutube = (e) => {
        alert('클릭 이벤트 필요~!');
        alert(e.length);
    }

    return(
        // <>
        //     <ul>
        //         {posts.map((post) => (
        //             <li key={post.id}>{post.title}</li>
        //         ))}
        //     </ul>
        // </>

        <table {...getTableProps()} className="table-sheet">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>


        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}  onClick={onClickYoutube} id={row.id}>
                {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>
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