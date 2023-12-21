import { Button, Card, Col, DatePicker, Flex, Form, Input, Radio, Row, Table, Typography } from 'antd';
import { ColumnType } from 'antd/es/table';
import { useEffect } from 'react';
import { IPatient, IRecord } from 'shared/interfaces';
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
		dataIndex: "tanggal",
		render: d => dayjs(d).format("DD/MM/YY"),
	},
	{
		key: "tinggiBadan",
		title: "TB",
		dataIndex: "tinggiBadan",
	},
	{
		key: "beratBadan",
		title: "BB",
		dataIndex: "beratBadan",
	},
	{
		key: "lingkarPerut",
		title: "LP",
		dataIndex: "lingkarPerut",
	},
	{
		key: "sistole",
		title: "TS",
		dataIndex: "sistole",
	},
	{
		key: "diastole",
		title: "TD",
		dataIndex: "diastole",
	},
	{
		title: "Keluhan",
		dataIndex: "keluhan",
	},
	{
		title: "ICD 10",
		dataIndex: "icd10",
	},
	{
		title: "Dx/Primer",
		dataIndex: "dxPrimer",
	},
	{
		title: "Terapi",
		dataIndex: "terapi",
	},
	{
		title: "Hasil Lab",
		dataIndex: "hasilLab",
	},
]

interface BiodataFormProps {
	selected_patient: IPatient,
	isLoading: boolean,
	onSubmit: (val: IPatient) => void,
	onClickNewRecord: Function,
	onClickRecord: Function,
}

interface IPatientForm extends IPatient{
	tanggalLahirObject: Dayjs,
	umur: string,
}

export const BiodataForm = (props: BiodataFormProps) => {
	const [formData] = Form.useForm<IPatientForm>();

	const initialValue = {
		...props.selected_patient,
		tanggalLahirObject: dayjs(props.selected_patient.tanggalLahir),
		umur: dayjs().diff(props.selected_patient.tanggalLahir, 'year') + " tahun",
	}

	useEffect(() => {
		formData.setFieldsValue(initialValue);
	}, [props.selected_patient]);

	const onFinish = (values: IPatientForm) => {
		const data : IPatient = {
			...values,
			id: props.selected_patient.id,
			tanggalLahir: values.tanggalLahirObject.format("YYYY-MM-DD"),
		}
		props.onSubmit(data);
	}

	return (
		<Form name="biodata-form" 
			disabled={props.isLoading}
			form={formData}
			labelWrap={true} 
			initialValues={initialValue}
			colon={false} 
			wrapperCol={{span: 16}} 
			onFinish={onFinish}>
			<VerticalLayout>
				<HeaderLayout>
					<Typography.Title level={2} style={{ margin: 0 }}>
						Biodata Pasien
					</Typography.Title>
					<Flex justify="end" gap={8}>
						<Button size="large" type="primary" htmlType='submit'>Simpan</Button>
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
											<Radio value={true}> Pria </Radio>
											<Radio value={false}> Wanita </Radio>
										</Radio.Group>
									</Item>
								</Col>
								<Col span={12}>
									<Item name="noPasien" label="No Pasien" rules={[{ required: true }]} labelCol={labelConfig}>
										<Input type='text'/>
									</Item>
									<Item name="umur" label="Umur" labelCol={labelConfig}>
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
									<Item name="ktp" label="No KTP" labelCol={labelConfig}>
										<Input type='text'/>
									</Item>
									<Item name="patientTypeId" label="Tipe" rules={[{ required: true }]} labelCol={labelConfig}>
										<Radio.Group>
											<div style={{ marginBottom: '8px', marginTop: '6px' }}>
												<Radio value={1}> BPJS </Radio>
											</div>
											<div style={{ marginBottom: '8px' }}>
												<Radio value={2}> Umum </Radio>
											</div>
											<div style={{ marginBottom: '8px' }}>
												<Radio value={3}> BI Aktif </Radio>
											</div>
											<div style={{ marginBottom: '8px' }}>
												<Radio value={4}> BI Pensiun </Radio>
											</div>
										</Radio.Group>
									</Item>
								</Col>
								<Col span={12}>
									<Item name="hp" label="No HP" labelCol={labelConfig}>
										<Input type='text' />
									</Item>
									<Item name="alamat" label="Alamat" labelCol={labelConfig}>
										<TextArea />
									</Item>
								</Col>
							</Row>
						</Card>
						<Flex>
							<Button type="primary" onClick={() => props.onClickNewRecord()}>Tambah Kunjungan</Button>
						</Flex>
						<Table
							size='small'
							bordered
							rowKey="id"
							rowClassName={(_, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')}
							dataSource={props.selected_patient.Records}
							columns={recordColumns}
							onRow={(rec) => {
								return {
									onClick: e => props.onClickRecord(rec),
								} 
							}}
						/>
					</Flex>
				</ContentLayout>
			</VerticalLayout>
		</Form>
	)
}