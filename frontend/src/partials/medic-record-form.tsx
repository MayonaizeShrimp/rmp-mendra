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
} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { Item } = Form;
const { TextArea } = Input;

const labelConfig = { span: 8 };

interface FormValues {
  tanggal: dayjs.Dayjs;
  tinggiBadan: string;
  beratBadan: string;
  lingkarPerut: string;
  sistole: string;
  diastole: string;
  keluhan: string;
  icd10: string;
  dxPrimer: string;
  terapi: string;
  hasilLab: string;
}

export const MedicRecordForm = () => {
  const onFinish = (values: FormValues) => {
    // Log the form values to the console
    console.log("Medical Record:", values);
  };

  return (
    <Form labelWrap labelAlign="left" colon={false} onFinish={onFinish}>
      <Flex vertical gap={16} style={{ maxHeight: "95vh" }}>
        <Flex justify="space-between">
          <Typography.Title level={2} style={{ margin: 0 }}>Kunjungan</Typography.Title>
          <Flex justify="end" gap={8}>
            <Button size="large" type="primary" htmlType="submit">Save</Button>
            <Button size="large" htmlType="reset">Reset</Button>
            <Button size="large" type="text"><CloseOutlined /></Button>
          </Flex>
        </Flex>
          <Card className="scrollToHeight">
            <Row gutter={8}>
              <Col span={24}>
                <Item
                  name="tanggal"
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
                  <Input />
                </Item>
                <Item
                  name="beratBadan"
                  labelCol={labelConfig}
                  label="Berat Badan">
                  <Input />
                </Item>
                <Item
                  name="lingkarPerut"
                  labelCol={labelConfig}
                  label="Lingkar Perut">
                  <Input />
                </Item>
              </Col>
              <Col span={12}>
                <Item name="sistole" labelCol={labelConfig} label="Sistole">
                  <Input />
                </Item>
                <Item name="diastole" labelCol={labelConfig} label="Diastole">
                  <Input />
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
