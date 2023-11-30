import React, { useState } from "react";
import { Button, Col, Flex, Input, Row, Typography } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { BiodataForm } from "./partials/biodata-form";
import { MedicRecordForm } from "./partials/medic-record-form";
import PatientCard from "./partials/patient-card";
import { CSSProperties } from "react";
import "./style.css";

const implementCSSScroll: CSSProperties = {
  overflowY: "auto", //allow component to overflow
  width: "100%",
};

const DUMMY_PATIENT = [
  { name: "Budi Budi Budi Budi", dob: "asdf", uuid: "asdfsadf" },
  { name: "Dimas", dob: "asdf", uuid: "asdfsadf" },
  {
    name: "Charlie Charlie Charlie Charlie Charlie Charlie",
    dob: "asdf",
    uuid: "asdfsadf",
  },
  { name: "Emil", dob: "2023-08-08", uuid: "asdfsadf" },
  { name: "Emil Uwu", dob: "asdf", uuid: "asdfsadf" },
  { name: "Emil Uwu", dob: "asdf", uuid: "asdfsadf" },
  { name: "Emil Uwu", dob: "asdf", uuid: "asdfsadf" },
  { name: "Emil Uwu", dob: "asdf", uuid: "asdfsadf" },
  { name: "Emil Uwu", dob: "asdf", uuid: "asdfsadf" },
  { name: "Emil Uwu", dob: "asdf", uuid: "asdfsadf" },
  { name: "Emil Uwu", dob: "asdf", uuid: "asdfsadf" },
  { name: "Emil Uwu", dob: "asdf", uuid: "asdfsadf" },
  { name: "Emil Uwu", dob: "asdf", uuid: "asdfsadf" },
  { name: "Emil Uwu", dob: "asdf", uuid: "asdfsadf" },
  { name: "Emil Uwu", dob: "asdf", uuid: "asdfsadf" },
  { name: "Emil Uwu", dob: "asdf", uuid: "asdfsadf" },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPatients, setFilteredPatients] = useState(DUMMY_PATIENT);

  const handleSearchInputChange = (event: string) => {
    setSearchQuery(event);
    filterPatients(event); // comment this line to test search bar onSearch function only
  };

  const filterPatients = (query: string) => {
    const filteredPatients = DUMMY_PATIENT.filter((patient) => {
      const nameMatches = patient.name
        .toLowerCase()
        .includes(query.toLowerCase());
      const uuidMatches = patient.uuid
        .toLowerCase()
        .includes(query.toLowerCase());
      return nameMatches || uuidMatches;
    });
    setFilteredPatients(filteredPatients);
  };

  const handleSearch = () => {
    filterPatients(searchQuery);
  };

  
  return (
    <Row gutter={16} style={{ height: "90vh" }}>
      <Col span={5}>
        <Flex vertical gap={16} style={{ height: "95vh" }}>
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
          <Flex style={implementCSSScroll} gap={8} vertical>
            {filteredPatients.map((patient, index) => (
              <PatientCard
                key={index}
                name={patient.name}
                dob={patient.dob}
                uuid={patient.uuid}
              />
            ))}
          </Flex>
        </Flex>
      </Col>
      <Col span={12}>
        <Flex vertical gap={16} style={{ height: "95vh" }}>
          <Flex justify="space-between">
            <Typography.Title level={2} style={{ margin: 0 }}>
              Biodata Pasien
            </Typography.Title>
            <Flex justify="end" gap={8}>
              <Button size="large" type="primary">
                Save
              </Button>
              <Button size="large">Reset</Button>
            </Flex>
          </Flex>
          <Flex style={implementCSSScroll} vertical>
            <BiodataForm patient_id={1} />
          </Flex>
        </Flex>
      </Col>
      <Col span={7}>
        <Flex vertical gap={16} style={{ height: "95vh" }}>
          <Flex style={implementCSSScroll}>
            <MedicRecordForm />
          </Flex>
        </Flex>
      </Col>
    </Row>
  );
}

export default App;
