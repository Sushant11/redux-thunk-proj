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
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="joke-item">
            <JokeItem {...props} />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <JokeForm {...props} />
            </Col>
        </Row>
      </div>
    </div>
  );
};

export default Joke;
