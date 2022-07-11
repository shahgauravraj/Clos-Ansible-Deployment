import React from "react";
import ListCard from "../listCard/ListCard";
import "./listTableView.css";

function ListTableView() {
    return (
        <div className="container">
            <div className="containerWrapper">
                <div>
                    <ListCard />
                </div>
                <div>
                    <ListCard />
                </div>
                <div>
                    <ListCard />
                </div>
                <div>
                    <ListCard />
                </div>
            </div>
        </div>
    );
}

export default ListTableView;