
interface HeadingProps {
    title: string;
    description: string;
}

export const Heading: React.FC<HeadingProps> = (
    {
        title,
        description
    }
) => {
    return (
        <div className='flex lg:flex-row flex-col items-center'>
            <h2 className="text-3xl font-bold tracking-tight mx-2">{title}</h2>
            <p className="text-sm text-muted-foreground mx-2">{description}</p>
        </div>
    )
}