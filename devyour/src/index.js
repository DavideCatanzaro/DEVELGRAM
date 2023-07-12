import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';
import { Provider as ReduxProvider } from "react-redux"
import store from "./store.js"
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<ReduxProvider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ReduxProvider>
	</>

);


