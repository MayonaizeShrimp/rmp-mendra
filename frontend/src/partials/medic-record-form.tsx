import { Flex, Form, Input } from "antd"

export const MedicRecordForm = () => {
	return <Flex vertical>
		<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
		<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
		<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
		<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
		<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
		<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
		<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
		<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
		<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
	</Flex>
}