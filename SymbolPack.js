class SymbolPack{
    static getInstance() {
        if (!SymbolPack.instance) {
            SymbolPack.instance = new SymbolPack();
        }
        return SymbolPack.instance;
    }

    constructor() {
        if (!SymbolPack.instance) {
            SymbolPack.instance = this;
            this._symbols = [];
            for (const [symbol, count] of Object.entries(SymbolPack._SYMBOLS_COUNT)) {
                for (let i = 0; i < count; i++) {
                    this._symbols.push(symbol);
                }
            }
        }
        return SymbolPack.instance;
    }

    static _SYMBOLS_COUNT = {
            A: 20,
            B: 40,
            C: 60,
            D: 80
        }

    static getSymbolDollarValue(symbol) {
        const symbolValues = {
            A: 1,
            B: 2,
            C: 3,
            D: 4
        };
        return symbolValues[symbol];
    }

    getXRandomSymbols(columnsNum){
        const rowSymbols = [...this._symbols];
        return Array.from({length: columnsNum}, () => {
                const randomIndex = Math.floor(Math.random() * rowSymbols.length);
                return rowSymbols.splice(randomIndex, 1)[0];
            });
        
    }
}

export default SymbolPack
