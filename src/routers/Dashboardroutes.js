import { Routes, Route } from "react-router-dom";
import { Intro } from "../components/Intro";
import { Armor } from "../views/Armor";
import { Bestiary } from "../views/Bestiary"
import { Info } from "../views/Info";
import { Weapons } from "../views/Weapons.js";
export const DashboardRoutes = () => {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path="weapons" element={<Weapons />} />
                    <Route path="bestiary" element={<Bestiary />} />
                    <Route exact path="/info/:Hello" element={<Info />} />
                    <Route path="armor" element={<Armor />} />
                    <Route path="/" element={<Intro />} />
                </Routes>
            </div>
        </>
    )
}
