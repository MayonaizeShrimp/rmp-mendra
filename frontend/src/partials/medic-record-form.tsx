import { Card, Col, DatePicker, Divider, Flex, Form, Input, Row, } from "antd"
import dayjs from "dayjs";

const { Item } = Form;
const { TextArea } = Input;

const labelConfig = {span: 8};

export const MedicRecordForm = () => {
	return <Form labelWrap labelAlign="left" colon={false}>
		<Flex vertical gap={16}>
			<Card>
				<Row gutter={8}>
					<Col span={24}>
						<Item label="Tanggal" style={{marginBottom: 0}}><DatePicker value={dayjs()} format="DD MMMM YYYY"/></Item>
					</Col>
					<Divider/>
					<Col span={12}>
						<Item name="" labelCol={labelConfig} label="Tinggi Badan"><Input /></Item>
						<Item name="" labelCol={labelConfig} label="Berat Badan"><Input /></Item>
						<Item name="" labelCol={labelConfig} label="Lingkar Perut"><Input /></Item>
					</Col>
					<Col span={12}>
						<Item name="" labelCol={labelConfig} label="Thread Starter"><Input /></Item>
						<Item name="" labelCol={labelConfig} label="Tekanan Darah"><Input /></Item>
					</Col>
					<Divider />
					<Col span={24}>
						<Item name="" labelCol={labelConfig} label="Keluhan" rules={[{ required: true }]}><Input /></Item>
						<Item name="" labelCol={labelConfig} label="ICD 10" rules={[{ required: true }]}><Input /></Item>
						<Item name="" labelCol={labelConfig} label="Dx/Primer" rules={[{ required: true }]}><TextArea /></Item>
						<Item name="" labelCol={labelConfig} label="Terapi" rules={[{ required: true }]}><TextArea /></Item>
						<Item name="" labelCol={labelConfig} label="Hasil Lab" rules={[{ required: true }]}><TextArea /></Item>
					</Col>
				</Row>
			</Card>
		</Flex>
	</Form>
}