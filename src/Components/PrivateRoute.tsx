/* eslint-disable @typescript-eslint/no-unused-vars */

import { Navigate, useLocation } from "react-router-dom";

type PrivateRouteProps = {
  element: React.ReactNode;
  // Add any other props if needed
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  element,
  ...rest
}: PrivateRouteProps) => {
  // const user = useAppSelector((state: RootState) => state.auth.user);
  const isAuthenticated = localStorage.getItem("user") !== null;
  console.log(isAuthenticated);

  const location = useLocation();

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to={`/login?redirect=${location.pathname}`} />
  );
};

export default PrivateRoute;
