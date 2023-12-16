import { CreationOptional, DataTypes, ForeignKey, Model, NonAttribute, Optional } from "sequelize";
import { sequelize } from ".";
import { IPatientStatus } from "../../../shared/interfaces";

type PatientTypeCreationAttributes = Optional<IPatientStatus, 'id'>

export class PatientType extends Model<IPatientStatus, PatientTypeCreationAttributes> {
	declare id: CreationOptional<number>;
	declare nama: string;
}

PatientType.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		nama: {
			type: new DataTypes.STRING(100),
			allowNull: false,
		},
	},
	{
		tableName: "patient-types",
		sequelize,
	}
)
