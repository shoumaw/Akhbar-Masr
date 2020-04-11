import React , {useEffect, useState} from 'react';
import {SplashAnimation} from '../animations/SplashAnimation'

const WithSplashScreen = (WrappedComponent) => {
    const WithSplashScreenComponent = () => {
      const [loading, setLoading] = useState(true)
      useEffect( () => {   
          try {
              setTimeout(() => {
                  setLoading(false)
          }, 3000)
          } catch (err) {
              console.log(err);
              setLoading(false)
          }},[])

      return (
      <div>
        { loading ? <SplashAnimation/> : <WrappedComponent/> }
      </div>
      )
    }
    return WithSplashScreenComponent
}

export default WithSplashScreen;