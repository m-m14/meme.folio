import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Maryam',
    lastName:  'Tirmazi',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Embroidery Artist',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Muscat',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English']  // optional: Leave the array empty if you don't want to display languages
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/m-m14',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:maryamimpala@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as an ${person.role}`,
    headline: <>High School Senior</>,
    subline: <>I'm Maryam and this is a portfolio for some of my embroidery projects!</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Hi, I'm Maryam! I love researching South Asian culture. One of the ways through which I connect with my history is embroidery. This art, which has historically been undermined as a trivial hobby for women, has been an avenue that allowed the women who came before me to express their emotions, create their own stuff in a world that would never allow that, and tell their stories for their descendants to listen to. Embroidery through the ages shows that there's so much more to history than is told in history books that focus on the stories of white men. I love carrying the legacy of the women who came before me by passing threads through a needle and beginning to create my own history.</>
    },
    work: {
        display: false, // set to false to hide this section
        title: 'Volunteer Experience',
        experiences: []
    },
    studies: {
        display: false, // set to false to hide this section
        title: 'Studies',
        institutions: []
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: []
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-02.png', 
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-03.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-04.png', 
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-05.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.png', 
            alt: 'image',
            orientation: 'vertical'
        }
    ]
}

export { person, social, home, about, blog, work, gallery };