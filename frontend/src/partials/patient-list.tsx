import { UserAddOutlined } from "@ant-design/icons"
import { Flex, Input, Button } from "antd"
import PatientCard from "./patient-card"
import { useEffect, useState } from "react";
import { IPatient } from "shared/interfaces";
import dayjs from "dayjs";

const DUMMY_PATIENT : IPatient[] = [
];

export const PatientList = () => {
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState(DUMMY_PATIENT);

  useEffect(() => {
    generateDummyPatients(20);
  }, []);

  const generateDummyPatients = (totalPatients: number) => {
    const temp = [];
    for(let i = 1; i <= totalPatients; i++){
      const a : IPatient = {
        key: i,
        id: i,
        Nama: "nama pasien " + i,
        TanggalLahir: dayjs().add(-i, 'days').format("YYYY-MM-DD"),
        KTP: "6416418744698"+i,
        NoPasien: "BPJS-"+i,
        Alamat: "alamat rumah pasien "+ i,
        TipePasienId: i % 4,
        Alergi: "alergi pasien "+i,
        NoHp: "4697464664",
        JenisKelamin: false,
      }
      temp.push(a);
    }
    setPatients(temp);
    setFilteredPatients(temp);
  }

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.length === 0) setFilteredPatients(patients);

    const filteredPatients = patients.filter((patient) => {
      const nameMatches = patient.Nama
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const uuidMatches = patient.NoPasien
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return nameMatches || uuidMatches;
    });
    setFilteredPatients(filteredPatients);
  };

	return( 
    <Flex vertical gap={16} style={{ height: "95vh" }}>
      <Flex gap={8}>
        <Input.Search
          onChange={(event) => handleSearch(event.target.value)}
          onSearch={handleSearch}
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
        {filteredPatients.map(patient => (
            <PatientCard
              key={patient.id}
              patient={patient}
            />
          ))}
      </Flex>
    </Flex>
)}