import React from "react";

import Table from "../../elements/Table/Table";

import './Aside.css';

const Aside = (props) => {
    return (
        <aside className="aside">
            <h1 className="title-1">Isket Map</h1>
            <hr />
            <Table />
        </aside>
    )
}

export default Aside;