import '../stylesheets/Form.scss';

const PrintButton = ({ handlePrint }) => {
    return (
        <button className="form__print" onClick={handlePrint}>Print</button>
    )
};

export default PrintButton;