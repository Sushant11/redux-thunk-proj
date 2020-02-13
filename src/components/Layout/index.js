import React from "react";

import { Layout } from "antd";

const { Content, Footer } = Layout;

const AppLayout = props => {
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px", margin: "50px 20px" }}>
        <div style={{ background: "#fff", padding: 50, minHeight: "90vh" }}>
          {props.children}
        </div>
      </Content>
      <Footer className="footer">LOL ©2020 Created by Sushant Chitrakar</Footer>
    </Layout>
  );
};

export default AppLayout;
