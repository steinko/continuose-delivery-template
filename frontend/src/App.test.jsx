import App from './App' 
import {MessageService} from './MessageService/MessageService'
import {render,screen} from '@testing-library/react'

beforeEach(() => {
    fetch.resetMocks()
  })
 

xit('should be "Hello World"', () => {
   const {getByText} = render(<App />)
   expect(getByText('Hello World')).toBeInTheDocument()
})

 

it('should display hello world', async () => {
	fetch.mockResponse('Hello World')
	 const messageService = new MessageService()
     const message = await messageService.getMessage()
     render(<App message={message} />);
     const linkElement = screen.getByText('Hello World');
     expect(linkElement).toBeInTheDocument();
 })