import logo from '../assets/Images/expertteam.png';
interface DataItem {
    id: string;
    image?: string,
    name: string,
    profile: string,
}
export const exportTeam: DataItem[] = [
    {
        id: "1",
        "image": logo,
        "name": "deepanshi jangra",
        "profile": "Certified Dog Behaviourist",
    },
    {
        id: "2",
        "image": logo,
        "name": "gargi punyani",
        "profile": "Certified Cat Behaviourist",
    },
    {
        id: "3",
        "image": logo,
        "name": "mithali",
        "profile": "Certified Pig Behaviourist",
    },
    {
        id: "4",
        "image": logo,
        "name": "pawan kumar",
        "profile": "Certified Cow Behaviourist",
    },
    {
        id: "5",
        "image": logo,
        "name": "vijay patidar",
        "profile": "Certified buffalo Behaviourist",
    },
    {
        id: "6",
        "image": logo,
        "name": "mahesh kumar",
        "profile": "Certified goat Behaviourist",
    }
]