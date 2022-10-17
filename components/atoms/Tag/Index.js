import React, { useCallback, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';



const Tag = ({tag}) => {
    const [isSelectedTag, setIsSelectedTag] = useState(false);

    const onSelectTag = useCallback(() => {
        setIsSelectedTag((prev) => !prev);
    }, [isSelectedTag]);

    return (
         
            <Button onClick={onSelectTag} variant="dark" className={isSelectedTag ? 'active' : null}>{tag}</Button>

    );
};

export default Tag;
