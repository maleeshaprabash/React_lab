import '../index.css'

const Hero = () => {
  return (
    
    <section className="min-h-screen flex flex-col justify-center border-2 border-white px-10 pt-30 pb-20 relative overflow-hidden">
        <div className="animate-[gridshift_20s_linear_infinite]"
        style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(91, 255, 195, 0.04) 1px, transparent 1px),linear-gradient(90deg, rgba(91, 255, 195, 0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
        }}>
        </div>

        <div className='absolute h-150 w-150 rounded-full pointer-events-none animate-[orbpulse_6s_infinite] ease-in-out -top-25 -right-25'
        style={{
            background: 'radial-gradient(circle, rgba(91,255,195,0.12) 0%, transparent 70%)',
        }}>
        </div>

        <div className='absolute h-100 w-100 rounded-full pointer-events-none animate-[orbpulse_8s_infinite_reverse] ease-in-out -bottom-12 left-[10%]'
        style={{
            background: 'radial-gradient(circle, rgba(255,107,107,0.08) 0%, transparent 70%)',
        }}></div>
    </section>
  )
}

export default Hero
