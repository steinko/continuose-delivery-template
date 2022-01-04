import App from './App' 
import {render,screen,act} from '@testing-library/react'
import { useFetch } from 'react-async'

jest.mock('react-async');
 

xit('should be "Hello World"', () => {
   const {getByText} = render(<App />)
   expect(getByText('Hello World')).toBeInTheDocument()
})

 

xit('should display hello world', async () => {
	 useFetch.mockResolvedValue('Hello World');
	 act(() => {
       render(<App />);
     })
     const linkElement = screen.getByText('Hello World');
     expect(linkElement).toBeInTheDocument();
 })