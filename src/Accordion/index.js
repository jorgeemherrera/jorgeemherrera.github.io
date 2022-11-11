// import react from "react";
import './style.scss'

const Accordion = ({
    title,
    paragraph,
    img,
}) => {
    return (
        <div className='accordion'>
            <h1 className='title'>{title}</h1>
        </div>
    );
}

export { Accordion }