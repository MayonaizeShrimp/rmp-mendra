import { Button, Col, Row } from 'antd';
import { SampleTable } from './partials/sample-table';

function App() {
    return <Row>
        <Col span={4}>
            <Button
                type='primary'
                children="button 1"/>
            <Button
                type='default'
                children="button 2"/>
            <Button
                type='dashed'
                children="button 3"/>
            <Button
                type='text'
                children="button 4"/>
            <Button
                type='link'
                children="button 5"/>
        </Col>
        <Col span={20}>
            <SampleTable/>
        </Col>
    </Row>
}

export default App;
