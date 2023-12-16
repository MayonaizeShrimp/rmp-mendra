import { useState } from "react";
import { Col, Flex, Row } from "antd";
import { BiodataForm } from "./partials/biodata-form";
import { MedicRecordForm } from "./partials/medic-record-form";
import "./style.css";
import { PatientList } from "./partials/patient-list";
import { usePatientsModel } from "./hooks/usePatientsModel";

function App() {
  const [selectedPatientId, setSelectedPatientId] = useState<number>(1);

  const patientsModel = usePatientsModel();
  
  return (
    <Row gutter={16} style={{ height: "90vh" }}>
      <Col span={5}>
        <PatientList patients={patientsModel.patients}/>
      </Col>
      <Col span={12}>
        <BiodataForm patient_id={selectedPatientId} />
      </Col>
      <Col span={7}>
        <Flex vertical gap={16} style={{ height: "95vh" }}>
            <MedicRecordForm />
        </Flex>
      </Col>
    </Row>
  );
}

export default App;