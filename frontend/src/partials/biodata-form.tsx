import { Button, Card, Col, DatePicker, Flex, Form, Input, Radio, Row, Table, Typography } from 'antd';
import { ColumnType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { TestData } from 'shared/interfaces';
import { TestDataModel } from 'src/models/TestData';
import dayjs from 'dayjs';
import '../style.css';

const { Item } = Form;
const { TextArea } = Input;

const labelConfig = { span: 6 };

const recordColumns: ColumnType<TestData>[] = [
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

interface BiodataValues {
	nama: string,
	tanggalLahir: dayjs.Dayjs,
	gender: string,
	uuid: string,
	umur: string,
	allergies: string,
	ktp: string,
	type: string,
	phone: string,
	address: string,
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

	const onFinish = (values: BiodataValues) => {
		console.log("Biodata Values:", values)
	}

	return (
		<Form name="biodata-form" labelWrap={true} colon={false} wrapperCol={{span: 16}} onFinish={onFinish}>
			<Flex vertical gap={16} style={{ height: "95vh" }}>
				<Flex justify="space-between">
					<Typography.Title level={2} style={{ margin: 0 }}>
					Biodata Pasien
					</Typography.Title>
					<Flex justify="end" gap={8}>
						<Button size="large" type="primary" htmlType='submit'>Save</Button>
						<Button size="large" htmlType='reset'>Reset</Button>
					</Flex>
				</Flex>
				<Flex className='scrollToHeight' vertical>
					<Flex vertical gap={16}>
						<Card size='small'>	
							<Row gutter={16}>
								<Col span={12}>
									<Item name="name" label="Nama" rules={[{ required: true }]} labelCol={labelConfig}>
										<Input type='text'/>
									</Item>
									<Item name="tanggalLahir" label="Tanggal Lahir" rules={[{ required: true }]} labelCol={labelConfig}>
										<DatePicker value={dayjs()} format="DD MMMM YYYY" />
									</Item>
									<Item
										name="gender"
										label="Jenis Kelamin"
										rules={[{ required: true }]}
										labelCol={labelConfig}
										style={{ marginBottom: 0 }}>
										<Radio.Group style={{}}>
											<Radio value={"Pria"}> Pria </Radio>
											<Radio value={"Wanita"}> Wanita </Radio>
										</Radio.Group>
									</Item>
								</Col>
								<Col span={12}>
									<Item name="uuid" label="No Pasien" rules={[{ required: true }]} labelCol={labelConfig}>
										<Input type='text'/>
									</Item>
									<Item name="umur" label="Umur" rules={[{ required: true }]} labelCol={labelConfig}>
										<Input type='text'/>
									</Item>
									<Item name="allergies" label="Alergi" rules={[{ required: true }]} labelCol={labelConfig}>
										<TextArea />
									</Item>
								</Col>
							</Row>
						</Card>
						<Card size='small' >
							<Row gutter={16}>
								<Col span={12}>
									<Item name="ktp" label="No KTP" rules={[{ required: true }]} labelCol={labelConfig}>
										<Input type='text'/>
									</Item>
									<Item name="type" label="Tipe" rules={[{ required: true }]} labelCol={labelConfig}>
										<Radio.Group>
											<div style={{ marginBottom: '8px', marginTop: '6px' }}>
												<Radio value={"BPJS"}> BPJS </Radio>
											</div>
											<div style={{ marginBottom: '8px' }}>
												<Radio value={"Umum"}> Umum </Radio>
											</div>
											<div style={{ marginBottom: '8px' }}>
												<Radio value={"BI Aktif"}> BI Aktif </Radio>
											</div>
											<div style={{ marginBottom: '8px' }}>
												<Radio value={"BI Pensiun"}> BI Pensiun </Radio>
											</div>
										</Radio.Group>
									</Item>
								</Col>
								<Col span={12}>
									<Item name="phone" label="No HP" rules={[{ required: true }]} labelCol={labelConfig}>
										<Input type='text' />
									</Item>
									<Item name="address" label="Alamat" rules={[{ required: true }]} labelCol={labelConfig}>
										<TextArea />
									</Item>
								</Col>
							</Row>
						</Card>
						<Table
							bordered
							rowKey="id"
							rowClassName={(_, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')}
							dataSource={testData}
							columns={recordColumns}
						/>
					</Flex>
				</Flex>
        	</Flex>
		</Form>
	)
}