/**
 * Created by Pavel on 09.12.2017.
 */
import React from 'react';
import {Card,Button} from 'antd';
const { Meta } = Card;
class Service extends React.PureComponent {

    render() {
        const {title,describe,photo} = this.props.info;
        return (

            <Card
                style={{ width: 325 }}
                cover={<img alt={title} style={{width:324,height:300}} src={photo}/>}
            >
                <Meta
                    title={title}
                    description={describe}
                />
            </Card>


                        // <Card title={title} bordered={true}>
                        //     <img style={{width:324,height:300}} src={photo}/>
                        //     <h4>{describe}</h4>
                        // </Card>

        );
    }
}

export default Service;