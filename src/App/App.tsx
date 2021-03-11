import React, {ReactNode, PureComponent} from 'react';
import {block} from 'bem-cn';

import './App.css';

const b = block('App');

class App extends PureComponent {
    render(): ReactNode {
        return (
            <div className={b()}>
                test
            </div>
        );
    }
}

export default App;
