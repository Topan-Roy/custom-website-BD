import { Navigate } from "react-router";
import { useAuth } from "../../context/UseAuth";
import Spinner from "../Components/Spinner";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return  <Spinner text="User Loading....." />
    }
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
