import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio } from 'antd';
import { useState } from 'react';

const Contact = () => {
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };
  return (
    <div className=' container mx-auto mt-10'>
        <h3 className='text-5xl my-4'>Contact Us</h3>
        <Form
        form={form}
        layout="vertical"
        initialValues={{
            requiredMarkValue: requiredMark,
        }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
        >
        <Form.Item label="Required Mark" name="requiredMarkValue">
            <Radio.Group>
            <Radio.Button value="optional">Optional</Radio.Button>
            <Radio.Button value>Required</Radio.Button>
            <Radio.Button value={false}>Hidden</Radio.Button>
            </Radio.Group>
        </Form.Item>
        <Form.Item label="Field A" required tooltip="This is a required field">
            <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item
            label="Field B"
            tooltip={{
            title: 'Tooltip with customize icon',
            icon: <InfoCircleOutlined />,
            }}
        >
            <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
            <Button type="primary">Submit</Button>
        </Form.Item>
        </Form>
    </div>
  )
}

export default Contact