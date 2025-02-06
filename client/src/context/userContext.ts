import { createContext } from "react";

interface User {
  name: string;
  email: string;
}

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | null>(null);

export default UserContext;
