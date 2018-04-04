/**
 * Created by Pavel on 09.12.2017.
 */
import React from 'react';
import {Card,Button} from 'antd';

class Service extends React.PureComponent {

    render() {
        const {title,describe,photo} = this.props.info;
        return (
                        <Card title={title} bordered={true}>
                            <img style={{width:324,height:300}} src={photo}/>
                            <h4>{describe}</h4>
                        </Card>

        );
    }
}

export default Service;