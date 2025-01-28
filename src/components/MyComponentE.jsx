import { UserContext } from "./MyComponent";
import { useContext } from "react";

function MyComponentE () {
    const name = useContext(UserContext)
    return (
        <>
        <div className="box">
                <h1>MyComponent E</h1>
                <h2>{`Hello: ${name}`}</h2>
                
        
            </div>
            </>
    );
}
export default  MyComponentE;