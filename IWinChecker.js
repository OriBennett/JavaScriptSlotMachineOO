import RowWinChecker from "./RowWinChecker.js";
import ColWinChecker from "./ColWinChecker.js";

class WinCheckerFactory {
    static CreateWinChecker() {
        return [new RowWinChecker(), new ColWinChecker()];
    }
}

export default WinCheckerFactory;
