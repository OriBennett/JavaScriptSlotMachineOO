class IWinChecker {
    CheckWins() {
        throw new Error('You have to implement the method CheckWins!');
    }

    static CreateWinChecker() {
        return [new RowWinChecker(), new ColWinChecker()];
    }
}

export default IWinChecker;
