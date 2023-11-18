import { Col, Flex, Form, Input, Row } from "antd"
import { SampleTable } from "./sample-table"

interface BiodataFormProps {
	patient_id: number,
}

export const BiodataForm = (props: BiodataFormProps) => {


	return <Flex vertical={true}>
		<Form name="biodata-form">
			<Row>
				<Col span={12}>
					<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
					<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
					<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
					<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
					<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
					<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
					<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
					<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
					<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
					<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
					<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}><Input /></Form.Item>
				</Col>
			</Row>
		</Form>
		<SampleTable/>
	</Flex>
}