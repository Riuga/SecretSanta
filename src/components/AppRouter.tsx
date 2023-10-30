import { Route, Routes } from "react-router-dom"
import Auth from "../pages/Auth"
import CreateRoom from "../pages/CreateRoom"
import JoinRoom from "../pages/JoinRoom"
import RoomsList from "../pages/RoomsList"

const AppRouter = () => {
  return(
    <Routes>
      <Route Component={Auth} path="/auth" />
      <Route Component={CreateRoom} path="/create" />
      <Route Component={JoinRoom} path="/join" />
      <Route Component={RoomsList} path="/list" />
    </Routes>
  )
}

export default AppRouter