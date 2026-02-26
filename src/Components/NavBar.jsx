import { useEffect, useState } from "react";

const NavLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Lessons', href: '#code' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
];

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false)

    useEffect (() =>{
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav 
            id='nav'
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-6 px-12 border-b border-b-transparent transition-colors duration-300 ${scrolled 
                ?  'bg-black/80 backdrop-blur-[20px] border-b-white/10' : 'bg-transparent'
            }`}>

            <div 
                className="flex items-center text-(--color-text) font-syne text-[1.3rem] gap-2">
                    <span className="w-2 h-2 rounded-full bg-(--color-accent) inline-block"></span>
                    <span className="tracking-tight font-extrabold">ReactLab</span>
            </div>

            <div className="hidden md:flex gap-8 items-center">
                {NavLinks.map(({label, href})=>(
                    <a 
                        key={label}
                        href={href}
                        className="font-dm-mono text-xs text-(--color-muted) tracking-wider no-underline hover:text-(--color-text) transition-colors duration-200"
                        >
                            {label}
                    </a>
                ))}

                <a href="#"
                className="font-dm-mono text-xs font-medium bg-(--color-accent) text-black px-6 py-2 rounded tracking-tighter hover:opacity-85 transition-opacity duration-200">
                    start free →
                </a>
            </div>
        </nav>
    )
}

export default NavBar 
