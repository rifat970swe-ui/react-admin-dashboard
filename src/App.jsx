import { useEffect, useState } from "react"
import Layout from "./pages/Dashboard"
import DashboardHome from "./pages/DashboardHome"
import Users from "./pages/Users"
import Analytics from "./pages/Analytics"
import Settings from "./pages/Settings"
import Support from "./pages/Support"
import Logout from "./pages/Logout"

export default function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("dashboard-theme")
    return storedTheme || "light"
  })
  const [page, setPage] = useState("Dashboard")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("dashboard-theme", theme)
  }, [theme])

  const renderPage = () => {
    switch (page) {
      case "Users":
        return <Users />
      case "Analytics":
        return <Analytics />
      case "Settings":
        return <Settings />
      case "Support":
        return <Support />
      case "Logout":
        return <Logout />
      default:
        return <DashboardHome />
    }
  }

  return (
    <Layout
      theme={theme}
      setTheme={setTheme}
      page={page}
      setPage={setPage}
    >
      {renderPage()}
    </Layout>
  )
}
