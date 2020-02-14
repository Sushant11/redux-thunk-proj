import React from "react";
import { Spin, Descriptions, Typography, Skeleton, Card } from "antd";

const { Text } = Typography;

const JokeItem = props => {
  const { jokes, jokeLoading } = props;
  console.log(
    "jokes && jokes.flags :",
    jokes && jokes.error === false && jokes.flags
  );
  return (
    <Spin spinning={jokeLoading}>
      {jokes && jokes.error === true ? (
        <div className="joke-message">
          {" "}
          <Text type="danger">Sorry.{jokes.message}!</Text>
        </div>
      ) : (
        <Card className="form-card">
        <Skeleton loading={jokeLoading} active> <div className="joke-show">
        {jokes && jokes.setup && <h2>{jokes.setup}</h2>}{" "}
        {jokes && jokes.delivery && <h3>- {jokes.delivery}</h3>}{" "}
        {jokes && jokes.joke && <h2>{jokes.joke}</h2>}
      </div></Skeleton>
      </Card>
      )}

      <Descriptions className="attributes" column={2}>
        {jokes && jokes.type && (
          <Descriptions.Item label="Type">
            <Text code>{jokes.type}</Text>
          </Descriptions.Item>
        )}{" "}
        {jokes && jokes.category && (
          <Descriptions.Item label="Category">
            <Text code>{jokes.category}</Text>
          </Descriptions.Item>
        )}{" "}
        {/* {jokes && jokes.flags && (
          <Descriptions.Item label="Flags">
            {" "}
            <Checkbox.Group style={{ width: "100%" }} disabled>
              <Row>
                <Col span={8}>
                  <Checkbox
                    checked={
                      jokes && jokes.error === false ? jokes.flags.nsfw : null
                    }
                  >
                    Nsfw
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    checked={
                      jokes && jokes.error === false
                        ? jokes.flags.political
                        : null
                    }
                  >
                    Political
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    checked={
                      jokes && jokes.error === false
                        ? jokes.flags.religious
                        : null
                    }
                  >
                    Religious
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    checked={
                      jokes && jokes.error === false ? jokes.flags.sexist : null
                    }
                  >
                    Sexist
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    checked={
                      jokes && jokes.error === false ? jokes.flags.racist : null
                    }
                  >
                    Racist
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Descriptions.Item>
        )} */}
      </Descriptions>
    </Spin>
  );
};

export default JokeItem;
