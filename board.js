import SymbolPack from "./SymbolPack.js";
import IWinChecker from "./IWinChecker.js";

class Board{
    constructor(rowsNum, columnsNum) {
        this.rowsNum = rowsNum;
        this.columnsNum = columnsNum;
        this.symbolPack = SymbolPack.getInstance();

        this.rows = Array.from({length: this.rowsNum}, () => Array.from({length: this.columnsNum}, () => ""));
        // Initialized this.rows as a two-dimensional array
    };

    spin(){
        for(let i = 0; i < this.rowsNum; i++){
            this.rows[i] = this.symbolPack.getXRandomSymbols(this.columnsNum);
        }
    }
    // Updated spin method to fill the two-dimensional array with random symbols

    getFormattedString(){
        let res = "";
        this.rows.forEach(row => res += row.join(" | ") + "\n");
        return res;
    }
    // Updated getFormattedString method to return a string representation of the two-dimensional array

    checkWins() { 
        let res = "";
        let winCheckers = IWinChecker.CreateWinChecker();
        winCheckers.forEach(winChecker => {
            res += winChecker.CheckWins(this);
        });
        return res;
    }
    // Updated checkWins method to check for wins in the two-dimensional array

}

export default Board;
