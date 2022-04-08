import { rest } from 'msw'

export const handlers = [
  rest.get(process.env.REACT_APP_BACKEND_URL+"/helloworld" , (reg, res, ctx ) => { // eslint-disable-line
         console.log('mock get')
         console.log(process.env.REACT_APP_BACKEND_URL) // eslint-disable-line
         return res(
           ctx.status(200),
           ctx.json({message:"Hello World"})    
	)
})
]