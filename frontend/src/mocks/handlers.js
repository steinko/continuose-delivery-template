import { rest } from 'msw'

export const handlers = [
  rest.get(process.env.REACT_APP_BACKEND_URL+"/helloworld" , (reg, res, ctx ) => {
         console.log('mock get')
         console.log(process.env.REACT_APP_BACKEND_URL)
         return res(
           ctx.status(200),
           ctx.json({Message:"Hello World"})    
	)
})
]