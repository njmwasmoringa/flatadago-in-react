import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

export default function Layout(){
    return <>
        <Header />
        <Outlet />

        <footer>
            &copy; 2024
        </footer>
    </>
}