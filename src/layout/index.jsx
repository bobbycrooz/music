// import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar";
import DashboardHeader from "@/components/dashboard-header";
import { NavigationBar } from '../components/navbar-menu';
import Footer from "@/sections/footer";

export default function Layout({ children })
{
	return (
		<div className="w-full h-screen">
			<NavigationBar/>
			{children}
		<Footer/>
		</div>
	);
}
