import MainRoute from "./routes/MainRoute"
import { UserProvider } from "./context/UserContext"

const App = () => {
  return (
    <UserProvider>
    < MainRoute />
    </UserProvider>
  )
}

export default App