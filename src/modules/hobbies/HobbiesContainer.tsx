import { Hobbies } from "./Hobbies"
import travelImage from '../../images/travelImage.jpeg'
import cookingImage from '../../images/cookingImage.jpeg'
import gamingImage from '../../images/gamingImage.jpg'
import { NavBar } from "../navBar"

export const HobbiesContainer = () => {
    const posts = [
        {
            title: 'Traveling',
            description: 'I enjoy traveling around the US with my family in our RV!',
            imgSrc: travelImage
        },
        {
            title: 'Cooking',
            description: 'Cooking is a fun hobby of mine and I believe feeding people is one of life\'s greatest gifts!',
            imgSrc: cookingImage
        },
        {
            title: 'Gaming',
            description: 'I enjoy RPG and strategy games, when I can find the time!',
            imgSrc: gamingImage
        },
    ]

    return (
        <>
            <div>
                <NavBar />
            </div>
            {
                posts.map((post, index) => <Hobbies key={index} {...post} />)
            }
        </>
    )
}