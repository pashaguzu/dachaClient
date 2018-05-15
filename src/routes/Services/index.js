/**
 * Created by Pavel on 09.12.2017.
 */
import React from 'react';
import {Icon,Row,Col,Card,List, } from 'antd';
import Request from 'react-http-request';
import Service from './components/Service';
import ReactPlaceholder from 'react-placeholder';
import {RectShape} from 'react-placeholder/lib/placeholders';
import "react-placeholder/lib/reactPlaceholder.css";


class Services extends React.Component {



    render() {

        return (
        <Request
            url='https://dachaserver.herokuapp.com/api/service/get'
            method='get'
            accept='application/json'
            verbose={true}
        >
            {
                ({error, result, loading}) => {
                    if (loading) {
                        return <div>
                        <Row style={{marginBottom:24}}>
                                <Col span={7}>
                                    <Card loading> </Card>
                                </Col>
                                <Col offset={1} span={8}>
                                    <Card loading> </Card>
                                </Col>
                                <Col offset={1} span={7}>
                                    <Card loading> </Card>
                                </Col>
                            </Row>
                            <Row style={{marginBottom:24}}>
                                <Col span={7}>
                                    <Card loading> </Card>
                                </Col>
                                <Col offset={1} span={8}>
                                    <Card loading> </Card>
                                </Col>
                                <Col offset={1} span={7}>
                                    <Card loading> </Card>
                                </Col>
                            </Row>
                            <Row style={{marginBottom:24}}>
                                <Col span={7}>
                                    <Card loading> </Card>
                                </Col>
                                <Col offset={1} span={8}>
                                    <Card loading> </Card>
                                </Col>
                                <Col offset={1} span={7}>
                                    <Card loading> </Card>
                                </Col>
                            </Row>
                            </div>
                    } else {
                        return <List
                                    split={false}
                                    loading={loading}
                                    grid={{gutter: 100, xs: 3,   md: 1, lg: 3/*, xl: 4*/}}
                                    dataSource={result.body}
                                    renderItem={person => (
                                        <List.Item key={person.id}>
                                            <Service info={person} />
                                        </List.Item>
                                    )}
                                />;
                    }
                }
            }


        </Request>
        );
    }
}

export default Services;