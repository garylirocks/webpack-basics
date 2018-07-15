import React from 'react';
import ReactDOM from 'react-dom';

import hello from 'lib/utils';

import './style.scss';

class Message extends React.Component {
    render() {
        return (<div>
                    <h1>{this.props.title}</h1>
                    <p>{hello('Gary')}</p>
                </div>
        );
    }
}

ReactDOM.render(<Message title="Demo" />,
                document.getElementsByClassName('react-container')[0]);
