import React, { useState } from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons";
const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [{
            path: "/dashboard",
            name: "Dashboard",
            icon: < i class = "ri-dashboard-fill" > < /i>,
        },

        {
            path: "/product",
            name: "Products",
            icon: < i class = "ri-shopping-bag-line" > < /i>,
        },
        {
            path: "/category",
            name: "Category",
            icon: < i class = "ri-terminal-window-line" > < /i>,
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: < i class = "ri-bar-chart-box-fill" > < /i>,
        },
        {
            path: "/review",
            name: "CustemorReview",
            icon: < i class = "ri-feedback-fill" > < /i>,
        },
        {
            path: "/shop",
            name: "Products page",
            icon: < i class = "ri-shopping-bag-line" > < /i>,
        },
        {
            path: "/orders",
            name: "Orders Products",
            icon: < i class = "ri-list-unordered" > < /i>,
        },
        {
            path: "/signup",
            name: "Create account",
            icon: < i class = "ri-gps-fill" > < /i>,
        },
        {
            path: "/login",
            name: "login in system",
            icon: < i class = "ri-login-circle-line" > < /i>,
        },
    ];
    return ( <
            div className = "container" >
            <
            div style = {
                { width: isOpen ? "250px" : " 50px" }
            }
            className = "sidebar" >
            <
            div className = "top_section" >
            <
            h1 style = {
                { display: isOpen ? "block" : "none" }
            }
            className = "logo" > { " " }
            Logo { " " } <
            /h1>{" "} <
            div style = {
                { marginLeft: isOpen ? "50px" : "0" }
            }
            className = "bars" >
            <
            FaBars onClick = { toggle }
            />{" "} < /
            div > <
            /div>{" "} {
            menuItem.map((item, index) => ( <
                NavLink to = { item.path }
                key = { index }
                className = "link"
                activeclassName = "active" >
                <
                div className = "icon" > { item.icon } < /div>{" "} <
                div style = {
                    { display: isOpen ? "block" : "none" }
                }
                className = "link_text" > { " " } { item.name } { " " } <
                /div>{" "} < /
                NavLink >
            ))
        } <
        /div>{" "} <
    main > {
        { children }
    } < /main> < /
    div >
);
};

export default Sidebar;