import { Row, Col, Flex } from "antd";
import { useState } from "react";
import { usePatientsModel } from "src/hooks/usePatientsModel";
import { BiodataForm } from "src/partials/biodata-form";
import { MedicRecordForm } from "src/partials/medic-record-form";
import { PatientList } from "src/partials/patient-list";

export const MainPage = () => {
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