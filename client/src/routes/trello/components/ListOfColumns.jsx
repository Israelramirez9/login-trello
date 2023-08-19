import React, { useEffect } from 'react'
import { getColumns } from '../../../services/columns.services';
import Column from './Column';
function ListOfColumns({ boardId }) {

    const [columns, setColumns] = useState([]);

    useEffect(() => {
        getColumns(boardId)
            .then(resp => setColumns(resp.data))
            .catch(error => console.log(error))
    }, [])
    return (
        <>
            {
                columns?.map((column) => (
                    <Column
                        columnId={column.columnId}
                        columnsLength={columns.length}
                        columnIndex={column.columnIndex}
                        columns={columns}
                    />
                ))
            }
        </>
    )
}

export default ListOfColumns