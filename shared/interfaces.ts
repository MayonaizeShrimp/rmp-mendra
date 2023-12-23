export interface TestData {
	key?: number,
	id: number,
	name: string,
	manufacturer: string,
	expiry_date: string,
}

export interface IPatientStatus {
	id: number,
	nama: string,
}

export interface IPatient {
	id?: number,
	nama: string,
	tanggalLahir: string,
	ktp: string,
	noPasien: string,
	alamat: string,
	patientTypeId: number,
	alergi: string,
	hp: string,
	gender: boolean,
	Records?: IRecord[],
}

export interface IRecord {
	id?: number,
	tanggal: string,
	tinggiBadan: number,
	beratBadan: number,
	lingkarPerut: number,
	sistole: number,
	diastole: number,
	keluhan: string,
	icd10: string,
	dxPrimer: string,
	terapi: string,
	hasilLab: string,
	patientId: number,
}

export enum EGender {
	FEMALE=0,
	MALE=1,
}

export interface IGender {
	FEMALE: 0,
	MALE: 1,
}