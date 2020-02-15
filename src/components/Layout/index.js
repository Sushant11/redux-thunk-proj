import React from "react";

import { Layout } from "antd";

const { Content, Footer } = Layout;

const AppLayout = props => {
  return (
    <Layout className="layout">
      <Content>
        <div className="component">{props.children}</div>
      </Content>
      <Footer className="footer">
        LOL ©2020 Created by Sushant Chitrakar{" "}
      </Footer>
    </Layout>
  );
};

export default AppLayout;
