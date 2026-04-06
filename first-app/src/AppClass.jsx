import React, { Component } from 'react'

export default class AppClass extends Component {

    // 클래스를 생성할때 생성됨
    constructor(props) {
        super(props);
        this.state = {
            counter2: 0,
            num: 1,
            value: 0,
        }
    }
    increase = () => {
        this.setState({ counter2: this.state.counter2 + 1, value: this.state.value + 1, });
    };
    render() {
        return (
            <div>
                <p>state: {this.state.counter2}</p>
                <button onClick={this.increase}>클릭</button>
            </div>
        )
    }
}

