import { useContext } from "react";
import { UserContext } from "./MyComponent";
import MyComponentB from "./MyComponentB"
function MyComponentA () {
    const user = useContext(UserContext)
    return (
        <div className="box">
        <h1>MyComponent A</h1>
        <h2>{`Hello: ${user}`}</h2>
         <MyComponentB />

    </div>
    );
}
export default  MyComponentA