import './custom-table.scss'
import {useState} from "react";
import {TableStatus} from "@/components/table-status/table-status";

type Row = {
    id: number;
    username: string;
    date: string;
    amount: number;
    status: string;
};


const CustomTable = () => {

    const initialData: Row[] = [
        {id: 12312, username: "FEDERICOSCHI", date: "May 20, 2023 10:34:12", amount: 120, status: "completed"},
        {id: 12311, username: "Feryzz", date: "May 20, 2023 09:12:43", amount: 15, status: "completed"},
        {id: 12310, username: "Cinquanta", date: "May 20, 2023 04:44:02", amount: 27, status: "pending"},
        {id: 12309, username: "NotAffected", date: "May 19, 2023 23:57:52", amount: 59, status: "in progress"},
        {id: 12308, username: "Ytnoos", date: "May 19, 2023 23:30:59", amount: 12, status: "completed"},
        {id: 12307, username: "MattiaB22", date: "May 19, 2023 22:19:27", amount: 33, status: "completed"},
    ];

    const headerInitialData: {id: keyof Row, title: string }[] = [
        {id: "id", title: "ID"},
        {id: "username", title: "USERNAME"},
        {id: "date", title: "DATE & TIME"},
        {id: "amount", title: "AMOUNT"},
        {id: "status", title: "STATUS"}
    ]

    const [data, setData] = useState<Row[]>(initialData);
    const [sortColumn, setSortColumn] = useState<keyof Row | null>(null);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const handleSort = (columnName: keyof Row) => {
        if (sortColumn === columnName) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(columnName);
            setSortOrder('asc');
        }

        const sortedData = [...data].sort((a, b) => {
            const comparison = a[columnName] > b[columnName] ? 1 : -1;
            return sortOrder === 'asc' ? comparison : -comparison;
        });

        setData(sortedData);
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        {
                            headerInitialData.map((el) => {
                                return <th key={el.id} onClick={() => handleSort(el.id)}>
                                    <div>{el.title}</div>
                                </th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {data.map((word, index) => (
                        <tr key={index} className="row">
                            <td><div className="table-row-div">{word.id}</div></td>
                            <td><div className="table-row-div">{word.username}</div></td>
                            <td><div className="table-row-div date-value">{word.date}</div></td>
                            <td><div className="table-row-div">{word.amount}€</div></td>
                            <td><div className="last-table-row-div table-row-div"><TableStatus value={word.status}/></div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}

export { CustomTable };