import { UserAddOutlined } from "@ant-design/icons"
import { Flex, Input, Button, Card } from "antd"
import { IPatient } from "shared/interfaces";
import dayjs from "dayjs";
import { ContentLayout } from "src/components/content-layout";
import { HeaderLayout } from "src/components/header-layout";
import { VerticalLayout } from "src/components/vertical-layout";

const { Meta } = Card;

interface PatientCardProps {
  id: number;
  name: string;
  dob: string;
  uuid: string;
  onClick: Function;
}

interface PatientListProps {
  patients: IPatient[],
  onSearchPatient: Function,
  onClickAddPatient: Function,
  onClickPatient: Function,
}

const PatientCard = (props: PatientCardProps) => (
  <Card hoverable bodyStyle={{ padding: 12 }} onClick={() => props.onClick()}>
    <Meta title={`${props.name}`} />
    <Flex justify="space-between">
      <p style={{marginBottom: 0}}>{props.uuid}</p>
      <p style={{marginBottom: 0}}>{dayjs(props.dob).format("D MMM YYYY")}</p>
    </Flex>
  </Card>
);

export const PatientList = (props : PatientListProps) => {
  return <VerticalLayout>
    <HeaderLayout>
      <Input.Search
        onChange={(event) => props.onSearchPatient(event.target.value)}
        onSearch={(val) => props.onSearchPatient(val)}
        type="text"
        placeholder="Cari Pasien"
        size="large"
        allowClear
      />
      <Button type="primary" size="large" onClick={() => props.onClickAddPatient()}>
        <UserAddOutlined />
      </Button>
    </HeaderLayout>
    <ContentLayout>
      {props.patients.map((patient, index) => (
        <PatientCard
          key={patient.id}
          id={patient.id as number}
          name={patient.nama}
          dob={patient.tanggalLahir}
          uuid={patient.noPasien}
          onClick={() => props.onClickPatient(patient.id)}
        />
      ))}
    </ContentLayout>
  </VerticalLayout>
}
