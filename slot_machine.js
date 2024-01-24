import AccountMgr from "./account_mgr.js";
import Board from "./board.js";
import IOMgr from "./iomgr.js";


class SlotMachine {
    static _ROWS = 3;
    static _COLUMNS = 3;

    constructor(){

        this.ioMgr = new this.ioMgr.getInstance();
        this.board = new Board(SlotMachine._ROWS, SlotMachine._COLUMNS);
        this.accountMgr = new AccountMgr(this.board,
            this.ioMgr.getDeposit());
    }

    playRound(){
        this.accountMgr.beginRound(
            this.ioMgr.getNumberOfLines(),
            this.ioMgr.getBet((bet) => (!isNaN(bet) && bet>0 && bet<=this.accountMgr.balance/this.accountMgr.numberOfLines)),
        )
        
        this.board.spin();
        this.ioMgr.printMsg(this.board.getFormattedString());

        const roundPnl = this.accountMgr.calcPnL();
        this.ioMgr.printMsg("your profit/loss in this round is $" + roundPnl)
        this.ioMgr.printMsg("your balance is $" + this.accountMgr.balance)
    }
    
    isGameOver(){

    }
}