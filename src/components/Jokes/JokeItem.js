import React from "react";
import { Spin, Descriptions, Typography, Checkbox, Row, Col } from "antd";

const { Text } = Typography;

const JokeItem = props => {
  const { jokes, jokeLoading } = props;
  return (
    <Spin spinning={jokeLoading}>
      {jokes && jokes.error !== false ? (
        <div className="joke-message">
          {" "}
          <Text type="danger">Sorry.{jokes.message}!</Text>
        </div>
      ) : (
        <div className="joke-show">
          {jokes && jokes.setup && <h2>{jokes.setup}</h2>}{" "}
          {jokes && jokes.delivery && <h3>- {jokes.delivery}</h3>}{" "}
          {jokes && jokes.joke && <h2>{jokes.joke}</h2>}
        </div>
      )}

      <Descriptions className="attributes">
        {jokes && jokes.type && (
          <Descriptions.Item label="Typr">
            <Text code>{jokes.type}</Text>
          </Descriptions.Item>
        )}{" "}
        {jokes && jokes.category && (
          <Descriptions.Item label="Category">
            <Text code>{jokes.category}</Text>
          </Descriptions.Item>
        )}{" "}
        {jokes && jokes.contains && (
          <Descriptions.Item label="Contains">
            <Text code> {jokes.contains} </Text>
          </Descriptions.Item>
        )}{" "}
        {jokes && jokes.flags && (
          <Descriptions.Item label="Flags">
            {" "}
            <Checkbox.Group style={{ width: "100%" }} disabled>
              <Row>
                <Col span={8}>
                  <Checkbox value={jokes.nsfw}>Nsfw</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="political">Political</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="religious">Religious</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="sexist">Sexist</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="racist">Racist</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Descriptions.Item>
        )}
      </Descriptions>
    </Spin>
  );
};

export default JokeItem;
