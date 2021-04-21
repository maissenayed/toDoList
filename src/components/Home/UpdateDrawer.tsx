import { EditOutlined } from '@ant-design/icons'
import { Button, Col, Drawer, Form, Input, Row } from 'antd'
import * as React from 'react'
import { useDispatch } from 'react-redux'

import {
  updateTodo,
  ToDoStatus,
  ToDoType,
} from '../../shared/state/slices/toDoList.slice'

const UpdateDrawer = ({ toDo }: { toDo: ToDoType }) => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const [showDrawer, setShowDrawer] = React.useState(false)

  const updateToDo = (values: ToDoType) => {
    dispatch(updateTodo(values))
  }

  const toggleVisibility = () => {
    setShowDrawer(true)
  }

  const onClose = () => {
    setShowDrawer(false)
  }

  const onFinish = (values: ToDoType) => {
    updateToDo({
      id: toDo.id,
      title: values.title,
      description: values.description,
      status: ToDoStatus.inComplete,
    })

    onClose()
  }

  return (
    <>
      <Row justify="center">
        <Button
          onClick={() => toggleVisibility()}
          type="primary"
          icon={<EditOutlined />}
        >
          Edit
        </Button>
      </Row>
      <Drawer
        title="Update a todo"
        width={720}
        destroyOnClose
        onClose={onClose}
        visible={showDrawer}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button type="primary" form="myForm" key="submit" htmlType="submit">
              Submit
            </Button>
          </div>
        }
      >
        <Form
          id="myForm"
          form={form}
          initialValues={toDo}
          hideRequiredMark
          onFinish={onFinish}
        >
          <Row gutter={16} justify="center" align="middle">
            <Col span={12}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  { required: true, message: 'Please update the Todo Title' },
                ]}
              >
                <Input placeholder="Please update the Todo Title" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} align="middle">
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please update Todo description',
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please update url description"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  )
}
export default UpdateDrawer
