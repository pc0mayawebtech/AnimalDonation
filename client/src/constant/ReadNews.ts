import animalsave from '../assets/Images/aboutsaveanimals.jpg';
interface DataItem {
    id: string;
    image?: string,
    title: string,
    description: string,
}
export const ReadNews: DataItem[] = [
    {
        id: "1",
        "image": animalsave,
        "title": "How To Train A Dog Run",
        "description": "How To Train A Dog Run Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa magna, auctor eu suscipit vitae, egestas vel tortor. Phasellus nec diam eget dui tristique finibus. Sed faucibus ante nibh, ut vestibulum sapien luctus sit amet. Vivamus dignissim a sem…",
    },
    {
        id: "2",
        "image": animalsave,
        "title": "Does Your Pet Need Protection?",
        "description": "Does Your Pet Need Protection? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa magna, auctor eu suscipit vitae, egestas vel tortor. Phasellus nec diam eget dui tristique finibus. Sed faucibus ante nibh, ut vestibulum sapien luctus sit amet. Vivamus dignissim a sem non…",
    },
    {
        id: "3",
        "image": animalsave,
        "title": "Vaccines For Pet",
        "description": "Vaccines For Pet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa magna, auctor eu suscipit vitae, egestas vel tortor. Phasellus nec diam eget dui tristique finibus. Sed faucibus ante nibh, ut vestibulum sapien luctus sit amet. Vivamus dignissim a sem non suscipit. Ut…",
    },
]