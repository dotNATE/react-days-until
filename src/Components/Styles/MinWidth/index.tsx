import React from "react";

type StyleMinWidthProps = {
    children: React.ReactNode,
    num: number,
    unit: string
}

const StyleMinWidth = ({ children, num, unit }: StyleMinWidthProps): JSX.Element => (
    <div style={{ minWidth: (num + unit) }}>
        { children }
    </div>
)

export default StyleMinWidth