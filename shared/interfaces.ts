export interface TestData {
	key?: number,
	id: number,
	name: string,
	manufacturer: string,
	expiry_date: string,
}

export interface IPatientStatus {
	id: number,
	Nama: string,
}

export interface IPatient {
	Id: number,
	Nama: string,
	TanggalLahir: Date,
	KTP: string,
	NomorPasien: string,
	Alamat: string,
	TipePasienId: number,
	Alergi: string,
	NoHP: string,
	JenisKelamin: boolean,
}

export interface IRecord {
	id: number,
	TinggiBadan: number,
	BeratBadan: number,
	LingkarPerut: number,
	Sistol: number,
	Diastol: number,
	Keluhan: string,
	DxPrimer: string,
	HasilLab: string,
	PatientId: number,
}

export const jenisKelaminEnum = {
	FEMALE: 0,
	MALE: 1,
}