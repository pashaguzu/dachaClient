import React from 'react';
import { Menu, Icon,Layout } from 'antd';
import Services from "../../routes/Services";
import LayoutHeader from "../Header";
import {UserRoutes} from './routes';
const { Header, Content, Footer } = Layout;

class AppLayout extends React.Component {

    render() {
        return (
            <div style={{height:'100%', display: 'flex',
                'minHeight': '100vh',
                'flexDirection':'column'}}>
                <Header style={{  width: '100%' }}>
                        <LayoutHeader />
                </Header>
                <Content style={{ padding: '20px 50px', flex: '1' }}>
                   <UserRoutes />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Guzu Pavel ©2018 Created by pgutzu@gmail.com
                </Footer>
            </div>
                    );
                }
            }



export default AppLayout;