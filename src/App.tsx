import { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./sections/Home";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

import DetailProjects from "./sections/DetailProjects";
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute";


// ========================================
// Scroll To Hash
// ========================================

function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) {
            return;
        }

        const id = location.hash.substring(1);

        let attempts = 0;
        const maxAttempts = 20;

        const scrollToElement = () => {
            const element =
                document.getElementById(id);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

                return;
            }

            // Coba lagi sampai element ditemukan
            if (attempts < maxAttempts) {
                attempts++;

                setTimeout(
                    scrollToElement,
                    100
                );
            }
        };

        // Tunggu React selesai render
        setTimeout(() => {
            scrollToElement();
        }, 100);

        return () => {
            attempts = maxAttempts;
        };

    }, [location.pathname, location.hash]);

    return null;
}


// ========================================
// Main Portfolio
// ========================================

function Portfolio() {
    return (
        <>
            <Navbar />

            <main>
                <Home />
                <About />
                <Resume />
                <Projects />
                <Skills />
                <Contact />
            </main>

            <Footer />

            <ScrollToTop />
        </>
    );
}


// ========================================
// App
// ========================================

function App() {
    return (
        <BrowserRouter>

            <ScrollToHash />

            <ScrollToTopOnRoute />

            <Routes>

                {/* Main Portfolio */}
                <Route
                    path="/"
                    element={<Portfolio />}
                />

                {/* Project Detail */}
                <Route
                    path="/detail-project/:id"
                    element={
                        <>
                            <Navbar />

                            <DetailProjects />

                            <Footer />

                            <ScrollToTop />
                        </>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;