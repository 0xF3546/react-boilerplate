import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

export default function BaseLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}