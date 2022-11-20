import React from "react";
import TopHeader from "./top-header/TopHeader";
import BottomHeader from "./bottom-header/BottomHeader";
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <TopHeader />
            <BottomHeader />
        </div>
    );
}
