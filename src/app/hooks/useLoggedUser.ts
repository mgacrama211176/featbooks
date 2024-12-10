import { useEffect } from "react";
import { useUserStore } from "../state/useUserStore";
import { useRouter, usePathname } from "next/navigation";

const useLoggedUser = () => {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (!user) {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        if (Object.keys(storedUser).length > 0) {
          setUser(storedUser);
        } else {
          router.push("/auth/login");
        }
      } catch (error) {
        console.log(error);
        router.push("/auth/login");
      }
    }
  }, [user, setUser, router]);

  return user;
};

export default useLoggedUser;
