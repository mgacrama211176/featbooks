"use client";
import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie } from "@/app/utils/cookies";

const IDLE_TIMEOUT = 15 * 60 * 1000; // 15 minutes in milliseconds

const Idler = () => {
  const router = useRouter();
  let idleTimer: NodeJS.Timeout;

  const resetTimer = useCallback(() => {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      // Perform logout actions here
      localStorage.clear();
      deleteCookie("Token");
      router.push("/auth/login");
    }, IDLE_TIMEOUT);
  }, [router]);

  useEffect(() => {
    // Events to monitor for user activity
    const events = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
    ];

    // Initialize timer
    resetTimer();

    // Add event listeners
    events.forEach((event) => {
      document.addEventListener(event, resetTimer);
    });

    // Cleanup
    return () => {
      clearTimeout(idleTimer);
      events.forEach((event) => {
        document.removeEventListener(event, resetTimer);
      });
    };
  }, [resetTimer]);

  return null;
};

export default Idler;
