import React, { useEffect } from "react";
import { Row, Col, Typography, Card } from "antd";
import lol from  '../../assets/lol.png'

import JokeItem from "./JokeItem";

const { Title } = Typography;

const Joke = props => {
  const { fetchJoke } = props;

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  const responsiveGrid = {
    xl: { span: 12, offset: 6 },
    lg: { span: 20, offset: 2 },
    md: { span: 24 },
    sm: { span: 24 },
    xs: { span: 24 }
  };

  return (
    <div>
      <div>
        <Title className="title" level={4}>
          <span><img src={lol} alt='LOL'/>Laugh Out Loud<img src={lol} alt='LOL'/></span>
        </Title>
        <Row gutter={16} className="lol-main" span={12}>
          <Col {...responsiveGrid} className="joke-item">
            <JokeItem {...props} className="joke-item" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Joke;
