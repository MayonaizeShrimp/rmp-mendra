import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('rmp_mendra', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql',
	dialectModule: require('mysql2')
})

export const connectToDB = async () : Promise<void> => {
	try {
		await sequelize.authenticate();
		console.log('Connection to the database has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

export const asdf : string = "TESTING UTPUT";

// const createSuccessResponse = (data: any) : DataResponse<any> => {
// 	return {
// 		isError: false,
// 		message: "",
// 		data: data,
// 	}
// }
// const createErrorResponse = (error: any) : DataResponse<any> => {
// 	return {
// 		isError: true,
// 		message: error,
// 		data: null,
// 	}
// }

// export { sequelize, connectToDB, asdf };
