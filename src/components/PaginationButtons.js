import '../stylesheets/PaginationButtons.scss';

const PaginationButtons = (props) => {
    const prev = () => {
        props.prev();
    };
    const next = () => {
        props.next();
    };

    return (
        <nav >
            <ul className="pagination">
                <li key="left" className="pagination__item" onClick={prev}>
                    <i className="fas fa-angle-double-left"></i>
                    <p className="pagination__item--left">Previous</p>
                </li>
                <li className="pagination__item2">|</li>
                <li key="right" className="pagination__item" onClick={next}>
                    <p className="pagination__item--right">Next</p>
                    <i className="fas fa-angle-double-right"></i>
                </li>
            </ul>
        </nav>
    );
};

export default PaginationButtons;

