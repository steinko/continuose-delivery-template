import React from 'react'
import App from './App' 
import {render,screen} from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'



it('should display hello world',  async () => {
	
	 const url = process.env.REACT_APP_BACKEND_URL  +"/helloworld" 
     console.log(url)

	 const server = setupServer(
                                 rest.get(url,  (req, res, ctx) =>  {
	                                                                   
	                                                                   return res(
		                                                                             ctx.status(200),
                                                                                     ctx.json({message:"Hello World"})   
                                                                                  )         
                                                                     }
                          )
                    )

     server.listen()
     console.log("server listen")
     render(<App />);
     const linkElement = await screen.findByText('Hello World')
     expect(linkElement).toBeInTheDocument()

     server.close()
 })