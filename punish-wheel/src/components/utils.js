import { useEffect } from "react";

export default function Utils({ setSpins }) {
  useEffect(() => {
    const fetchSpins = async () => {
      const response = await fetch("/api/spins");
      const json = await response.json();

      if (response.ok) {
        setSpins(json);
      }
    };
    fetchSpins();
  }, []);
}
