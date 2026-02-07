// pages/LoginPage.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../components/fireBase/firebase"; // firebase.js yo'li
import { Navigate, useNavigate } from "react-router";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            if (!user.emailVerified) {
                await auth.signOut();
                alert("Подтвердите email по ссылке из письма 📩");
                return;
            }

            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        }
    };




    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log("Logged in with Google:", result.user);
                navigate("/dashboard");
            })
            .catch((error) => {
                console.error("Google login error:", error.message);
            });
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-10">
                <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
                    Login to EduZone
                </h2>

                {error && (
                    <div className="text-red-500 text-center mb-4 font-medium">{error}</div>
                )}

                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="********"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-blue-400 transition"
                    >
                        Login
                    </button>
                    <span className="text-[22px] font-bold m-auto  flex justify-center text-center">Or</span>
                    <div>
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full mt-4 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
                        >
                            Sign in with Google
                        </button>
                    </div>
                </form>

                <p className="mt-6 text-center text-gray-500">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-blue-600 font-semibold hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
