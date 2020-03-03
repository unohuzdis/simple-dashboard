import React from 'react';

const contentStyles = {
    padding: 18,
    marginTop: 3,
    fontSize: 16,
    height: 56,
    background: 'orange',
    color: ' #fff',
    textAlign: 'center'
};

const MainContent = ({ title }) => {
    return (
        <div style = {contentStyles}>
            {title}
        </div>
    );
}

// MainContent.propTypes = {
//     title: String
// };


export default MainContent;
