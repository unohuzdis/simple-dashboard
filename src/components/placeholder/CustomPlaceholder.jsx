import React from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import { Placeholder } from 'rsuite';

const { Paragraph } = Placeholder;
const CustomPlaceholder = () => {
    return (
        <div style={{ padding: 10 }}>
            <p>Overview:</p>
            <Paragraph style={{ marginTop: 30 }} />
            <hr />
            <p>Summary:</p>
            <Paragraph style={{ marginTop: 30 }} graph="circle" />
            <Paragraph style={{ marginTop: 30 }} graph="square" />
            <Paragraph style={{ marginTop: 30 }} graph="image" />
        </div>
    );
}

export default CustomPlaceholder;
