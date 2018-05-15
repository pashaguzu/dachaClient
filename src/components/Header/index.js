import React from 'react';
import {Divider , Row,Col,Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'
import Feedback from '../Feedback'
class LayoutHeader extends React.Component {
    state = {
        current: '',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Row type="flex" justify="space-between"  align="middle">
                <Col span={3}><Link to={'/'}><img alt="" className="logo" style={{height:'50px', marginRight:'5px'}} src="http://www.rusotka.ucoz.com/poselki/nrd/nrd50logo.png" /></Link></Col>
                <Col offset={2} span={15}>
                    <Menu
                            theme="dark"
                            style={{'borderBottom':'none'}}
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="home">
                                <Link to="/"> <Icon type="home" />Главная</Link>
                            </Menu.Item>
                            <Menu.Item key="work" >
                                <Link to="/works"><Icon type="layout" />Наши услуги</Link>
                            </Menu.Item>
                            <Menu.Item key="picture" >
                                <Link to="/gallery"> <Icon type="picture" />Фотогалерея</Link>
                            </Menu.Item>
                            <Menu.Item key="team" >
                                <Link to="/team"> <Icon type="team" />Команда</Link>
                            </Menu.Item>
                        </Menu>
                </Col>

                <Col span={4}>
                    <Feedback />
                </Col>

            </Row>
        );
    }
}



export default LayoutHeader;