import Dropdown from '../Dropdown';

function DropdownList({ itemsList = [], label }) {
    return (
        <Dropdown label={label}>
            {itemsList.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </Dropdown>
    );
}

export default DropdownList;
