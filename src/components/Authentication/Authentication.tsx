import { Col, Image, Row } from 'antd'
import * as React from 'react'
import styled from 'styled-components'

import Login from './Login'

const LandingLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

  grid-template-rows: auto;
`

const LandingHeader = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: auto;

  img {
    height: 64px;
    margin: 0 auto 8px;
  }
  div {
    font-size: 20px;
  }
`

const LandingFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin-bottom: auto;
`

const LandingContent = styled.div`
  margin-bottom: auto;
  margin-top: auto;
`

const Authentication = () => (
  <LandingLayout>
    <LandingHeader>
      <Image
        preview={false}
        style={{
          height: 'auto',
          width: '100%',
          /* even more control with max-width */
          maxWidth: '200px',
        }}
      />
    </LandingHeader>
    <LandingContent>
      <Row justify="center">
        <Col lg={12} sm={24}>
          <Login />
        </Col>
      </Row>
    </LandingContent>
    <LandingFooter />
  </LandingLayout>
)

export default Authentication
