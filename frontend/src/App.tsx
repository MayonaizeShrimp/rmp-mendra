import { Button, Col, Flex, Input, Row, Typography } from 'antd';
import { UserAddOutlined } from "@ant-design/icons"
import { BiodataForm } from './partials/biodata-form';
import { MedicRecordForm } from './partials/medic-record-form';
import PatientCard from './partials/patient-card';
import { CSSProperties } from 'react';
import "./style.css";

const implementCSSScroll : CSSProperties = {
    overflowY: 'auto',  //allow component to overflow
    width: "100%",
}

const DUMMY_PATIENT = [
    <PatientCard name={'Budi Budi Budi Budi'} dob={'2023-08-08'} uuid={'s'} />,
    <PatientCard name={'Charlie Charlie Charlie Charlie Charlie Charlie'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Dimas Uwu'} dob={'asdf'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
    <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'} />,
]

function App() {
    return <Row gutter={16} style={{height: "90vh"}}>
        <Col span={5}>
            <Flex vertical gap={16} style={{height: "95vh"}}>
                <Flex gap={8} flex="1 0 auto">
                    <Input.Search type="text" placeholder="Cari Pasien" size="large" allowClear />
                    <Button type="primary" size="large">
                        <UserAddOutlined />
                    </Button>
                </Flex>
                <Flex
                    style={implementCSSScroll}
                    gap={8}
                    vertical
                    children={DUMMY_PATIENT}
                />
            </Flex>
        </Col>
        <Col span={12}>
            <Flex vertical gap={16} style={{height: "95vh"}}>
                <Flex justify="space-between">
                    <Typography.Title level={2} style={{ margin: 0 }}>Biodata Pasien</Typography.Title>
                    <Flex justify="end" gap={8}>
                        <Button size="large" type="primary">Save</Button>
                        <Button size="large">Reset</Button>
                    </Flex>
                </Flex>
                <Flex style={implementCSSScroll} vertical>
                    <BiodataForm patient_id={1} />
                </Flex>
            </Flex>
        </Col>
        <Col span={7}>
            <Flex vertical gap={16} style={{height: "95vh"}}>
                <Flex justify="space-between">
                    <Typography.Title level={2} style={{ margin: 0 }}>Kunjungan</Typography.Title>
                    <Flex justify="end" gap={8}>
                        <Button size="large" type="primary">Save</Button>
                        <Button size="large">Reset</Button>
                    </Flex>
                </Flex>
                <Flex style={implementCSSScroll}>
                    <MedicRecordForm />
                </Flex>
            </Flex>
        </Col>
    </Row>
}

export default App;
