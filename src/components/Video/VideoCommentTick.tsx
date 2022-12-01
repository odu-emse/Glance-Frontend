export const VideoCommentTick = ({
    icon
}: VideoCommentTickProps) => {
    return (
        <div 
        tabIndex={0}
        className={[
            "bg-blue-500 h-full w-full rounded-full overflow-hidden transition-transform cursor-pointer",
            "hover:scale-[1.5] hover:z-[200]",
            "focus:scale-[1.5] focus:z-[200]"
        ].join(' ')} 
        >
            <img src={icon} className={[
                "object-cover w-full h-full",
            ].join(' ')} />
        </div>
    )
}

type VideoCommentTickProps = {
    icon: string
}