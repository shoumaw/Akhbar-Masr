import React, { useState, useEffect, useContext, createContext } from "react";
import {signinApi, redirectApi} from '../../services/authenticationApi'
import { useLocalStorage } from "../hooks/useLocalStorage";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
    const [user, setUser] = useLocalStorage(
        'user'
        );
    //const [user, setUser] = useState(loggedUser);
    
    // Wrap any Firebase methods we want to use making sure ...
    // ... to save the user to state.
    const signin = async () => {
        const user = await signinApi()
        console.log("useAuth", user)
        setUser(user)
        return user
    };

    const redirectToReddit = () => {
         redirectApi()
    }

    
    // Return the user object and auth methods
    return {
        user,
        signin,
        redirectToReddit
    };
}