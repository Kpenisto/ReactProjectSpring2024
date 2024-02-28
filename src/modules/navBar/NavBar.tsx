import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Button onClick={() => navigate('/')} style={{border: 'solid', margin: '5px'}}>About Me</Button>
            <Button onClick={() => navigate('/hobbies')} style={{border: 'solid', margin: '5px'}}>Hobbies</Button>                
        </div>
    )
}