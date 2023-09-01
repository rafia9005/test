import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth, User } from "firebase/auth";
import app from "@/lib/firebase";

export default function Dashboard() {
  const router = useRouter();
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (!authUser) {
        router.push("/login");
      } else {
        setUser(authUser);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>DASHBOARD</h1>
      {user && <p>Selamat datang, {user.displayName}!</p>}
    </div>
  );
}
