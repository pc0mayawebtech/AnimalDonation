import petlogo from '../assets/Images/petdetaillogo.jpg';
interface DataItem {
    id: number;
    image?: string,
    date: number,
    weight: number,
    name: string,
    decription: string,
}
export const petTeam: DataItem[] = [
    {
        "id": 1,
        "image": petlogo,
        "date": 5,
        "weight": 4.40,
        "name": "Siberian Maltese",
        "decription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        "id": 2,
        "image": petlogo,
        "date": 7,
        "weight": 2.82,
        "name": "Persian Cat",
        "decription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        "id": 3,
        "image": petlogo,
        "date": 2,
        "weight": 2.93,
        "name": "Fuzzy & Holland Lop",
        "decription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        "id": 4,
        "image": petlogo,
        "date": 1.3,
        "weight": 1.10,
        "name": "Campbell Gansu",
        "decription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        "id": 5,
        "image": petlogo,
        "date": 5,
        "weight": 4.40,
        "name": "Pace Face Lovebird",
        "decription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        "id": 6,
        "image": petlogo,
        "date": 7,
        "weight": 2.82,
        "name": "Indian Water Dragon",
        "decription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        "id": 7,
        "image": petlogo,
        "date": 2,
        "weight": 2.93,
        "name": "Ringneck Dove",
        "decription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        "id": 8,
        "image": petlogo,
        "date": 1.3,
        "weight": 1.10,
        "name": "Gold Fish",
        "decription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
]