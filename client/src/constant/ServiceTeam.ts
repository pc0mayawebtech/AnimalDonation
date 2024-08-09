import team1 from '../assets/Images/team1.png';
import team2 from '../assets/Images/team2.png';
import team3 from '../assets/Images/team3.png';
import team4 from '../assets/Images/team4.png';
import team5 from '../assets/Images/team5.png';
interface DataItem {
    id: string;
    image?: string,
    title: string,
    description: string,
}
export const ServiceTeam: DataItem[] = [
    {
        id: "1",
        "image": team1,
        "title": "Pet Donations",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
        id: "2",
        "image": team2,
        "title": "Animal Rescue",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
        id: "3",
        "image": team2,
        "title": "Pet Surgery",
        "description": "Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper",
    },
    {
        id: "4",
        "image": team3,
        "title": "Adopt Animal",
        "description": "Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper",
    },
    {
        id: "5",
        "image": team4,
        "title": "Animal Care",
        "description": "Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper",
    },
    {
        id: "6",
        "image": team5,
        "title": "Animal House",
        "description": "Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper",
    },
]