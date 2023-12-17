import { UserAddOutlined } from "@ant-design/icons"
import { Flex, Input, Button, Card } from "antd"
import { useState } from "react";
import { IPatient } from "shared/interfaces";
import dayjs from "dayjs";

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
  onClick: Function,
}

const PatientCard = (props: PatientCardProps) => (
  <Card hoverable bodyStyle={{ padding: 12 }} onClick={() => props.onClick(props.id)}>
    <Meta title={`${props.name}`} />
    <Flex justify="space-between">
      <p style={{marginBottom: 0}}>{props.uuid}</p>
      <p style={{marginBottom: 0}}>{dayjs(props.dob).format("D MMM YYYY")}</p>
    </Flex>
  </Card>
);

export const PatientList = (props : PatientListProps) => {
	return <>{props.patients.map((patient, index) => (
              <PatientCard
                key={patient.id}
                id={patient.id as number}
                name={patient.nama}
                dob={patient.tanggalLahir}
                uuid={patient.noPasien}
                onClick={props.onClick}
              />
            ))}</>
}
