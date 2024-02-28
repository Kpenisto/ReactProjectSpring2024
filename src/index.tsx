import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import { createRoot } from "react-dom/client"
import { HobbiesContainer } from './modules/hobbies';
import { AboutMeContainer } from './modules/aboutMe';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AboutMeContainer />
    },
    {
        path: '/hobbies',
        element: <HobbiesContainer />
    },
])

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </> 
    )
}

createRoot(document.getElementById('root') as Element).render(<App />)