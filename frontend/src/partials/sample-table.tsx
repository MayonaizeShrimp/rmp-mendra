import { Table, TableProps } from "antd";
import { ColumnType } from "antd/es/table";
import { useEffect, useState } from "react";
import { TestData } from "shared/interfaces";
import { TestDataModel } from "src/models/TestData";

export const SampleTable = (props: TableProps<TestData>) => {
	const [testData, setTestData] = useState<TestData[]>([]);

	useEffect(() => {
		TestDataModel.get()
			.then(res => {
				console.log(`${res.length} test data is fetched from backend`);
				setTestData(res);
			})
			.catch(err => {
				console.error(`error when fetching from test backend`, err);
			})
	}, []);

	const columns : ColumnType<TestData>[] = [
		{
			key: "numbering",
			title: "#",
			render: (v, r, index) => index,
		},
		{
			key: "id",
			title: "UUID",
			dataIndex: "id",
		},
		{
			key: "name",
			title: "Name",
			dataIndex: "name",
		},
		{
			key: "manufacturer",
			title: "Manufacturer",
			dataIndex: "manufacturer",
		},
		{
			key: "expiry_date",
			title: "Exp Date",
			dataIndex: "expiry_date",
		}
	]
	
	return <Table
		columns={columns}
		dataSource={testData}/>
}