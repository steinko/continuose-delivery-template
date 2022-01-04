import React, {useState,useEffect} from 'react'
import {MessageService} from './MessageService/MessageService'

function App (props) {
	
	 
    return (
              <div>
                 <p>{props.message}</p>   
              </div>
            )
 }

export default  App ;