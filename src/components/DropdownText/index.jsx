import Dropdown from '../Dropdown';

function DropdownText({ content = '', label }) {
    return <Dropdown label={label}>{<div>{content}</div>}</Dropdown>;
}

export default DropdownText;
