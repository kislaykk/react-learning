import ConceptCard from "./ConceptCard";

const ConceptList = ({concepts}) => {
    return (
        <ul id="concepts">
            <ConceptCard
                imgSrc={concepts[0].image}
                imgAlt={concepts[0].alt}
                title={concepts[0].title}
                description={concepts[0].description}
            />
            <ConceptCard
                imgSrc={concepts[1].image}
                imgAlt={concepts[1].alt}
                title={concepts[1].title}
                description={concepts[1].description}
            />
            <ConceptCard
                imgSrc={concepts[2].image}
                imgAlt={concepts[2].alt}
                title={concepts[2].title}
                description={concepts[2].description}
            />
        </ul>
    );
};

export default ConceptList;