import React, {useState, useEffect} from 'react';
import { AuthContext, fetchUser } from '../lib/auth';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(undefined);
  const [lock, setLock] = useState(true);
  const [reload, setReload] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(!user){
      setIsLoading(true);
      fetchUser().then((res) => {
        setUser(res.data)
        setIsLoading(false);
      })
    }
  }, [reload]);

  return (
    <AuthContext.Provider value={{user: user, isLoading: isLoading}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;