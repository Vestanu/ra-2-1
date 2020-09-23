import React from "react";

function Toolbar(props) {
    const { filters, selected } = props;
    const onSelectFilter = (event) => {
        props.onSelectFilter(event.target.textContent);
    };

    return <>
        <div className="filter">
            {filters.map(filter => {
                return <div key={filter} onClick={onSelectFilter} className={filter === selected ? "active" : undefined}>{filter}</div>
            })}
        </div>
    </>
}

export default Toolbar;