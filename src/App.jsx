import React from 'react';
import './App.scss';
import { Login, Register } from './components/auth';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogginActive: true,
            side: 'right',
        };
        this.changeState = this.changeState.bind(this);
    }

    changeState() {
        const { isLogginActive } = this.state;
        const side = isLogginActive ? 'left' : 'right';
        this.setState(prevState => ({
            isLogginActive: !prevState.isLogginActive,
            side,
        }));
    }

    render() {
        const { isLogginActive, side } = this.state;
        const current = isLogginActive ? 'Register' : 'Login';
        return (
            <div className='App'>
                <form className='login'>
                    <div className='container'>
                        {isLogginActive ? <Login /> : <Register />}
                    </div>
                    <RightSide
                        side={side}
                        current={current}
                        onClick={this.changeState}
                    />
                </form>
            </div>
        );
    }
}

const RightSide = props => {
    const { onClick: onClickHandler, current, side } = props;
    return (
        <div className={`right-side ${side}`} onClick={onClickHandler}>
            <div className='inner-container'>
                <div className='text'>{current}</div>
            </div>
        </div>
    );
};

export default App;
