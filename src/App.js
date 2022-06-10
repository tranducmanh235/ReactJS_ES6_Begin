import React, { Fragment } from "react";
import Todos from "./components/Todos";
import Header from "./components/Header";

const App = () => {
    return (
        <Fragment>
            <hr />
            <Header />
            <hr />
            <Todos />
        </Fragment>
    );
};

export default App;
