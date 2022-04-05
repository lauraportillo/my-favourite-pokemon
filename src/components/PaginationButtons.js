import React from 'react';
import '../stylesheets/PaginationButtons.scss';

const PaginationButtons = (props) => {
    const prev = () => {
        props.prev();
    };
    const next = () => {
        props.next();
    };

    return (
        <section>
            <button onClick={prev}>previous</button>
            <button onClick={next}>next</button>
        </section>
    );
};

export default PaginationButtons;