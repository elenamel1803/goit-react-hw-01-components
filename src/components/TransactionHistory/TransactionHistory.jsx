import { TableTransactionHistory, TableHead, TableData, TableRow } from "./TransactionHistory.styled"

const TransactionHistory = ({ items }) => {
    return (
            <TableTransactionHistory>
                <thead>
                    <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Currency</TableHead>
                    </TableRow>
                </thead>

                <tbody>
                    {items.map(({ id, type, amount, currency }) => (
                    <TableRow key = {id}>
                        <TableData>{type}</TableData>
                        <TableData>{amount}</TableData>
                        <TableData>{currency}</TableData>
                    </TableRow>  
                    ))}
                </tbody>
            </TableTransactionHistory>
    )
}

export default TransactionHistory