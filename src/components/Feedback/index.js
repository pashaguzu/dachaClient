import React from 'react';
import {Button ,  Icon } from 'antd';
import ModalFeedback from './component/ModalFeedback'
class Feedback extends React.Component {

    constructor(props){
        super(props);
        this.state = {visible:false};
    }
    showCode = () =>{
        this.setState({visible:true})
    }
    showCodeOff = () =>{
        this.setState({visible:false})
    }
    render() {

        if (this.state.visible) {
            return (
                <ModalFeedback showCodeOff={this.showCodeOff}/>
            );
        }


        return (
            <Button type="primary" onClick={this.showCode}><Icon type="phone"/>Позвонить вам</Button>
        );
    }
}

export default Feedback;