

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
    }
}