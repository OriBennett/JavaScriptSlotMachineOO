

class IOMgr {
    static getInstance() {
        if (!IOMgr.instance) {
            IOMgr.instance = new IOMgr();
        }
        return IOMgr.instance;
    }

    constructor() {
        if (IOMgr.instance) {
            return IOMgr.instance;
        }

        IOMgr.instance = this;
    //    this._prompt= 
    }

    printMsg(msg){
        console.log(msg);
    }

    getDeposit(){
        while(true) {
            let depositAmount = this._prompt()
        }
    }

    getBet(){}

    getNumberOfLines(){}

    getPlayAgain(){}
}