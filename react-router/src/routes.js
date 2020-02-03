import React from "react"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"

const routes = [
    {
        path: "",
        exact: true,
        main: () => <Home />
    },
    {
        path: "",
        exact: false,
        main: () => <About />
    },
    {
        path: "",
        exact: false,
        main: () => <Contact />
    },
    {
        path: "",
        exact: false,
        main: () => <NotFound />
    }
]

export default routes