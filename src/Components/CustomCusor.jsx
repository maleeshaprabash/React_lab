import { useEffect, useState } from 'react'

function CustomCursor() {
    const [mouse, setMouse] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const onMove = (e) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", onMove);
        return () => document.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <div
            className='fixed pointer-events-none z-9999 h-3 w-3 bg-(--color-accent) rounded-full -translate-x-1/2 -translate-y-1/2'
            style={{
                left: mouse.x,
                top: mouse.y,
                mixBlendMode: "difference"
            }}
        />
    )
}

export default CustomCursor