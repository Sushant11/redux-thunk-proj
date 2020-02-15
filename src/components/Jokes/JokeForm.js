import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Row, Col, Radio, Checkbox } from "antd";

const jokeForm = props => {
  const { fetchCustomJoke, setVisible } = props;
  const { getFieldDecorator, validateFields, resetFields } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        fetchCustomJoke(values);
        setVisible(false);
      }
    });
  };
  const handleReset = e => {
    e.preventDefault();
    resetFields();
  };

  const formLayout = {
    xl: { span: 12 },
    lg: { span: 12 },
    md: { span: 12 },
    sm: { span: 12 },
    xs: { span: 24 }
  };

  const btnLayout = {
    xl: { span: 12 },
    lg: { span: 12 },
    md: { span: 12 },
    sm: { span: 12 },
    xs: { span: 12 }
  };
  return (
    <Form className="joke-form" onSubmit={handleSubmit}>
      <Row gutter={16}>
        <Col {...formLayout}>
          <Form.Item label="Joke Type">
            {getFieldDecorator("type", {
              rules: [{ required: true, message: "Please select a type." }]
            })(
              <Radio.Group initialValue="single" buttonStyle="solid">
                <Radio.Button value="single">Single</Radio.Button>
                <Radio.Button value="twopart">Two Part</Radio.Button>
              </Radio.Group>
            )}
          </Form.Item>
        </Col>
        <Col {...formLayout}>
          <Form.Item label="Category">
            {getFieldDecorator("category", {
              rules: [{ required: true, message: "Please select a category." }]
            })(
              <Checkbox.Group style={{ width: "100%" }}>
                <Row>
                  <Col span={24}>
                    <Checkbox value="Programming">Programming</Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="Miscellaneous">Miscellaneous</Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="Dark">Dark</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            )}
          </Form.Item>
        </Col>{" "}
        <Col {...formLayout}>
          <Form.Item label="Contains">
            {getFieldDecorator("contains")(<Input placeholder="Enter Text" />)}
          </Form.Item>
        </Col>
        <Col {...formLayout}>
          <Form.Item label="Flags">
            {getFieldDecorator("flags")(
              <Checkbox.Group style={{ width: "100%" }} disabled>
                <Row>
                  <Col span={12}>
                    <Checkbox value="nsfw">Nsfw</Checkbox>
                  </Col>
                  <Col span={12}>
                    <Checkbox value="political">Political</Checkbox>
                  </Col>
                  <Col span={12}>
                    <Checkbox value="religious">Religious</Checkbox>
                  </Col>
                  <Col span={12}>
                    <Checkbox value="sexist">Sexist</Checkbox>
                  </Col>
                  <Col span={12}>
                    <Checkbox value="racist">Racist</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            )}
          </Form.Item>
        </Col>{" "}
        <Col className="gutter-row" span={24}>
          <Col {...btnLayout}>
            {" "}
            <Form.Item className="btn-center">
              <Button type="primary" htmlType="submit" icon="search">
                Search
              </Button>
            </Form.Item>{" "}
          </Col>

          <Col {...btnLayout}>
            {" "}
            <Form.Item className="btn-center">
              <Button type="primary" icon="reload" onClick={handleReset}>
                Reset
              </Button>
            </Form.Item>
          </Col>
        </Col>
      </Row>
    </Form>
  );
};

export default Form.create()(withRouter(jokeForm));
