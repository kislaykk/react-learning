import "../../index.css";
const Card = ({children}) => {
    return (
        <li className="concept">
            {children}
        </li>
    )
};

export default Card;