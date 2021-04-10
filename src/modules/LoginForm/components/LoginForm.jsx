import React from 'react'
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

import {
  Button,
  Layer,
  Layout
} from 'components'

import "./LoginForm.scss"

const LoginForm = () => {
  return (
    <div className="auth">
      <Layout type='auth'>
        <div className="auth__head">
          <h1 className="auth__title">
            Войти в систему
        </h1>
          <p className="auth__text">
            Пожалуйста, войдите в свой аккаунт.
        </p>
        </div>
        <Layer>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
              <Button className="auth__button" type="primary" size="large" htmlType="submit">
                Log in
            </Button>
            </Form.Item>
            <Link to="/register" className="auth__link">
              Зарегистрироваться
            </Link>
          </Form>
        </Layer>
      </Layout>
    </div>
  )
}

export default LoginForm
