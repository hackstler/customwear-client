import React from "react"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow min-h-[calc(100vh-200px)] md:min-h-[calc(100vh-400px)]">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
