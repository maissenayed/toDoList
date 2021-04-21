import { LogoutOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, Image, Layout, Row, Tooltip } from 'antd'
import * as React from 'react'
import styled from 'styled-components'

const StyledHeader = styled(Layout.Header)``

const Header = () => {
  return (
    <StyledHeader>
      <Row justify="space-between" align="middle">
        <Col>
          <Row justify="space-between" align="middle" gutter={[16, 16]}>
            <Col lg={8} xs={8}>
              <Row justify="space-between" align="middle">
                <Image
                  preview={false}
                  style={{
                    height: 'auto',
                    width: '100%',
                    /* even more control with max-width */
                  }}
                />
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="space-between" align="middle" gutter={[16, 16]}>
            <Col>
              <Tooltip placement="left" title="logout">
                <Button shape="circle" icon={<LogoutOutlined />} />
              </Tooltip>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledHeader>
  )
}

export default Header
