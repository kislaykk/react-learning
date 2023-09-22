import Card from "../UI/Card";

const ConceptCard = ({imgSrc, imgAlt, title, description}) => {
    return (
        <Card>
            <img src={imgSrc} alt={imgAlt} />
            <h2>{title}</h2>
            <p>{description}</p>
        </Card>
    );
};

export default ConceptCard;