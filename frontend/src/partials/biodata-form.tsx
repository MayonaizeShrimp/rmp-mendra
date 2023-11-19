import { Button, Card, Col, DatePicker, Flex, Form, Input, Radio, Row, Table, Typography } from "antd"
import { ColumnType } from "antd/es/table";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { TestData } from "shared/interfaces";
import { TestDataModel } from "src/models/TestData";
import "../style.css";

const { Item } = Form;
const { TextArea } = Input;

const labelConfigShort = {span: 4};

const recordColumns : ColumnType<TestData>[] = [
	{
		key: "Tanggal",
		title: "Tanggal",
		render: (v, r, index) => index,
	},
	{
		key: "id",
		title: "TB",
		dataIndex: "id",
	},
	{
		key: "name",
		title: "BB",
		dataIndex: "id",
	},
	{
		key: "manufacturer",
		title: "LP",
		dataIndex: "id",
	},
	{
		key: "expiry_date",
		title: "TS",
		dataIndex: "id",
	},
	{
		title: "TD",
		dataIndex: "id",
	},
	{
		title: "Keluhan",
		dataIndex: "name",
	},
	{
		title: "ICD 10",
	},
	{
		title: "Dx/Primer",
	},
	{
		title: "Terapi",
		dataIndex: "manufacturer",
	},
	{
		title: "Hasil Lab",
	},
]

interface BiodataFormProps {
	patient_id: number,
}

export const BiodataForm = (props: BiodataFormProps) => {
	const [testData, setTestData] = useState<TestData[]>([]);

	useEffect(() => {
		TestDataModel.get()
			.then(res => {
				console.log(`${res.length} test data is fetched from backend`);
				setTestData(res);
			})
			.catch(err => {
				console.error(`error when fetching from test backend`, err);
			})
	}, []);

	return <Form name="biodata-form">
		<Flex vertical gap={16}>
			<Flex justify="space-between">
				<Typography.Title level={2} style={{margin: 0}}>Biodata Pasien</Typography.Title>
				<Flex justify="end" gap={8}>
					<Button size="large" type="primary">Save</Button>
					<Button size="large">Reset</Button>
				</Flex>
			</Flex>
			<Card>
				<Row gutter={16}>
					<Col span={12}>
						<Item name="name" label="Nama" rules={[{ required: true }]} labelCol={labelConfigShort}><Input /></Item>
						<Item label="Umur" rules={[{ required: true }]} labelCol={labelConfigShort}><Input readOnly value="10 tahun" bordered={false}/></Item>
					</Col>
					<Col span={12}>
						<Item name="uuid" label="No Pasien" rules={[{ required: true }]}><Input /></Item>
						<Item name="allergies" label="Alergi" rules={[{ required: true }]}><TextArea /></Item>
					</Col>
					<Col span={24}>
						<Flex gap={16}>
							<Item label="Tanggal Lahir" rules={[{ required: true }]}><DatePicker value={dayjs()} format="DD MMMM YYYY"/></Item>
							<Item name="gender" label="Jenis Kelamin" rules={[{ required: true }]}>
								<Radio.Group>
									<Radio value={1}> Pria </Radio>
									<Radio value={0}> Wanita </Radio>
								</Radio.Group>
							</Item>
						</Flex>

					</Col>
				</Row>
			</Card>
			<Card>
				<Item name="ktp" label="KTP" rules={[{ required: true }]}><Input /></Item>
				<Item name="type" label="Tipe" rules={[{ required: true }]}>
					<Radio.Group>
						<Radio value={0}> BPJS </Radio>
						<Radio value={1}> Umum </Radio>
						<Radio value={2}> BI Aktif </Radio>
						<Radio value={3}> BI Pensiun </Radio>
					</Radio.Group></Item>
				<Item name="phone" label="No HP" rules={[{ required: true }]}><Input /></Item>
				<Item name="address" label="Alamat" rules={[{ required: true }]}><Input /></Item>
			</Card>
			<Table
				bordered
				rowKey="id"
				rowClassName={(_, index) => index % 2 == 0 ? 'table-row-light' : 'table-row-dark'}
				dataSource={testData}
				columns={recordColumns}
				/>
		</Flex>
	</Form>
}