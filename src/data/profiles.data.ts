import { Profile } from "src/app/interfaces/profile";

export const profiles: Profile[] = [
    {
        id: 1,
        name: 'Rafael Lucini',
        email: 'rafaellucini@gmail.com',
        headline: 'Senior Frontend Developer',
        bio: 'Helping people to scale and improve their frontend development.',
        skills: [
            { id: 1, name: 'HTML', level: 'advanced' },
            { id: 2, name: 'CSS', level: 'advanced' },
            { id: 3, name: 'JavaScript', level: 'advanced' },
            { id: 4, name: 'TypeScript', level: 'advanced' },
            { id: 5, name: 'Angular', level: 'advanced' },
            { id: 6, name: 'React', level: 'intermediate' },
            { id: 7, name: 'Vue', level: 'intermediate' },
            { id: 8, name: 'Java', level: 'advanced' },
            { id: 9, name: 'PHP', level: 'advanced' },
        ],
    }
];