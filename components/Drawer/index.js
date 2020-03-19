import React from "react";
import Drawer from "@material-ui/core/Drawer";

const DrawerWD = (props) => {
	const {isOpen} = props;
	return (
		<Drawer
			open={isOpen}
		>
			<span>Hello</span>
			<span>World!</span>
		</Drawer>
	)
}

export default DrawerWD