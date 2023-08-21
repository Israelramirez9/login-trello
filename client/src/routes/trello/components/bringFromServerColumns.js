import { createColumn, getColumns } from "../../../services/columns.services";

export const bringColumnsFromServer = async (boards) => {

    const columnsFromServer = await getColumns();
    let columns = columnsFromServer.data;
    
    if (columns.length === 0 && boards.length === 1) {
        const firstColumn = await createColumn({
            columnIndex: "1",
            title: "tasks to do",
            boardId: boards[0].boardId
        });
        columns.push(firstColumn.data)

        const secondColumn = await createColumn({
            columnIndex: "2",
            title: "tasks done",
            boardId: boards[0].boardId
        });
        columns.push(secondColumn.data)
    }
   
  
    return columns

}