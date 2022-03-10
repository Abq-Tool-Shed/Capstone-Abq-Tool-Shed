import React from "react";
import headerStyles from "../../styles/shared/header.module.css"


// export function Header({header}) {
//     return (
//         <h1 className={headerStyles.background}>{header}</h1>
//     )
// }

export function titleBG({bigBackground}) {
    return (
        <div className={headerStyles.bigBackground}><h1>{bigBackground}</h1></div>
    )
}