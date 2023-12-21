import { Flex, FlexProps } from "antd";

export const VerticalLayout = (props: FlexProps) => {
	return <Flex {...props} vertical gap={16} style={{ height: "95vh" }} />
}