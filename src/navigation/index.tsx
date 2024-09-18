import { useAppSelector } from "~store/hooks"
import BottomTabs from "./BottomTabs"
import AuthStack from "./stacks/AuthStack"

const Navigation = () => {
  const {user} = useAppSelector(s => s.auth);

  return user ? <BottomTabs /> : <AuthStack />;
};

export default Navigation;