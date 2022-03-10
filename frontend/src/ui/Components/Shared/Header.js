import React from "react";
import headerStyles from "../../styles/shared/header.module.css"


export function Header({header}) {
    return (
        <h1 className={headerStyles.background}>{header}</h1>
    )
}