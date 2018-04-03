import React from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'
class LayoutHeader extends React.Component {
    state = {
        current: 'home',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
                    <Menu
                        theme="dark"
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="home">
                            <Link to="/"> <Icon type="home" />Главная</Link>
                        </Menu.Item>
                        <Menu.Item key="work" >
                            <Link to="/works"><Icon type="layout" />Наши работы</Link>
                        </Menu.Item>
                        <Menu.Item key="picture" >
                            <Link to="/gallery"> <Icon type="picture" />Фотогалерея</Link>
                        </Menu.Item>
                        <Menu.Item key="team" >
                            <Link to="/team"> <Icon type="team" />Команда</Link>
                        </Menu.Item>
                    </Menu>
        );
    }
}



export default LayoutHeader;