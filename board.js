import Row from './row.js';

class Board{
    constructor(rowsNum, columnsNum) {
        this.rowsNum = rowsNum;
        this.columnsNum = columnsNum;

        this.rows = []; //collection of Row(s)
        for (let i = 0; i < this.rowsNum; i++){
            this.rows.push(new Row(this.columnsNum));
        }
    };

    spin(){
        this.rows.forEach(row => row.spin());
    }

    getFormattedString(){
        let res = "";
        this.rows.forEach(row => res += row.print() + "\n");
        return res;
    }

    checkWins(lines) { // is a bug will eventually get the lines we bet on
        let res = "";
        for(let i = 0; i < lines; i++){
            res += this.rows[i].checkWins;
        }
        return res;
    }

}

export default Board;