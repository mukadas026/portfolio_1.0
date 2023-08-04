import react from '../assets/react.svg'
import vite from '../assets/vite.svg'
import ts from '../assets/ts.svg'
import svelte from '../assets/svelte.svg'
import tailwind from '../assets/tailwind.svg'


interface ITechStack {
    image: string
    title:string
    link: string
}

export const techStack: ITechStack[] = [
    {
        image: react,
        title: "React",
        link: "https://react.dev/",
    },
    {
        image: vite,
        title: "Vite",
        link: "https://vitejs.dev/",
    },
    {
        image: ts,
        title: "Typescript",
        link: "https://www.typescriptlang.org/",
    },
    {
        image: svelte,
        title: "SvelteJS",
        link: "https://svelte.dev/",
    },
    {
        image: tailwind,
        title: "TailwindCSS",
        link: "https://tailwindcss.com/",
    },
]