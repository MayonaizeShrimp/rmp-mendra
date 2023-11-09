import { Button, Col, Row } from 'antd';

function App() {
    return <Row>
        <Col span={4}>
            <Button
                type='primary'
                children="button 1"/>
        </Col>
        <Col span={20}>
            <Button
                type='dashed'
                children="button 2"/>
        </Col>
    </Row>
}

export default App;
