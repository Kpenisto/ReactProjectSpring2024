import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper'

import './Hobbies.css'

interface HobbyType {
    title: string
    description: string
    imgSrc: string
    verified?: boolean
}

export const Hobbies = ({title, description, imgSrc, verified}: HobbyType) => {
    const backgroundColor = verified ? 'lightBlue' : '#9cf59c'

    return (
        <Paper className='blogPostPretty' style={{ backgroundColor }}>
            <div>
                <div style={{display: 'flex', flexDirection: 'row' }}>
                        <span style={{ flex: '1' }}>
                            <Typography variant="h4" gutterBottom>
                                {title}
                            </Typography>
                        </span>
                </div>
                <img src={imgSrc} alt='MissingImage' style={{width:'350px', height:'250px'}}/>
                <Divider />
                <div style={{ marginTop: '10px' }}>
                    <Typography variant="body1" gutterBottom>
                        {description}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}