import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import router from "./routes";

import "./style/index.css";
import App from "./App";
// import { Authpage } from './pages/auth';

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Authpage />,
// 		//   loader: rootLoader,
// 		//   children: [
// 		//     {
// 		// 	path: "team",
// 		// 	element: <Team />,
// 		// 	// loader: teamLoader,
// 		//     },
// 		//   ],
// 	},
// ]);

// <RouterProvider router={router} />
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
