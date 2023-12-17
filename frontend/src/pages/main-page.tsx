import { UserAddOutlined } from "@ant-design/icons";
import { Row, Col, Flex, Button, Input } from "antd";
import { ContentLayout } from "src/components/content-layout";
import { HeaderLayout } from "src/components/header-layout";
import { VerticalLayout } from "src/components/vertical-layout";
import { useEventManager } from "src/hooks/useEventManager";
import { BiodataForm } from "src/partials/biodata-form";
import { MedicRecordForm } from "src/partials/medic-record-form";
import { PatientList } from "src/partials/patient-list";

export const MainPage = () => {

  const em = useEventManager();
  
  return (
    <Row gutter={16} style={{ height: "90vh" }}>
      <Col span={5}>
        <VerticalLayout>
          <HeaderLayout>
            <Input.Search
              onChange={(event) => em.handleSearchPatient(event.target.value)}
              onSearch={em.handleSearchPatient}
              type="text"
              placeholder="Cari Pasien"
              size="large"
              allowClear
            />
            <Button type="primary" size="large">
              <UserAddOutlined />
            </Button>
          </HeaderLayout>
          <ContentLayout>
            <PatientList patients={em.filteredPatients} onClick={em.handleClickPatientCard}/>
          </ContentLayout>
        </VerticalLayout>
      </Col>
      <Col span={12}>
        <BiodataForm patient_id={1} />
      </Col>
      <Col span={7}>
        <Flex vertical gap={16} style={{ height: "95vh" }}>
            <MedicRecordForm />
        </Flex>
      </Col>
    </Row>
  );
}