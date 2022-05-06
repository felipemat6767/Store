import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { Intro } from "../components/Intro";
import { Armor } from "../views/Armor";
import { Bestiary } from "../views/Bestiary"
import { Info } from "../views/Info";
import Login from "../views/Login";
import { Weapons } from "../views/Weapons.js";

export const DashboardRoutes = () => {
    const dispatch = useDispatch();
    const { checking } = useSelector(state => state.auth)
    useEffect(() => {

        dispatch(startChecking())

    }, [dispatch])

    if (checking) {
        return (
            <h5>Loading ... </h5>
        )
    }
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path="weapons" element={<Weapons />} />
                    <Route path="login" element={<Login />} />
                    <Route path="bestiary" element={<Bestiary />} />
                    <Route exact path="/info/:Hello" element={<Info />} />
                    <Route path="armor" element={<Armor />} />
                    <Route path="/" element={<Intro />} />
                </Routes>
            </div>
        </>
    )
}
