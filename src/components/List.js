import React from 'react';
import { useTable } from 'react-table';
import './ListStyle.css';


const List = ({ columns, data, setpagepost, loading }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

    // 클릭하면 유튜브 링크로 이동
    const onClickYoutube = (e) => {
        // console.log(e.nativeEvent.path[1].id);
        // console.log(e.target.parentElement.id);
        // window.open(e.nativeEvent.path[1].id)
        window.open(e.target.parentElement.id);
        // data[0].youtube
    }



    return(

        <table className="table-sheet" {...getTableProps()} >
        
        {/* 해더 */}
        <thead className='table-head'>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th className='ths' {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                </tr>
            ))}
        </thead>

        {/* 바디 */}
        <tbody className='table-body' {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}  onClick={onClickYoutube} id={row.original.youtube}>
                        {row.cells.map((cell) => (
                            <td className='tds' {...cell.getCellProps()}>
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