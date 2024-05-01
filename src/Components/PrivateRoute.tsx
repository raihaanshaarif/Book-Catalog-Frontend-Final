import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
  const token = useSelector((state: RootState) => state.auth.token);

  return token ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
