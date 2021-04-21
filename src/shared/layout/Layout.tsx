import { Layout, Row } from 'antd'
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Home from '../../components/Home/Home'
import Header from './Header'

const StyledContent = styled(Layout.Content)`
  padding: 24px;
  height: 100%;
  padding: '0 50px';
  margin-top: 16px;
`

const Sizer = styled.div`
  margin: auto;
  height: 100%;
  align-items: center;
`

const AppLayout = () => (
  <>
    <Layout className="layout">
      <Header />
      <Layout>
        <Row justify="center" style={{ marginBottom: 16 }} />
        <StyledContent style={{}}>
          <Sizer>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </Sizer>
        </StyledContent>
      </Layout>
    </Layout>
  </>
)

export default AppLayout
