import React from 'react';
import { useTable } from 'react-table';
import './ListStyle.css';


const List = ({columns, data}) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    const clickTable = () => {
        // 클릭하면 유튜브 영상 페이지로 이동
        // data를 받을 때 유튜브 링크도 같이 보내줘도 괜찮을 듯
        // 맨 아래에 테이블 넘어가는 페이네이션도 넣어야함.
        alert('유튜브 페이지로 이동하는 기능 넣어야 함');
    }

    return(
        <div className="tbody">

        <table className="table-sheet" {...getTableProps()}>
        <thead className="table-head">
            {headerGroups.map((headerGroup) => (
                <tr className="trs" {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th className="ths" {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                </tr>
            ))}
            
        </thead>
        
        <tbody className="table-body" {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row);
                return (
                        <tr className="trs" {...row.getRowProps()} 
                            onClick={clickTable}
                        >
                            {row.cells.map((cell) => (
                                <td className="tds" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            ))}
                        </tr>

                );
            })}
        </tbody>
        </table>

        </div>

    );
}
export default List;