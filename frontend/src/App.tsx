import DeviceDetection from "./pages/DeviceDetection/DeviceDetection"
import AppRouter from "./routers/AppRouter"
import { NextUIProvider } from "@nextui-org/react"

function App() {
  return (
    <NextUIProvider>
      <DeviceDetection >
        <AppRouter />
      </DeviceDetection>
    </NextUIProvider>
  )
}

export default App
