import { Row, Col } from "antd";
import { useEventManager } from "src/hooks/useEventManager";
import { BiodataForm } from "src/partials/biodata-form";
import { MedicRecordForm } from "src/partials/medic-record-form";
import { PatientList } from "src/partials/patient-list";

export const MainPage = () => {
  const em = useEventManager();
  
  return (
    <Row gutter={16} style={{ height: "90vh" }}>
      <Col span={em.inputMode === "patient" ?  5 : 0}>
        <PatientList 
          patients={em.filteredPatients} 
          onSearchPatient={em.handleSearchPatient} 
          onClickAddPatient={em.handleClickAddNewPatient} 
          onClickPatient={em.handleClickPatientCard}/>
      </Col>
      <Col span={em.inputMode === "patient" ? 19 : 17}>
        <BiodataForm
          selected_patient={em.selectedPatient}
          isLoading={em.isBiodataFormLoading}
          onSubmit={em.handleSubmitBiodata}
          onClickNewRecord={em.handleClickAddNewRecord}
          onClickRecord={em.handleClickMedRecord}
          handleCheckNoPasienUnique={em.handleCheckNoPasienUnique}
          />
      </Col>
      <Col span={em.inputMode === "record" ? 7 : 0}>
        <MedicRecordForm 
          selectedRecord={em.selectedRecord} 
          isLoading={false} 
          onSubmit={em.handleSubmitRecord} 
          onCancel={em.handleCloseRecord} />
      </Col>
    </Row>
  );
}