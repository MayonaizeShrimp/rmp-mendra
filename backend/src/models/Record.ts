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
	declare dxPrimer: string;
	declare hasilLab: string;
	declare patientId: ForeignKey<Patient['id']>;
	declare patient?: NonAttribute<Patient>;
}

Record.init(
	{
		id: {
			type: DataTypes.INTEGER,
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
		dxPrimer: DataTypes.STRING,
		hasilLab: DataTypes.STRING,
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