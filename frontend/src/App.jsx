import { useFetch } from "react-async"
import React from 'react'

const Message = () => { 
                const url = process.env.REACT_APP_BACKEND_URL  +"/helloworld" 
                console.log(url)
                const { data, error } = useFetch(url)
                if (error) return error.message
                if (data) return data.text
                return null          
     }

function App () {
    return <Message />
 }

export default  App ;