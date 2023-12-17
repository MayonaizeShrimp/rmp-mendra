import { Button, Card, Col, DatePicker, Flex, Form, Input, Radio, Row, Table, Typography } from 'antd';
import { ColumnType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { IPatient, IRecord, TestData } from 'shared/interfaces';
import { TestDataModel } from 'src/models/TestData';
import dayjs, { Dayjs } from 'dayjs';
import '../style.css';
import { VerticalLayout } from 'src/components/vertical-layout';
import { HeaderLayout } from 'src/components/header-layout';
import { ContentLayout } from 'src/components/content-layout';

const { Item } = Form;
const { TextArea } = Input;

const labelConfig = { span: 6 };

const recordColumns: ColumnType<IRecord>[] = [
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
		dataIndex: "keluhan",
	},
	{
		title: "Hasil Lab",
	},
]

interface BiodataFormProps {
	patient_id: number,
	selected_patient: IPatient,
}

interface IPatientForm extends IPatient{
	tanggalLahirObject: Dayjs,
	umur: string,
}

export const BiodataForm = (props: BiodataFormProps) => {
	const [formData] = Form.useForm<IPatientForm>();

	useEffect(() => {
		formData.setFieldsValue({
			...props.selected_patient,
			tanggalLahirObject: dayjs(props.selected_patient.tanggalLahir),
			umur: dayjs().diff(props.selected_patient.tanggalLahir, 'year') + " tahun",
		});
	}, [props.selected_patient]);

	const onFinish = (values: IPatient) => {
		console.log("Biodata Values:", values)
	}

	return (
		<Form name="biodata-form" 
			form={formData}
			labelWrap={true} 
			colon={false} 
			wrapperCol={{span: 16}} 
			onFinish={onFinish}>
			<VerticalLayout>
				<HeaderLayout>
					<Typography.Title level={2} style={{ margin: 0 }}>
						Biodata Pasien
					</Typography.Title>
					<Flex justify="end" gap={8}>
						<Button size="large" type="primary" htmlType='submit'>Save</Button>
						<Button size="large" htmlType='reset'>Reset</Button>
					</Flex>
				</HeaderLayout>
				<ContentLayout>
					<Flex vertical gap={16}>
						<Card size='small'>	
							<Row gutter={16}>
								<Col span={12}>
									<Item name="nama" label="Nama" rules={[{ required: true }]} labelCol={labelConfig}>
										<Input type='text'/>
									</Item>
									<Item name="tanggalLahirObject" label="Tanggal Lahir" rules={[{ required: true }]} labelCol={labelConfig}>
										<DatePicker format="DD MMMM YYYY" />
									</Item>
									<Item
										name="gender"
										label="Jenis Kelamin"
										rules={[{ required: true }]}
										labelCol={labelConfig}
										style={{ marginBottom: 0 }}>
										<Radio.Group>
											<Radio value={1}> Pria </Radio>
											<Radio value={0}> Wanita </Radio>
										</Radio.Group>
									</Item>
								</Col>
								<Col span={12}>
									<Item name="noPasien" label="No Pasien" rules={[{ required: true }]} labelCol={labelConfig}>
										<Input type='text'/>
									</Item>
									<Item name="umur" label="Umur" rules={[{ required: true }]} labelCol={labelConfig}>
										<Input type='text' readOnly/>
									</Item>
									<Item name="alergi" label="Alergi" labelCol={labelConfig}>
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
									<Item name="hp" label="No HP" rules={[{ required: true }]} labelCol={labelConfig}>
										<Input type='text' />
									</Item>
									<Item name="alamat" label="Alamat" rules={[{ required: true }]} labelCol={labelConfig}>
										<TextArea />
									</Item>
								</Col>
							</Row>
						</Card>
						<Table
							bordered
							rowKey="id"
							rowClassName={(_, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')}
							// dataSource={props.selected_patient.Records}
							columns={recordColumns}
						/>
					</Flex>
				</ContentLayout>
			</VerticalLayout>
		</Form>
	)
}