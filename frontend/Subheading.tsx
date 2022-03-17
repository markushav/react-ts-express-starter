
interface SubheadingProps {
    information: string;
}

const Subheading = ({information}: SubheadingProps) => {
    return <h4>{information}</h4>;
}

export default Subheading;