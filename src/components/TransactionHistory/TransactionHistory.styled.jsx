import styled from '@emotion/styled';

export const TableTransactionHistory = styled.table`
  border-collapse: collapse;
  table-layout: auto;
  border: 1px solid #c5c5c7;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 400px;
  margin: 30px auto;
`;
export const TableHead = styled.th`
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  background-color: #8a77fa;
  &:not(:last-child) {
    border-right: 1px solid #fff;
  }
`;
export const TableData = styled.td`
  padding: 10px;
  text-align: center;
  color: #4d4b4b;
  &:not(:last-child) {
    border-right: 1px solid #dddcdc;
  }
`;
export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #eeeaea;
  }
`;
