import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"

export default function Layout({
  theme,
  setTheme,
  page,
  setPage,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="h-screen overflow-hidden bg-transparent">
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        page={page}
        setPage={setPage}
      />

      <div className="flex h-screen flex-col md:ml-[17rem]">
        <Header
          setIsOpen={setIsOpen}
          theme={theme}
          setTheme={setTheme}
          title={page}
        />

        <main className="flex-1 overflow-y-auto px-4 pb-8 pt-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="surface p-4 sm:p-6">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}
