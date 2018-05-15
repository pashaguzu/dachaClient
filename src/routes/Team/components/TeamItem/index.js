/**
 * Created by Pavel on 09.12.2017.
 */
import React from 'react';
import {Avatar,Row,Col,Card,List, } from 'antd';
import Request from 'react-http-request';
import "react-placeholder/lib/reactPlaceholder.css";


class TeamItem extends React.Component {



    render() {
        const data = [
            {
                name: 'Людмила Кудравец',
                position: 'Директор',
                image:"https://imaguru.by/wp-content/uploads/tatiana.jpg"
            },
            {
                name: 'Сергей Кудравец',
                position: 'Мастер на все руки',
                image:"https://imaguru.by/wp-content/uploads/tatiana.jpg"
            },
            {
                name: 'Руслан Найдин',
                position: 'Бог автомеханики',
                image:"https://imaguru.by/wp-content/uploads/tatiana.jpg"
            }
        ];
        return (
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    grid={{gutter: 10, xs: 3,   md: 1, lg: 3/*, xl: 4*/}}
                    renderItem={item => (
                        <List.Item>
                            <center>
                                <img style={{width:150,borderRadius:100,height:150}} src={item.image} />
                               <p style={{marginTop:10,fontWeight: 800}}>{item.name}</p>
                               <h2 style={{marginTop:10}}>{item.position}</h2>
                                <p>У вас есть очередная гениальная идея?
                                    Таня всегда рада обсуждать следующий большой рубеж: стартап проект,
                                    инвестиционное сотрудничество, стратегическое партнерство и просто
                                    любую классную идею завтрашнего дня!</p>
                            </center>

                            {/*<List.Item.Meta*/}
                                {/*avatar={<img style={{width:200,borderRadius:100,height:200}} src="https://imaguru.by/wp-content/uploads/tatiana.jpg" />}*/}
                                {/*title={<a href="https://ant.design">{item.name}</a>}*/}
                                {/*description="Ant Design, a design language for background applications, is refined by Ant UED Team"*/}
                            {/*/>*/}
                        </List.Item>
                    )}
                />
        );
    }
}

export default TeamItem;