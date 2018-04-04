/**
 * Created by Pavel on 09.12.2017.
 */
import React from 'react';
import {Icon,List, } from 'antd';
import Request from 'react-http-request';
import Service from './components/Service';



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
                        return <Icon type="loading" />;
                    } else {
                        return <List
                                    split={false}
                                    loading={loading}
                                    grid={{gutter: 10, xs: 3,   md: 1, lg: 3/*, xl: 4*/}}
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