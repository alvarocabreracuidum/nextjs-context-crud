import { Navbar } from "../components/Navbar"
import { TaskProvider } from "../context/TasksContext";
import {Toaster} from "../Toaster"
import { Layout } from "../components/Layout"
import "./globals.css"

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <TaskProvider>
                    <Navbar />
                    <Layout>{children}</Layout>
                    <Toaster />
                </TaskProvider>
            </body>
        </html>
    )
}