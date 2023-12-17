import { Row, Col, Flex } from "antd";
import { useEventManager } from "src/hooks/useEventManager";
import { BiodataForm } from "src/partials/biodata-form";
import { MedicRecordForm } from "src/partials/medic-record-form";
import { PatientList } from "src/partials/patient-list";

export const MainPage = () => {

  const em = useEventManager();
  
  return (
    <Row gutter={16} style={{ height: "90vh" }}>
      <Col span={5}>
        <PatientList 
          patients={em.filteredPatients} 
          onSearchPatient={em.handleSearchPatient} 
          onClickAddPatient={em.handleClickAddNewPatient} 
          onClickPatient={em.handleClickPatientCard}/>
      </Col>
      <Col span={12}>
          <BiodataForm patient_id={em.selectedPatientId} />
      </Col>
      <Col span={7}>
        <Flex vertical gap={16} style={{ height: "95vh" }}>
            <MedicRecordForm />
        </Flex>
      </Col>
    </Row>
  );
}