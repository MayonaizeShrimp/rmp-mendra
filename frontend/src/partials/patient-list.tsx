import { Card, Flex } from "antd";
import { CSSProperties } from "react";

const { Meta } = Card;
interface PatientCardProps {
  name: string;
  dob: string;
  uuid: string;
}

const pCSS : CSSProperties = {
    marginBottom: 1
}

const PatientCard = (props: PatientCardProps) => (
  <Card hoverable bodyStyle={{ padding: 12 }}>
    <Meta title={`${props.name}`} />
    <Flex justify="space-between">
      <p style={pCSS}>{props.uuid}</p>
      <p style={pCSS}>{props.dob}</p>
    </Flex>
  </Card>
);

export default PatientCard;
