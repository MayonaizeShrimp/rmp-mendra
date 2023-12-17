import { Flex, FlexProps } from "antd";

export const HeaderLayout = (props: FlexProps) => {
	return <Flex gap={8} justify="space-between" {...props}/>
}