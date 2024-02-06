import IWinChecker from "./IWinChecker.js";

class RowWinChecker extends IWinChecker {
    CheckWins(board) {
        let res = "";
        for(let i = 0; i < board.rowsNum; i++){
            let row = board.rows[i];
            let firstSymbol = row[0];
            if (row.every(symbol => symbol === firstSymbol)) {
                res += firstSymbol;
            }
        }
        return res;
    }
}

export default RowWinChecker;
