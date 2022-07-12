import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

const Tablebody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    background-color:lightgray;
`
const Thead = styled.thead`
    background-color: white;
    height: 3rem;
    font-size: 1.1rem;
    color: #6991e1;
    border-bottom: 2.5px solid #c4c4c4;
`
const Tbody = styled.tbody`
    background-color: white;
`
const TableSheet = styled.table`
    width: 1000px;
    background-color:red;
`
const TH = styled.th`
    font-weight: normal;
    padding-left: 10px;
`
const TD = styled.td`
    height: 3rem;
    padding-left: 10px;
    border-bottom: 1px solid #c8c8c8;
    // background-color: red;
`
const TR = styled.tr`
    // background-color: red;
`

const List = ({columns, data}) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    return(
        <Tablebody>

        <TableSheet {...getTableProps()}>
        <Thead>
            {headerGroups.map((headerGroup) => (
                <TR {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <TH {...column.getHeaderProps()}>{column.render("Header")}</TH>
                    ))}
                </TR>
            ))}
            
        </Thead>
        
        <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row);
                return (
                    <TR {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                            <TD {...cell.getCellProps()}>{cell.render("Cell")}</TD>
                        ))}
                    </TR>
                );
            })}
        </Tbody>
        </TableSheet>

        </Tablebody>

    );
}
export default List;