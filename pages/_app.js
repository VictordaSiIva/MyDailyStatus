import React from 'react'
import '../styles/styles.css'
import Header from '../components/Header'

const App = ({Component, pageProps}) => {
    return (
     <div>
           <Header/>
         <Component {...pageProps} />
     </div>
    )
}

export default App