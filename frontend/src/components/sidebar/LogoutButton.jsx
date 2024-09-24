import { LuLogOut } from "react-icons/lu";
import useLogout from "../../hooks/useLogout";
import LoadingSpinner from "../loading/LoadingSpinner";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="pt-2">
      {!loading ? (
        <LuLogOut className="w-6 h-6 cursor-pointer "
          onClick={logout}
        />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  )
}

export default LogoutButton