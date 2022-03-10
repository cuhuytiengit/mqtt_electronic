import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Gia from './Pages/Gia';
import Luongdientieuthu from './Pages/Luongdientueuthu';

import mqtt from 'mqtt/dist/mqtt';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,

  BulbOutlined,
  MoneyCollectOutlined 
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
  const response = await fetch(
      "https://localhost:3000"
    );
   const data = await response.json();
    setPosts(data);
  };

  useEffect(()=>{
    fetchPost();
  },[])
 
  return (
    <div className="App">
    <p> {posts.foodName} </p>
       <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo"  />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<BulbOutlined />}>
          <Link to="/luongdien"> Lượng điện tiêu thụ</Link>
        </Menu.Item>
        <Menu.Item key="2"  icon={<MoneyCollectOutlined />}>
          <Link to="/Gia">Giá</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          nav 4
        </Menu.Item>
        <Menu.Item key="5" icon={<CloudOutlined />}>
          nav 5
        </Menu.Item>
        <Menu.Item key="6" icon={<AppstoreOutlined />}>
          nav 6
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
          nav 7
        </Menu.Item>
        <Menu.Item key="8" icon={<ShopOutlined />}>
          nav 8
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
         <Routes>
           <Route path='/Gia'element={<Gia/>} />
           <Route path='/luongdien'element={<Luongdientieuthu/>} />
          
         </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>MQTT SERVER</Footer>
    </Layout>
  </Layout>,
    </div>
  );
}

export default App;
