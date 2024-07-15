"use client"

import { MedusaProvider } from "medusa-react"
import Return from "./return"
import { QueryClient } from "@tanstack/react-query"
import React from "react"

const queryClient = new QueryClient()

const App = () => {
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl="http://localhost:9000"
    >
      <Return />
    </MedusaProvider>
  )
}

export default App
