import { LogoutOutlined } from '@ant-design/icons'
import { Button, Col, Layout, Row, Tooltip, Typography } from 'antd'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { logout } from '../state/slices/authentication.slice'

const TitleHeader = styled(Typography.Text)`
  color: white;
  font-size: 24px;
`
const Header = () => {
  const dispatch = useDispatch()

  const logoutButton = () => {
    dispatch(logout())
  }
  return (
    <Layout.Header>
      <Row justify="space-between" align="middle">
        <Col>
          <TitleHeader>To do list</TitleHeader>
        </Col>
        <Col>
          <Row justify="space-between" align="middle" gutter={[16, 16]}>
            <Col>
              <Tooltip placement="left" title="logout">
                <Button
                  shape="circle"
                  icon={<LogoutOutlined />}
                  onClick={() => logoutButton()}
                />
              </Tooltip>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header
