import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Row, Typography } from 'antd'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { login } from '../../shared/state/slices/authentication.slice'
import { TStore } from '../../shared/state/store'

const LoginHeader = styled(Typography.Title)`
  margin: 30px auto !important;
`
const LoginCard = styled(Card)``

const LoginComponent = () => {
  const dispatch = useDispatch()
  const onFinish = (values: { email: string; password: string }) => {
    dispatch(login({ email: values.email, password: values.password }))
  }

  const { email, password } = useSelector(
    (state: TStore) => state.authenticationReducer
  )

  return (
    <LoginCard>
      <Row justify="center">
        <LoginHeader level={4}>Please provide your identification</LoginHeader>
      </Row>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ email, password }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </LoginCard>
  )
}
export default LoginComponent
