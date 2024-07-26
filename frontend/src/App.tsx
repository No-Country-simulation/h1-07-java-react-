import AppRouter from "./routers/AppRouter"
import { NextUIProvider } from "@nextui-org/react"

function App() {
  return (
    <NextUIProvider>
      <AppRouter />
    </NextUIProvider>
  )
}

export default App
