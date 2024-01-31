class SymbolPack{
    static getInstance() {
        if (!SymbolPack.instance) {
            SymbolPack.instance = new SymbolPack();
        }
        return SymbolPack.instance;
    }

    constructor() {
        if (SymbolPack.instance) {
            return SymbolPack.instance;
        }
        SymbolPack._symbols = [];
        for (const [symbol, count] of Object.entries(SymbolPack._SYMBOLS_COUNT)) {
            for (let i = 0; i < count; i++) {
                SymbolPack._symbols.push(symbol);
            }
        }
    }

    static _SYMBOLS_COUNT = {
            A: 20,
            B: 40,
            C: 60,
            D: 80
        }

    static getSymbolDollarValue(symbol) {}

    static getXRandomSymbols(columnsNum){
        const rowSymbols = [...SymbolPack._symbols];
        return Array.from({length: columnsNum}, () => {
                const randomIndex = Math.floor(Math.random() * rowSymbols.length);
                return rowSymbols.splice(randomIndex, 1)[0];
            });
        
    }
}

export default SymbolPack