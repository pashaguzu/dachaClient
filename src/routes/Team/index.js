/**
 * Created by Pavel on 09.12.2017.
 */
import React from 'react';
import {Avatar,Row,Col,Card,List, } from 'antd';
import TeamItem from "./components/TeamItem"
import "react-placeholder/lib/reactPlaceholder.css";


class Team extends React.Component {



    render() {

        return (
            <div>
                <Row style={{marginBottom:30}} ><center><h1>Наша команда</h1></center></Row>
           <TeamItem />
            </div>
        );
    }
}

export default Team;