import React from 'react';
import ReactDom from 'react-dom';

class Life extends React.Component {
    state = {
        opacity: 0.5
    }

    death = () => {
        ReactDom.unmountComponentAtNode(document.querySelector('#app'));
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            let opacity = this.state.opacity;
            opacity -= 0.1;
            if(opacity<= 0) opacity = 1;
            this.setState({opacity});
        }, 200)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h2 style={{ opacity: this.state.opacity }}>hhhhhhhhhhh</h2>
                <button onClick={this.death}>cancel</button>
            </div>
        )
    };
}


ReactDom.render((<Life />), document.querySelector('#app'));




