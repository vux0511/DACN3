import { createContext, useState } from "react";

export const Context = createContext();

function AppContext({ children }) {
    return <Context.Provider>{children}</Context.Provider>;
}

export default AppContext;
