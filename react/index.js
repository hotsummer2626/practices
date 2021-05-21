import React from 'react';
import ReactDom from 'react-dom';

class NewsList extends React.Component {

    state = { newArr: [] }

    componentDidMount() {
        setInterval(() => {
            const { newArr } = this.state;
            const news = 'news' + (newArr.length + 1);
            this.setState({ newArr: [news, ...newArr] });
        }, 1000);
    }

    getSnapshotBeforeUpdate(){
        return this.refs.list.scrollHeight;
    }

    componentDidUpdate(preProps, preState, height){
        this.refs.list.scrollTop += 30;
    }

    render() {
        return (
            <div className="list" ref='list'>
                {
                    this.state.newArr.map((n)=>{
                    return <div className='news'>{n}</div>;
                    })
                }
            </div>
        )
    };
}


ReactDom.render((<NewsList />), document.querySelector('#app'));




