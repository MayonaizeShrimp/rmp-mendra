import { CreationOptional, DataTypes, ForeignKey, Model, NonAttribute, Optional } from "sequelize";
import { IRecord } from "../../../shared/interfaces";
import { sequelize } from ".";
import { Patient } from "./Patient";

type RecordCreationAttributes = Optional<IRecord, 'id'>

export class Record extends Model<IRecord, RecordCreationAttributes> {
	declare id: CreationOptional<number>;
	declare tanggal: string;
	declare tinggiBadan: number;
	declare beratBadan: number;
	declare lingkarPerut: number;
	declare sistole: number;
	declare diastole: number;
	declare keluhan: string;
	declare icd10: string;
	declare dxPrimer: string;
	declare terapi: string;
	declare hasilLab: string;
	declare tindakanMedis: string
	declare rujukan: string
	declare respirasi: string
	declare denyutNadi: string
	declare suhuBadan: number
	declare note: string
	declare patientId: ForeignKey<Patient['id']>;
	declare patient?: NonAttribute<Patient>;
}

Record.init(
	{
		id: {
			type: DataTypes.BIGINT,
			autoIncrement: true,
			primaryKey: true,
		},
		tanggal: DataTypes.INTEGER,
		tinggiBadan: DataTypes.INTEGER,
		beratBadan: DataTypes.INTEGER,
		lingkarPerut: DataTypes.INTEGER,
		sistole: DataTypes.INTEGER,
		diastole: DataTypes.INTEGER,
		keluhan: DataTypes.STRING,
		icd10: DataTypes.STRING,
		dxPrimer: DataTypes.STRING,
		terapi: DataTypes.STRING,
		hasilLab: DataTypes.STRING,
		tindakanMedis: DataTypes.STRING,
		rujukan: DataTypes.STRING,
		respirasi: DataTypes.STRING,
		denyutNadi: DataTypes.STRING,
		suhuBadan: DataTypes.INTEGER,
		note: DataTypes.STRING,
		patientId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: "records",
		sequelize,
	}
)

Record.belongsTo(Patient, {
	foreignKey: "patientId"
})
Patient.hasMany(Record)