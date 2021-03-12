import {observable, makeObservable} from 'mobx';

class TestStore {
    property: string;

    constructor() {
        makeObservable(this, {
            property: observable
        });

        this.property = 'test';

        setInterval(() => {
            this.property = Math.random().toString();
        }, 1000);
    }
}

export const testStore = new TestStore();
