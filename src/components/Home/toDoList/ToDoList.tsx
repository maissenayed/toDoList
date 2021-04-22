import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import {
  Avatar,
  Button,
  List,
  Popconfirm,
  Select,
  Tooltip,
  Typography,
} from 'antd'
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
  const [todoList, setTodoList] = React.useState([])
  const dispatch = useDispatch()

  // remove toDo action
  const removeToDo = (values: ToDoType) => {
    dispatch(remove(values))
  }
  // remove toDo status action
  const changeToDoStatus = (values: ToDoType) => {
    dispatch(changeStatus(values))
  }
  // get To-do list from state
  const todoListSelector = useSelector((state: TStore) => state.toDoListReducer)

  // to populate the component local state (useState) by store data
  // we should use useEffect to reRender the component every time the to-do List State change

  React.useEffect(() => {
    setTodoList(todoListSelector)
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
        dataSource={todoList}
        renderItem={(item: ToDoType) => (
          <List.Item
            key={item.id}
            actions={[
              <Tooltip key={item.id} placement="topLeft" title="Update">
                <UpdateDrawer toDo={item} />
              </Tooltip>,
              <Popconfirm
                onConfirm={() => removeToDo(item)}
                title="Are you sure？"
                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
              >
                <Tooltip key={item.id} placement="bottomLeft" title="Remove">
                  <Button icon={<DeleteOutlined />} danger type="primary">
                    Remove
                  </Button>
                </Tooltip>
              </Popconfirm>,
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
