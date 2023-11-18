import { Button, Card, Col, Flex, Input, Row } from 'antd';
import { SampleTable } from './partials/sample-table';
import { UserAddOutlined } from "@ant-design/icons"
import Meta from 'antd/es/card/Meta';

const PatientCard = (props: {name: string, dob: string, uuid: string}) => <Card hoverable>
    
    <Meta 
        title={`${props.name} - ${props.dob}`}
        description={props.uuid}/>
</Card>

function App() {
    return <Row gutter={16}>
        <Col span={5}>
            <Flex vertical style={{height: "100vh"}}>
                <Flex gap={8}>
                    <Input.Search type='text' placeholder='Cari Pasien' size='large' allowClear/>
                    <Button type='primary' size='large'><UserAddOutlined/> Pasien Baru</Button>
                </Flex><br/>
                <Flex  
                    style={{height: "100%"}}
                    gap={4}
                    vertical={true}
                    children={[
                        <PatientCard name={'Budi Budi Budi Budi'} dob={'2023-08-08'} uuid={'s'}/>,
                        <PatientCard name={'Charlie Charlie Charlie Charlie Charlie Charlie'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Dimas Uwu'} dob={'asdf'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                        <PatientCard name={'Emil'} dob={'2023-08-08'} uuid={'asdfsadf'}/>,
                    ]}/>
            </Flex>
        </Col>
        <Col span={14}>
            <SampleTable/>
        </Col>
        <Col span={5}>
        </Col>
    </Row>
}

export default App;
