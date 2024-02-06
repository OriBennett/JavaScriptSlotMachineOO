import RowWinChecker from "./RowWinChecker.js";
import ColWinChecker from "./ColWinChecker.js";

class IWinChecker {
    CheckWins() {
        throw new Error('You have to implement the method CheckWins!');
    }

    static CreateWinChecker() {
        return [new RowWinChecker(), new ColWinChecker()];
    }
}

export default IWinChecker;
