import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom'
import profileImage from '../../images/profilePic.jpg'

export const AboutMeContainer = () => {
    const navigate = useNavigate()

    return (
        <Paper style={{width:'40%'}}>
            <div>
                <div>
                    <Button onClick={() => navigate('/')}>About Me</Button>
                    <Button onClick={() => navigate('/hobbies')}>Hobbies</Button>                
                </div>
            </div>
            <h1>Kyle's About Me Page</h1>
            <img src={profileImage} style={{width:'50px', height:'50px'}}/>
            <Divider />
            <Typography variant="body1" gutterBottom>
                My name is Kyle Peniston, and I'm currently pursuing a bachelor degree in Computer Technology here at UMSL.
                Outside of school, I'm an avid traveler. My favorite thing to do is to travel in my RV with my dog and wife.
                We enjoy connecting with people from around the world and experiencing different cultures. I currently work
                remotely as a Full Stack / ETL Developer and have been working in the software field since 2017. Software
                Development was not my first career choice. I've worked in my family's construction business
                since I was 12. I learned a very valuable trade and even custom built my house from the foundation
                to the shingles, but I wasn't happy and I knew that I didn't want that to be my long term career.
                I was offered a higher role in the company but I chose to go back to college and finish my schooling.
                I then got my first exposure into software and attended a coding bootcamp in St. Louis, got certified 
                as a Full Stack C#/.Net Developer, and landed my first job as a front-end JS engineer.  
                I haven't strayed away from construction though and I run a handyman business on the side to save 
                up for our traveling excursions. After working that job for 2 years I decided I wanted a change of 
                scenery and a better work life balance. In January 2020 I accepted my current position and have been 
                working as a back-end ETL developer. I've transitioned into a Team Lead position and just about every 
                day I'm working with different languages, frameworks, with people all across the world. They've given 
                me the opportunity to learn the software industry hands on and the time and resources to go back and 
                finish my college degree. I would like to see what other opportunities are out there that hopefully 
                allow me to continue my vagabond lifestyle. I wish you all the best this year and good luck!
            </Typography>
        </Paper>
    )
}