import { Flex, FlexProps } from "antd";

export const ContentLayout = (props: FlexProps) => {
	return <Flex {...props} vertical className="scrollToHeight" gap={8}/>
}