import { Row, Col, Flex } from "antd";
import { IRecord } from "shared/interfaces";
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
          <BiodataForm
            selected_patient={em.selectedPatient}
            isLoading={em.isBiodataFormLoading}
            onSubmit={em.handleSubmitBiodata}
            onClickNewRecord={em.handleClickAddNewRecord}
            onClickRecord={em.handleClickMedRecord}
             />
      </Col>
      <Col span={7}>
        <Flex vertical gap={16} style={{ height: "95vh" }}>
            <MedicRecordForm 
              selectedRecord={em.selectedRecord} 
              isLoading={false} 
              onSubmit={em.handleSubmitRecord} 
              onCancel={() => {}} />
        </Flex>
      </Col>
    </Row>
  );
}