import upwardMotion from '../assets/Foundation.png'
import resume from '../assets/Resume Builder.png'
import landingPage from '../assets/Product Landing Page.png'
import markdownEditor from '../assets/markdown-editor.png'
import reportTracker from '../assets/hostel-report-tracker.png'

interface ICard {
    description: string
    image: string
    link: string
    title: string
}

export const cards:ICard[] = [
    {
        title: "Upward Motion Foundation",
        description: "",
        link: "https://www.umfimpact.org/",
        image: upwardMotion
    },
    {
        title: "Resume Builder",
        description: "",
        link: "https://resbuilda.netlify.app/",
        image: resume
    },
    {
        title: "Markdown Editor",
        description: "",
        link: "https://markdown-editorv1.netlify.app/",
        image: markdownEditor
    },
    {
        title: "Landing Page",
        description: "",
        link: "https://landing-page-trail.netlify.app/",
        image: landingPage
    },
    {
        title: "Hostel Report Tracker",
        description: "",
        link: "https://report-tracker.netlify.app/",
        image: reportTracker
    },
]

