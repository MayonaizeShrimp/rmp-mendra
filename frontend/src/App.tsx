import { Button, Col, Flex, Input, Typography } from 'antd';
import { UserAddOutlined } from "@ant-design/icons"
import { BiodataForm } from './partials/biodata-form';
import { MedicRecordForm } from './partials/medic-record-form';
import PatientCard from './partials/patient-list';

function App() {
    return <div style={{ display: 'flex', height: '97vh', overflow: 'hidden' }}>
        <Col span={5}>
            <Flex vertical style={{ height: '100%' }}>
                <div style={{ position: 'sticky', top: 0, background: 'white', padding: '16px' }}>
                    <Flex gap={8}>
                        <Input.Search type="text" placeholder="Cari Pasien" size="large" allowClear />
                        <Button type="primary" size="large">
                            <UserAddOutlined /> Pasien Baru
                        </Button>
                    </Flex>
                </div>
                <Flex
                    style={{ height: '100%', overflowY: 'auto' }}
                    gap={0}
                    vertical={true}
                    children={[
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
                    ]}
                />
            </Flex>
        </Col>
        <Col span={12}>
            <div style={{ position: 'sticky', top: 0, background: 'white', padding: '16px' }}>
                <Flex justify="space-between">
                    <Typography.Title level={2} style={{ margin: 0 }}>Biodata Pasien</Typography.Title>
                    <Flex justify="end" gap={8}>
                        <Button size="large" type="primary">Save</Button>
                        <Button size="large">Reset</Button>
                    </Flex>
                </Flex>
            </div>
            <div style={{ overflowY: 'auto', height: '90%' }}>
                <BiodataForm patient_id={1} />
            </div>
        </Col>
        <Col span={7}>
            <div style={{ position: 'sticky', top: 0, background: 'white', padding: '16px' }}>
                <Flex justify="space-between">
                    <Typography.Title level={2} style={{ margin: 0 }}>Kunjungan</Typography.Title>
                    <Flex justify="end" gap={8}>
                        <Button size="large" type="primary">Save</Button>
                        <Button size="large">Reset</Button>
                    </Flex>
                </Flex>
            </div>
            <div style={{ overflowY: 'auto', height: '90%' }}>
                <MedicRecordForm />
            </div>
        </Col>
    </div>
}

export default App;
