import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div className="border-r p-4 flex flex-col gap">
      <SearchInput />
      <hr className="mx-2 my-4"/>
      <Conversations />
      <LogoutButton />
    </div>
  )
}

export default Sidebar