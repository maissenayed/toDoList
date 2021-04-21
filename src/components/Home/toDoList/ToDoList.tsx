import { DeleteOutlined } from '@ant-design/icons'
import { Avatar, Button, List, Select, Tooltip, Typography } from 'antd'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  changeStatus,
  remove,
  ToDoStatus,
  ToDoType,
} from '../../../shared/state/slices/toDoList.slice'
import { TStore } from '../../../shared/state/store'
import CreateDrawer from './Drawers/CreateDrawer'
import UpdateDrawer from './Drawers/UpdateDrawer'

const { Option } = Select

const ToDoList = () => {
  const [todolist, setTodolist] = React.useState([])
  const dispatch = useDispatch()

  const removeToDo = (values: ToDoType) => {
    dispatch(remove(values))
  }

  const changeToDoStatus = (values: ToDoType) => {
    dispatch(changeStatus(values))
  }

  const todoListSelector = useSelector((state: TStore) => state.toDoListReducer)
  React.useEffect(() => {
    setTodolist(todoListSelector)
  }, [todoListSelector])

  return (
    <>
      <CreateDrawer />
      <List
        bordered
        header={<Typography.Title level={5}>To do list</Typography.Title>}
        size="large"
        pagination={{
          pageSize: 7,
        }}
        dataSource={todolist}
        renderItem={(item: ToDoType) => (
          <List.Item
            key={item.id}
            actions={[
              <Tooltip key={item.id} placement="topLeft" title="Update">
                <UpdateDrawer toDo={item} />
              </Tooltip>,
              <Tooltip key={item.id} placement="topLeft" title="Remove">
                <Button
                  icon={<DeleteOutlined />}
                  onClick={() => removeToDo(item)}
                  danger
                  type="primary"
                >
                  Remove
                </Button>
              </Tooltip>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={item.title}
              description={item.description}
            />
            <Select
              value={item.status}
              onChange={(value: ToDoStatus) => {
                changeToDoStatus({ ...item, status: value })
              }}
              style={{ width: '200px' }}
            >
              <Option value={ToDoStatus.complete}>Complete</Option>
              <Option value={ToDoStatus.inComplete}>Incomplete</Option>
            </Select>
          </List.Item>
        )}
      />
    </>
  )
}
export default ToDoList
