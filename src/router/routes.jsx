import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home"
import Login from "../Pages/login";
import CreateAccount from "../Pages/CreateAccount"
import AccountSetings from "../Pages/AccountSetings";
let Myroutes = createBrowserRouter([{
    path:"/",
    element:<Home/>
    },
    {
        path:"login",
        element:<Login/>
    }
    ,{
        path:"createaccount",
        element:<CreateAccount/>
    }
    ,{
        path:"accountsettings",
        element:<AccountSetings/>
    }
])

export default Myroutes