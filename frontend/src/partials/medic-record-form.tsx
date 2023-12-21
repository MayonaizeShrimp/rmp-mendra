import {
  Card,
  Col,
  DatePicker,
  Divider,
  Flex,
  Form,
  Input,
  Row,
  Button,
  Typography,
  Modal,
  message,
} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { IRecord } from "shared/interfaces";
import { useEffect, useState } from "react";

const { Item } = Form;
const { TextArea } = Input;

const labelConfig = { span: 8 };

interface IRecordForm extends IRecord {
  tanggalObject: dayjs.Dayjs;
}

interface MedicRecordFormProps {
	selectedRecord: IRecord,
	isLoading: boolean,
	onSubmit: (val: IRecord) => void,
	onCancel: Function,
}

export const MedicRecordForm = (props: MedicRecordFormProps) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData] = Form.useForm<IRecordForm>();

  const isPatientIdValid = props.selectedRecord.patientId;
	const isRecordValid = props.selectedRecord.id;
	const initialValue = {
		...props.selectedRecord,
		tanggalObject: dayjs(props.selectedRecord.tanggal),
	}

	useEffect(() => {
		formData.setFieldsValue(initialValue);
	}, [props.selectedRecord]);

	const handleFormFinish = (values: IRecordForm) => {
    setIsModalOpen(true);
	}

  const handleSubmitData = () => {
    if (!props.selectedRecord.patientId || props.selectedRecord.patientId === 0) {
      message.error("Patient ID is not valid");
      return;
    };

    const values = formData.getFieldsValue();
		const data : IRecord = {
			...values,
			id: props.selectedRecord.id,
      patientId: props.selectedRecord.patientId,
			tanggal: values.tanggalObject.format("YYYY-MM-DD"),
		}
    setIsModalOpen(false);
		props.onSubmit(data);
  }

  return (
    <Form 
      form={formData} 
      disabled={props.isLoading}
			initialValues={initialValue}
      labelWrap={true}
      labelAlign="left" 
      colon={false} 
      onFinish={handleFormFinish}>
      <Modal
				open={isModalOpen}
				title={isRecordValid ? "Edit Data" : "Data Baru"}
				onOk={() => handleSubmitData()}
				onCancel={() => setIsModalOpen(false)}>
				<p>{isRecordValid ? "Apakah Anda yakin ingin ubah data?" : "Apakah Anda yakin ingin simpan data baru?"}</p>
			</Modal>
      <Flex vertical gap={16} style={{ maxHeight: "95vh" }}>
        <Flex justify="space-between">
          <Typography.Title level={2} style={{ margin: 0 }}>Kunjungan</Typography.Title>
          <Flex justify="end" gap={8}>
            <Button size="large" type="primary" htmlType="submit">Simpan</Button>
            <Button size="large" htmlType="reset">Reset</Button>
            <Button size="large" type="text" onClick={() => props.onCancel()}><CloseOutlined /></Button>
          </Flex>
        </Flex>
          <Card className="scrollToHeight">
            <Row gutter={8}>
              <Col span={24}>
                <Item
                  name="tanggalObject"
                  label="Tanggal"
                  style={{ marginBottom: 0 }}>
                  <DatePicker value={dayjs()} format="DD MMMM YYYY" />
                </Item>
              </Col>
              <Divider />
              <Col span={12}>
                <Item
                  name="tinggiBadan"
                  labelCol={labelConfig}
                  label="Tinggi Badan">
                  <Input type="number" />
                </Item>
                <Item
                  name="beratBadan"
                  labelCol={labelConfig}
                  label="Berat Badan">
                  <Input type="number" />
                </Item>
                <Item
                  name="lingkarPerut"
                  labelCol={labelConfig}
                  label="Lingkar Perut">
                  <Input type="number" />
                </Item>
              </Col>
              <Col span={12}>
                <Item name="sistole" labelCol={labelConfig} label="Sistole">
                  <Input type="number" />
                </Item>
                <Item name="diastole" labelCol={labelConfig} label="Diastole">
                  <Input type="number" />
                </Item>
              </Col>
              <Divider />
              <Col span={24}>
                <Item
                  name="keluhan"
                  labelCol={labelConfig}
                  label="Keluhan"
                  rules={[{ required: true }]}>
                  <Input />
                </Item>
                <Item
                  name="icd10"
                  labelCol={labelConfig}
                  label="ICD 10"
                  rules={[{ required: true }]}>
                  <Input />
                </Item>
                <Item
                  name="dxPrimer"
                  labelCol={labelConfig}
                  label="Dx/Primer"
                  rules={[{ required: true }]}>
                  <TextArea />
                </Item>
                <Item
                  name="terapi"
                  labelCol={labelConfig}
                  label="Terapi"
                  rules={[{ required: true }]}>
                  <TextArea />
                </Item>
                <Item
                  name="hasilLab"
                  labelCol={labelConfig}
                  label="Hasil Lab"
                  rules={[{ required: true }]}>
                  <TextArea />
                </Item>
              </Col>
            </Row>
          </Card>
      </Flex>
    </Form>
  );
};
