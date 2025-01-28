import ComponentB from "./ComponentB";
import { useState, createContext } from "react";

export const UserContext = createContext()

function ComponentA () {
    const [user, setUser] = useState("MyCode")
    return (
        <UserContext.Provider value={user}>
        
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
                <ComponentB user={user}></ComponentB>

        </div>
            </UserContext.Provider>
    );
}
export default ComponentA;