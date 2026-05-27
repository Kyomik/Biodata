export const DecorCard = () => {
    return (
        <svg
            className="pointer-events-none absolute z-0 top-0 left-0 w-full h-full overflow-visible"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* <line 
                x1="100%" y1="-10%" x2="60%" y2="110%" 
                className="stroke-accent/30 stroke-[1px]"
            />
            <line 
                x1="110%" y1="-10%" x2="70%" y2="110%" 
                className="stroke-accent/10 stroke-[0.5px]"
            />
            <line 
                x1="90%" y1="-10%" x2="50%" y2="110%" 
                className="stroke-accent/20 stroke-[0.5px]"
            />

            <rect 
                x="78%" y="-5%" width="40" height="40" 
                className="stroke-three/50 stroke-[1px] fill-none"
                transform="rotate(20, 82%, 8%)"
            /> */}
            <rect 
                x="83%" y="5%" width="22" height="22" 
                className="stroke-three/30 stroke-[1px] fill-none"
                transform="rotate(20, 85%, 10%)"
            />

            <line 
                x1="0" y1="0" x2="40" y2="0" 
                className="stroke-three/80 stroke-[1.5px]"
            />
            <line 
                x1="0" y1="0" x2="0" y2="40" 
                className="stroke-three/80 stroke-[1.5px]"
            />
        </svg>
    )
}