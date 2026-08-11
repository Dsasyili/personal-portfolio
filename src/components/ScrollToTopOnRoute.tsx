import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopOnRoute() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Jangan reset scroll jika URL memiliki hash
        // Contoh: /home#projects
        if (hash) {
            return;
        }

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname, hash]);

    return null;
}
