import React, {ReactNode, PureComponent} from 'react';
import {block} from 'bem-cn';
import {observer} from 'mobx-react';

import {testStore} from '../stores/test-store';

import './App.css';

const b = block('App');

@observer
class App extends PureComponent {
    render(): ReactNode {
        return (
            <div className={b()}>
                test {testStore.property}
            </div>
        );
    }
}

export default App;
