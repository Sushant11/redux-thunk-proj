import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import {
  Form,
  Spin,
  Descriptions,
  Typography,
  Card,
  Button,
  Icon,
  Row,
  Col,
  Modal
} from "antd";
import JokeForm from "./JokeForm";

const { Text } = Typography;

const JokeItem = props => {
  const { jokes, jokeLoading, fetchJoke } = props;
  const { resetFields } = props.form;

  const [visible, setVisible] = useState(false);

  const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

  const handleRandom = e => {
    e.preventDefault();
    fetchJoke();
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
    resetFields();
  };

  return (
    <div>
      {jokes && jokes.error === true ? (
        <div className="joke-message">
          {" "}
          <Text type="danger">Sorry.{jokes.message}!</Text>
        </div>
      ) : (
        <Fragment>
          <Card className="form-card">
            <Spin spinning={jokeLoading} indicator={antIcon}>
              {/* <Skeleton loading={jokeLoading} rows={1} active> */}{" "}
              <div className="joke-show">
                {jokes && jokes.setup && <h3>{jokes.setup}</h3>}{" "}
                {jokes && jokes.delivery && <h4>- {jokes.delivery}</h4>}{" "}
                {jokes && jokes.joke && <h4>{jokes.joke}</h4>}
              </div>
              {/* </Skeleton> */}
              <Descriptions className="attributes" column={2}>
                {jokes && jokes.type && (
                  <Descriptions.Item label="Type">
                    <Text code>{jokes.type.toUpperCase()}</Text>
                  </Descriptions.Item>
                )}{" "}
                {jokes && jokes.category && (
                  <Descriptions.Item label="Category">
                    <Text code>{jokes.category.toUpperCase()}</Text>
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
          </Card>
          <Row>
            <Col className="btn-layout">
              <Button
                type="primary"
                icon="sync"
                shape="round"
                size="large"
                className="btn-white"
                loading={jokeLoading}
                onClick={handleRandom}
              ></Button>{" "}
              <Button
                type="primary"
                shape="round"
                icon="plus"
                size="large"
                className="btn-white"
                onClick={showModal}
              >
                More
              </Button>
            </Col>
          </Row>
          <Modal
            title="Search Jokes"
            visible={visible}
            onCancel={handleCancel}
            footer={""}
          >
            <JokeForm {...props} visible={visible} setVisible={setVisible} />
          </Modal>
        </Fragment>
      )}
    </div>
  );
};

export default Form.create()(withRouter(JokeItem));
