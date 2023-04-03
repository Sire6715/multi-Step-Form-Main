import "@fontsource/ubuntu"
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const container = document.getElementById("root")!;
const root = createRoot(container);

const colors = {
	brand: {
		900: "#1a365d",
		800: "#153e75",
		700: "#2a69ac",
	},
};

const fonts ={
		heading: 'Ubuntu',
		body: 'Ubuntu',
	}

const theme = extendTheme({ colors, fonts });

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</Provider>
	</React.StrictMode>
);

