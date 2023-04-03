import React from "react";
import { Form } from "./components/Form";
import Sidebar from "./components/Sidebar";
import { Grid } from "@chakra-ui/react";
import Plan from "./components/Plan";
import { Addons } from "./components/Addons";
import Summary from "./components/Summary";
import Final from "./components/Final";


function App() {
	return (
		<>
			<Grid gridTemplateColumns="1fr 3fr" h="100vh" padding={3}>
				<Sidebar />
				{/* <Form /> */}
				{/* <Plan /> */}
				{/* <Addons /> */}
				{/* <Summary /> */}
				<Final />
		</Grid>
		</>
	);
}

export default App;
