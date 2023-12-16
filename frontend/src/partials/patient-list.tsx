import { UserAddOutlined } from "@ant-design/icons"
import { Flex, Input, Button, Card } from "antd"
import { useState } from "react";
import { IPatient } from "shared/interfaces";
import dayjs from "dayjs";

const { Meta } = Card;

interface PatientCardProps {
  name: string;
  dob: string;
  uuid: string;
}

const PatientCard = (props: PatientCardProps) => (
  <Card hoverable bodyStyle={{ padding: 12 }}>
    <Meta title={`${props.name}`} />
    <Flex justify="space-between">
      <p style={{marginBottom: 0}}>{props.uuid}</p>
      <p style={{marginBottom: 0}}>{dayjs(props.dob).format("D MMM YYYY")}</p>
    </Flex>
  </Card>
);

export const PatientList = (props : {patients : IPatient[]}) => {
	const [searchQuery, setSearchQuery] = useState("");
  const [filteredPatients, setFilteredPatients] = useState<IPatient[]>(props.patients);

  const handleSearchInputChange = (event: string) => {
    setSearchQuery(event);
    filterPatients(event); // comment this line to test search bar onSearch function only
  };

  const filterPatients = (query: string) => {
    const filteredPatients = props.patients.filter((patient) => {
      const nameMatches = patient.nama
        .toLowerCase()
        .includes(query.toLowerCase());
      const uuidMatches = patient.noPasien
        .toLowerCase()
        .includes(query.toLowerCase());
      return nameMatches || uuidMatches;
    });
    setFilteredPatients(filteredPatients);
  };

  const handleSearch = () => {
    filterPatients(searchQuery);
  };

	return <Flex vertical gap={16} style={{ height: "95vh" }}>
          <Flex gap={8}>
            <Input.Search
              onChange={(event) => handleSearchInputChange(event.target.value)}
              onSearch={handleSearch}
              value={searchQuery}
              type="text"
              placeholder="Cari Pasien"
              size="large"
              allowClear
            />
            <Button type="primary" size="large">
              <UserAddOutlined />
            </Button>
          </Flex>
          <Flex className="scrollToHeight" gap={8} vertical>
            {filteredPatients.map((patient, index) => (
              <PatientCard
                key={index}
                name={patient.nama}
                dob={patient.tanggalLahir}
                uuid={patient.noPasien}
              />
            ))}
          </Flex>
        </Flex>
}
