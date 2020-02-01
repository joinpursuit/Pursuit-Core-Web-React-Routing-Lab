import React from 'react';

const OptionTags = (props) => {
    const {breed} = props
    return (
        <option>
            {breed}
        </option>
    )
}

export default OptionTags;