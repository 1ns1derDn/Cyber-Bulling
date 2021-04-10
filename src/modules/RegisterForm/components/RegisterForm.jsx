import React from 'react'
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, ExclamationCircleTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom'

import {
  Button,
  Layer,
  Layout
} from 'components'

import "./RegisterForm.scss"

const RegisterForm = () => {

  const success = true;

  return (
    <div className="auth">
      <Layout type='auth'>
        <div className="auth__head">
          <h1 className="auth__title">
            Регистрация
        </h1>
          <p className="auth__text">
            Для входа в чат, Вам нужно зарегистрироваться.
        </p>
        </div>
        <Layer>
          {!success ? (
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-Mail" />
              </Form.Item>

              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Ваше имя" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Пароль"
                />
              </Form.Item>

              <Form.Item
                name="password_confirm"
                rules={[{ required: true, message: 'Please input your password_confirm!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="повторите пароль"
                />
              </Form.Item>

              <Form.Item>
                <Button className="auth__button" type="primary" size="large" htmlType="submit">
                  Log in
                      </Button>
              </Form.Item>
              <Link to="/login" className="auth__link">
                Войти в аккаунт
                      </Link>
            </Form>
          ) : (
            <div className="success-block">
              <div className="success-block__icon">
                <ExclamationCircleTwoTone style={{ fontSize: 48 }} />
              </div>
              <h3 className="success-block__title">
                Подтвердите свой аккаунт
              </h3>
              <p className="success-block__text">
                На Вашу почту отправлино письмо с ссылкой на подтверждение аккаунта.
              </p>
            </div>
          )}
        </Layer>
      </Layout>
    </div>
  )
}

export default RegisterForm;
