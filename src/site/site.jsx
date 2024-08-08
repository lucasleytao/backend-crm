import React from "react";
import Menu from "./components/menu";
import Banner from "./components/banner";
import Features from "./components/features";
import Comments from "./components/comments";
import Pricing from "./components/pricing";
import Footer from "./components/footer";

function Site() { //elemento Site com parametro props
    return <>
        <Menu />
        <Banner />
        <Features />
        <Comments />
        <Pricing />
        <Footer />
    </>
}

export default Site;