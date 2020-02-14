import React from "react";

import { Layout } from "antd";

const { Content, Footer } = Layout;

const AppLayout = props => {
  return (
    <Layout className="layout">
      <Content>
        <div style={{ padding: 50}}>
          {props.children}
        </div>
      </Content>
      <Footer className="footer">LOL ©2020 Created by Sushant Chitrakar </Footer>
    </Layout>
  );
};

export default AppLayout;
