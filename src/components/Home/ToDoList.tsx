import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Avatar, Button, List, Select, Space, Tooltip } from 'antd'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { remove, ToDoType } from '../../shared/state/slices/toDoList.slice'
import { TStore } from '../../shared/state/store'
import CreateDrawer from './CreateDrawer'
import UpdateDrawer from './UpdateDrawer'

const { Option } = Select

const IconText = ({ icon, text }: any) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

const ToDoList = () => {
  const [todolist, setTodolist] = React.useState([])
  const dispatch = useDispatch()

  const removeToDo = (values: ToDoType) => {
    dispatch(remove(values))
  }

  const todoListSelector = useSelector((state: TStore) => state.toDoListReducer)
  React.useEffect(() => {
    setTodolist(todoListSelector)
  }, [todoListSelector])

  return (
    <>
      <CreateDrawer />
      <List
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page)
          },
          pageSize: 7,
        }}
        dataSource={todolist}
        renderItem={(item) => (
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
            <Select style={{ width: '200px' }}>
              <Option value="complete">Complete</Option>
              <Option value="incomplete">Incomplete</Option>
            </Select>
          </List.Item>
        )}
      />
    </>
  )
}
export default ToDoList
