import React, { useEffect } from "react";
import { Row, Col, Typography } from "antd";

import JokeForm from "./JokeForm";
import JokeItem from "./JokeItem";

const { Title } = Typography;

const Joke = props => {
  const { fetchJoke } = props;

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);
  return (
    <div>
      <div>
        <Title className="title" level={4}>
          <span>Laugh Out Loud</span>
        </Title>
        <Row gutter={16} className="lol-main">
          <Col lg={{ span: 24 }} xl={{ span: 24 }} className="joke-item">
            <JokeItem {...props} />
            <Col lg={{ span: 24 }} xl={{ span: 24 }}>
              <JokeForm {...props} />
            </Col>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Joke;
