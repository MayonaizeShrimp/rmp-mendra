import { UserAddOutlined } from "@ant-design/icons"
import { Flex, Input, Button } from "antd"
import PatientCard from "./patient-card"
import { useState } from "react";

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
  

export const PatientList = () => {
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
                name={patient.name}
                dob={patient.dob}
                uuid={patient.uuid}
              />
            ))}
          </Flex>
        </Flex>
}