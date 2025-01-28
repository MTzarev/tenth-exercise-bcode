import {useState, createContext} from 'react'
import MyComponentA from './MyComponentA';
export const UserContext= createContext()
function MyComponent () {
    const [user, setUser] = useState('')
function inputChangeHandler (e){
setUser(e.target.value)
}
    return (
        <UserContext.Provider value={user}>
       <>
       <input type="text" onChange={inputChangeHandler}/>
       <MyComponentA></MyComponentA>
       </>
       </UserContext.Provider>
    );
}
export default  MyComponent;