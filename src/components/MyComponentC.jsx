import { UserContext } from "./MyComponent";
import { useContext } from "react";
import MyComponentD from "./MyComponentD";
function MyComponentC () {
    const name = useContext(UserContext)
    return (
         <>        
               <div className="box">
                <h1>MyComponent C</h1>
                <h2>{`Hello: ${name}`}</h2>
                <MyComponentD/>
        
            </div>
            </>
    );
}
export default  MyComponentC;