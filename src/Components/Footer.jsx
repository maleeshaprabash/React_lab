const Footer = () => {
  return (
    <section className="px-12 pb-10 pt-13 border-t border-(--color-border) flex justify-between items-center flex-wrap gap-6 max-md:flex-col max-md:text-center ">
        <div>
            <div className="flex items-center gap-2 font-syne font-extrabold text-[1.1rem] text-(--color-text)">
                <span className="w-2 h-2 rounded-full bg-(--color-accent) inline-block"></span>
                ReactLab
            </div>
            <p className="font-dm-mono text-[0.7rem] text-(--color-muted) mt-1.5">
                    © 2025 ReactLab Inc. — Built for beginners.
            </p>
        </div>
        <div className="flex gap-7 flex-wrap max-md:justify-center">
                {['Twitter', 'GitHub', 'Discord', 'Privacy', 'Terms'].map((link) => (
                    <a
                        key={link}
                        href="#"
                        className="font-dm-mono text-[0.7rem] text-(--color-muted) tracking-[0.05em] no-underline transition-colors duration-200 hover:text-(--color-text)">
                            
                        {link}
                    </a>
                ))}
            </div>
    </section>
  )
}

export default Footer
