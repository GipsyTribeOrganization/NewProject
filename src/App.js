import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { Groups } from './components/Groups'
import { Channels } from './components/Channels'
import { Message } from './components/Message'
import { Accounts } from './components/Accounts'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="menu" element={<Menu />}></Route>
        <Route path="menu/groups" element={<Groups />}></Route>
        <Route path="menu/channels" element={<Channels />}></Route>
        <Route path="menu/message" element={<Message />}></Route>
        <Route path="menu/accounts" element={<Accounts />}></Route>
      </Routes>
    </>
  )
}

export default App
