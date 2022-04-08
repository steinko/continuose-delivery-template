import React from 'react'
import { useState, useEffect } from "react";

function App () {
	
	const [message, setMessage] = useState('')
	
	useEffect(() => {
            const   getMessage = async () => {
	
                        const url = process.env.REACT_APP_BACKEND_URL + "/helloworld"  // eslint-disable-line
                        console.log(url)
               
                        const response = await fetch(url)
                        console.log(response.status)
                        const text = await response.json()
                        console.log(text)
                        console.log(text.message)
                      
                        setMessage(text.message)

            }
            getMessage()
            .catch(console.error)
     }, [])

    return ( <div>{message}</div>)
 }

export default  App ;
