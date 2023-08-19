import { getBoards, createBoard } from "../../../services/board.services.js";
import { bringColumnsFromServer } from "./bringFromServerColumns.js";


export async function bringBoardsFromServer() {
    const boardsFromServer = await getBoards();
    let boards = boardsFromServer.data;//esto va hacer el array de boards
    //si el array es igual a cero, creo uno


    if (boards.length === 0) {
        const resp = await createBoard({ title: "My Tasks Board" })
        boards.push(resp.data);
    }

    let columns = await bringColumnsFromServer(boards);

    return { columns, boards }

}





