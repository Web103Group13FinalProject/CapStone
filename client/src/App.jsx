import { useRoutes } from 'react-router-dom'
import '../styles/App.css'
import Navbar from '../components/Navbar'
import Home from '../pages/Home.jsx'
import Recipes from '../pages/Recipes.jsx'
import Footer from '../components/Footer.jsx'

function App() {
    
    let element = useRoutes([
        { path: '/', element: <Home/> },
        { path: '/recipes', element: <Recipes/>},
    ])

    return (
        <>
            <Navbar />
            {element}
            <Footer />
        </>
    )
}

export default App
