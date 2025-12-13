import { useState } from "react"
import { AuthContext } from "./AuthContext"
import api from "../src/services/api"

const AuthProvider = ({ children }) => {
    // this is for state 
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // this is for register user 
    const register = async (email, password, name, role) => {
        setLoading(true)
        // this is for user register pyload
        const payload = {
            email,
            password,
            name,
            role
        }
        await api.post("/auth/register", payload)
            .then((response) => {
                setUser(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }

    // this is for verify user
    const verifyUser = async (email, code) => {
        await api.post("/auth/verify-account", {
            email,
            code
        })
            .then(() => {
                setLoading(false)
            }).catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }
    // this is for signin user
    const signin = async (email, password) => {
        await api.post("/auth/login", {
            email,
            password
        })
            .then((res) => {
                setUser(res.data)
                setLoading(false)
            }).catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }
    // this is for refresh token 
    const refreshToken = async (refreshToken) => {
        await api.post("/auth/refresh-tokens", {
            refreshToken
        })
            .then(() => {
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }
    // this is for forget password
    const forgetPassword = async (email) => {
        await api.post("/auth/forget-password", {
            email
        })
            .then((res) => {
                setLoading(false)
            }).catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }
    // this is for reset password 
    const resetPassword = async (email, otp, password) => {
        await api.post("/auth/reset-password", {
            email,
            otp,
            password
        }
        )
            .then(() => {
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }
    // this is for change password 
    const changePassword = async (oldPassword, newPassword) => {
        await api.post("/auth/change-password", {
            oldPassword,
            newPassword
        })
    }
    // this is for logout user 
    const logOut = async () => {
        await api.post("/auth/logout")
            .then(() => {
                setUser(null)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    // this is for delete user 
    const deleteUser = async () => {
        await api.delete("/auth/delete-me")
            .then(() => {
                setUser(null)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const authContextValue = {
        register,
        verifyUser,
        signin,
        refreshToken,
        forgetPassword,
        resetPassword,
        changePassword,
        logOut,
        user,
        loading,
        deleteUser
    }
    return (
        <div>
            <AuthContext.Provider value={authContextValue}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
