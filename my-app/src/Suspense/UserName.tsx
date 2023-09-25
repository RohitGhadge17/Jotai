import { useAtom } from "jotai";
import { userAtom } from "./Controls";

const UserName = () => {
    const [user] = useAtom(userAtom)
    return <div>User name: {user.name}</div>
  }

  export default UserName;