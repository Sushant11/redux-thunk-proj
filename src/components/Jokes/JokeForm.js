import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Row, Col, Radio, Checkbox, Card } from "antd";

const jokeForm = props => {
  const { fetchJoke, jokeLoading, fetchCustomJoke } = props;
  const { getFieldDecorator, validateFields, resetFields } = props.form;

  const handleRandom = e => {
    e.preventDefault();
    fetchJoke();
  };

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        fetchCustomJoke(values);
      }
    });
  };
  const handleReset = e => {
    e.preventDefault();
    resetFields();
  };
  return (
    <Card className="form-card">
      <Form className="joke-form" onSubmit={handleSubmit}>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Form.Item label="Joke Type">
              {getFieldDecorator("type")(
                <Radio.Group initialValue="single" buttonStyle="solid">
                  <Radio.Button value="single">Single</Radio.Button>
                  <Radio.Button value="twopart">Two Part</Radio.Button>
                </Radio.Group>
              )}
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Form.Item label="Category">
              {getFieldDecorator("category")(
                <Checkbox.Group buttonStyle="solid">
                  <Checkbox value="Programming">Programming</Checkbox>
                  <Checkbox value="Miscellaneous">
                    Miscellaneous
                  </Checkbox>
                  <Checkbox value="Dark">Dark</Checkbox>
                </Checkbox.Group>
              )}
            </Form.Item>
          </Col>{" "}
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Form.Item label="Flags">
              {getFieldDecorator("flags")(
                <Checkbox.Group style={{ width: "100%" }} disabled>
                  <Row>
                    <Col span={8}>
                      <Checkbox value="nsfw">Nsfw</Checkbox>
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
              )}
            </Form.Item>
          </Col>{" "}
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Form.Item label="Contains">
              {getFieldDecorator("contains")(
                <Input placeholder="Enter Text" />
              )}
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={24}>
            <Col span={8}>
              {" "}
              <Form.Item>
                <Button
                  type="primary"
                  className="form-button"
                  size="large"
                  icon="sync"
                  loading={jokeLoading}
                  onClick={handleRandom}
                >
                  Random
                </Button>
              </Form.Item>
            </Col>
            <Col span={8}>
              {" "}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="form-button"
                  size="large"
                  icon="search"
                >
                  Search
                </Button>
              </Form.Item>{" "}
            </Col>

            <Col span={8}>
              {" "}
              <Form.Item>
                <Button
                  type="primary"
                  className="form-button"
                  size="large"
                  icon="reload"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </Form.Item>
            </Col>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default Form.create()(withRouter(jokeForm));
