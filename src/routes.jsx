import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import Authpage from '@/pages/auth';
// import Dashboard from "@/pages/Dashboard";
import Root from '@/pages'
import About from "@/pages/about";
const router = createBrowserRouter(
	createRoutesFromElements(
		[
			<Route path="/" element={<Root />} />,
			<Route path="/about" element={<About />} />,
			// <Route path="/dashboard" element={<Dashboard />}>,
			// 	<Route index path="/dashboard/overview" element={<Overview />} />
			// 	<Route path="/dashboard/order" element={<Po />} />
			// 	<Route path="/dashboard/order/create" element={<CreatePO />} />
			// 	<Route path="/dashboard/invoice" element={<Invoice />} />
			// 	<Route path="/dashboard/invoice/create" element={<CreateInvoice />} />
			// 	<Route path="/dashboard/finance" element={<PayInvoice />} />
			// 	<Route path="/dashboard/finance/create/:id?" element={<PayAnInvoice />} />
			// 	<Route path="/dashboard/validate" element={<ValidateReceiptPage />} />
			// 	<Route path="/dashboard/validate/create/:id?" element={<ValidateReceipt />} />
			// </Route>
		]

	)
)



export default router