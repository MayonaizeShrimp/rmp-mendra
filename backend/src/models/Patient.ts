import { CreationOptional, DataTypes, ForeignKey, Model, NonAttribute, Optional } from "sequelize";
import { EGender, IPatient } from "../../../shared/interfaces";
import { PatientType } from "./PatientType";
import { sequelize } from ".";

type PatientCreationAttributes = Optional<IPatient, 'id'>

export class Patient extends Model<IPatient, PatientCreationAttributes> {
	declare id: CreationOptional<number>;
	declare nama: string;
	declare tanggalLahir: string;
	declare ktp: string;
	declare noPasien: string;
	declare alamat: string;
	declare alergi: string;
	declare hp: string;
	declare gender: EGender;
	declare patientTypeId: ForeignKey<PatientType['id']>;
	declare patientType?: NonAttribute<PatientType>;
}

Patient.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		nama: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		tanggalLahir: DataTypes.DATE,
		ktp: DataTypes.STRING,
		noPasien: {
			type: DataTypes.STRING,
			unique: true,
		},
		alamat: DataTypes.STRING,
		alergi: DataTypes.STRING,
		hp: DataTypes.STRING,
		gender: DataTypes.BOOLEAN,
		patientTypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: "patients",
		sequelize,
	}
)

Patient.belongsTo(PatientType, {
	foreignKey: "patientTypeId"
})
// Patient.hasMany(Record, {
// 	foreignKey: "patientId"
// })