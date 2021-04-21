import { Row, Typography } from 'antd'
import * as React from 'react'
import styled from 'styled-components'

import ToDoList from './toDoList/ToDoList'

const LandingLayout = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  align-items: center;
  grid-template-columns: auto;
`
const Home = () => (
  <>
    <LandingLayout>
      <Row justify="center">
        <Typography.Title level={4}>
          Welcome back, let it be a productive day
        </Typography.Title>
      </Row>

      <ToDoList />
    </LandingLayout>
  </>
)

export default Home
