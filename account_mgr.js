import Board from './board.js'

class AccountMgr {

    static _SYMBOL_VALUES = {
        A: 20,
        B: 15,
        C: 10,
        D: 5
    }

    constructor(board, balance) {
        this.balance = balance;
        this.board = board;
        this.numberOfLines = 0; // improves performance of the v8 engine
        this.bet = 0;
    }

    beginRound(numberOfLines, bet) {
        this.numberOfLines = numberOfLines;
        this.bet = bet;
    }

    calcPnL() {
        let pnl = -1 * this.bet * this.numberOfLines;

        const wins = this.board.checkWins();
        for (const symbol of wins) {
            pnl += this.bet * (AccountMgr._SYMBOL_VALUES[symbol] + 1);
        }

        this.balance += pnl;
        return pnl;
    }

}

export default AccountMgr;