import { useContext } from "react";
import { UserContext } from "./MyComponent";
import MyComponentC from './MyComponentC'
function MyComponentB () {
    const user = useContext(UserContext)
    return (
       <>        
       <div className="box">
        <h1>MyComponent B</h1>
        <h2>{`Hello: ${user}`}</h2>
        <MyComponentC/>

    </div>
    </>

    );
}
export default  MyComponentB;