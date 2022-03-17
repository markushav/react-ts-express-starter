
interface HeadingProps {
    greeting: string;
}

const Heading = ({greeting}: HeadingProps) => {
    return <h1>{greeting}</h1>;
}

export default Heading;