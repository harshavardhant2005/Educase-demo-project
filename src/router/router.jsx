import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";



let Myroutes = createBrowserRouter([{
   path:"/",
   element:<Home/>,
   children:[{
    path:"/",
    element:<Home />
    },
	 {
    path:"login",
	element:<Login/>
    },
	{
	path:"register",
	element:<Register/>
	},
	{
	path:"reset-password",
	element:<ResetPassword/>
	}]
	// default config done 
}])