import { Navigate } from "react-router";
import { auth } from "../fireBase/firebase";

const PrivateRoute = ({ children }) => {
    const user = auth.currentUser;

    if (!user || !user.emailVerified) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
