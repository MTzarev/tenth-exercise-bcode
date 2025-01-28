import { useContext } from "react";
import { UserContext } from "./MyComponent";
import MyComponentE from "./MyComponentE"
function MyComponentD () {
    const name = useContext(UserContext)
    return (
        <>
        <div className="box">
                <h1>MyComponent D</h1>
                <h2>{`Hello: ${name}`}</h2>
                <MyComponentE/>
        
            </div>
            </>
    );
}
export default  MyComponentD;