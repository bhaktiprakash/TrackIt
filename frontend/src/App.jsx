import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './layouts/Layout'
import Home from './pages/Home'

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ path: "/", element: <Home /> }
			]
		}
	])

	return <RouterProvider router={router} />
}

export default App
