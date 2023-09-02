import React, { useState, FormEvent } from "react";
import { signInWithEmailAndPassword, Auth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "@/lib/firebase";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const auth: Auth = getAuth(app);
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      setErrorMessage("Login gagal. Cek kembali email dan password Anda.");
    }
  };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (error) {
      console.error("Login with Google error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Masuk ke Akun Anda
          </h2>
        </div>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login dengan Google
        </button>
      </div>
    </div>
  );
}
