import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/login");
      return;
    }
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, { headers: { Authorization: token } })
      .then((res) => setUser(res.data))
      .catch(() => router.push("/auth/login"));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user?.name || "Loading..."}</h1>
    </div>
  );
}