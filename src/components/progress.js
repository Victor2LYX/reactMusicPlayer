/**
 * Created by lyx on 2017/12/3.
 */
require('./../styles/progress.less');

import React from 'react';

class Progress extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            barColor:'#2f9842'
        }
    }
    changeProgress(e){
        let progressBar = this.refs.progressBar;
        let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
        this.props.onProgressChange && this.props.onProgressChange(progress);
    }

    render(){
        return (
            <div className="components-progress" ref="progressBar" onClick={this.changeProgress.bind(this)}>
                <div className="progress" style={{width: `${this.props.progress}%`, background: this.props.barColor}}></div>
            </div>
        );
    }

}

Progress.defaultProps = {};
Progress.propTypes ={};
export default Progress;
