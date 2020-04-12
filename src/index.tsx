import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style/global-style.less';

export interface IWelcome {
    name: string
}

class Welcome extends React.Component<IWelcome, {}> {
    render () {
        return <h1> Hello World from {this.props.name} </h1>;
    }
}
ReactDOM.render(<Welcome name="React boilerplate with Typescript" />, document.getElementById('root'));
