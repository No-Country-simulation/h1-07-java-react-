import { NextUIProvider } from "@nextui-org/react"
import AppRouter from "./routers/AppRouter"


function App() {
  return (
    <NextUIProvider>
      <AppRouter />
    </NextUIProvider>
  )
}

export default App
