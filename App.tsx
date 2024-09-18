import { useRTL } from "~hooks"
import Root from "./src/Root"

const App = () => {
  useRTL();
  return <Root />
}

export default App