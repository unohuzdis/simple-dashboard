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
            <hr />
            <p>Animation:</p>
            <Paragraph style={{ marginTop: 30 }} rows={5} graph="image" active />
        </div>
    );
}

export default CustomPlaceholder;
