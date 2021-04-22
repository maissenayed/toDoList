import { Button, Col, Drawer, Form, Input, Row } from 'antd'
import * as React from 'react'
import { useDispatch } from 'react-redux'

import {
  create,
  ToDoStatus,
  ToDoType,
} from '../../../../shared/state/slices/toDoList.slice'

const CreateDrawer = () => {
  const [form] = Form.useForm()
  const [showDrawer, setShowDrawer] = React.useState(false)
  const dispatch = useDispatch()
  const createToDo = (values: ToDoType) => {
    dispatch(create(values))
  }

  const toggleVisibility = () => {
    setShowDrawer(true)
  }

  const onClose = () => {
    setShowDrawer(false)
  }
  const generateUniqueId = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return `_${Math.random().toString(36).substr(2, 9)}`
  }

  const onFinish = (values: ToDoType) => {
    createToDo({
      id: generateUniqueId(),
      title: values.title,
      description: values.description,
      status: ToDoStatus.inComplete,
    })

    onClose()
  }

  return (
    <>
      <Row justify="start">
        <Button onClick={() => toggleVisibility()}>Create</Button>
      </Row>
      <Drawer
        title="Create a new todo"
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
          hideRequiredMark
          onFinish={onFinish}
          preserve={false}
        >
          <Row gutter={16} justify="center" align="middle">
            <Col span={12}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  { required: true, message: 'Please enter the Todo Title' },
                ]}
              >
                <Input placeholder="Please enter the Todo Title" />
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
                    message: 'please enter Todo description',
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  )
}
export default CreateDrawer
