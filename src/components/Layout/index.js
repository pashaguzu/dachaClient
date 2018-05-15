import React from 'react';
import { Menu,Divider , Icon,Layout } from 'antd';
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
                <Content style={{ padding: '20px 100px', flex: '1' }}>
                   <UserRoutes />
                </Content>
                <Footer style={{  textAlign: 'center' }}>
                    <Icon type="instagram" style={{ fontSize: 30  }} /> <Divider type="vertical" />
                    <Icon type="twitter" style={{ fontSize: 30  }} /> <Divider type="vertical" />
                    <Icon type="skype" style={{ fontSize: 30 }} /> <Divider type="vertical" /> Guzu Pavel ©2018 Created by pgutzu@gmail.com
                </Footer>
            </div>
                    );
                }
            }



export default AppLayout;