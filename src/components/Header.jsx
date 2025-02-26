import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  UserOutlined,
  ProjectOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Header: AntHeader } = Layout;

const Header = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: '/about',
      icon: <UserOutlined />,
      label: <Link to="/about">About</Link>,
    },
    {
      key: '/projects',
      icon: <ProjectOutlined />,
      label: <Link to="/projects">Projects</Link>,
    },
    {
      key: '/contact',
      icon: <MailOutlined />,
      label: <Link to="/contact">Contact</Link>,
    },
  ];

  return (
    <AntHeader>
      <div className="logo">Portfolio</div>
      <Menu
        className="nav-menu"
        theme="dark"
        mode="horizontal"
        selectedKeys={[current]}
        onClick={handleClick}
        items={items}
      />
    </AntHeader>
  );
};

export default Header;