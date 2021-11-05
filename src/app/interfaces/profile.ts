import { Skill } from "./skill";

export interface Profile {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    headline?: string;
    bio?: string;
    location?: string;
    picture?: string;
    skills?: Skill[];
    languages?: string[];
}
