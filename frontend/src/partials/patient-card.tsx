import { Card, Flex } from "antd";
import dayjs from "dayjs";
import { CSSProperties } from "react";
import { IPatient } from "shared/interfaces";

const { Meta } = Card;

const pCSS : CSSProperties = {
    marginBottom: 0
}

const PatientCard = (props: {patient: IPatient}) => (
  <Card hoverable bodyStyle={{ padding: 12 }}>
    <Meta title={`${props.patient.Nama}`} />
    <Flex justify="space-between">
      <p style={pCSS}>{props.patient.NoPasien}</p>
      <p style={pCSS}>{dayjs(props.patient.TanggalLahir).format("DD MMM YYYY")}</p>
    </Flex>
  </Card>
);

export default PatientCard;
