import React from 'react';
import { Card, Flex } from 'antd';

const { Meta } = Card;

interface PatientCardProps {
  name: string;
  dob: string;
  uuid: string;
}

const PatientCard: React.FC<PatientCardProps> = (props) => (
<Card hoverable style={{ padding: '1px', height: '95px' }}>
  <Meta title={`${props.name}`} />
  <Flex justify="space-between">
    <p>{props.uuid}</p>
    <p>{props.dob}</p>
  </Flex>
</Card>
);

export default PatientCard;
