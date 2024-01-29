import SlotMachine from "./slot_machine.js";
import IOMgr from "./iomgr.js";


class Game {
    constructor() {
    }
    
    start() {
        const slotMachine = new SlotMachine();
        const ioMgr = IOMgr.getInstance();

        while(true){
            slotMachine.playRound();

            if(slotMachine.isGameOver()){
                ioMgr.printMsg("Game Over");
                break;
            }

            if(!ioMgr.getPlayAgain())
                break;
        }
    }
}

const game = new Game();
game.start();