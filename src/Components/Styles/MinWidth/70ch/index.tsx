import React from "react";

type StyleMinWidth70chProps = {
    children: React.ReactNode
}

const StyleMinWidth70ch = ({ children }: StyleMinWidth70chProps): JSX.Element => (
    <div style={{ minWidth: '70ch' }}>
        { children }
    </div>
)

export default StyleMinWidth70ch