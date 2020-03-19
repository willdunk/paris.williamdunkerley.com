import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Drawer from "../Drawer";

const Container = (props) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return ([
		(<Button
			key = {0}
			onClick = {() => {setIsDrawerOpen(true)}}
		>
			Hello World
		</Button>),
		(<Drawer 
			key = {1}
			isOpen = {isDrawerOpen}
		/>)
	])
}

export default Container