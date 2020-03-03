import React from 'react';

const footerStyles = {
    background: '#3498FF',
    padding: 10,
    fontSize: 15,
    color: ' #fff',
    textAlign: 'center'
};

const CustomFooter = () => {
    return (
        <div style = {footerStyles}>
            &copy; Wasek Habib
        </div>
    );
}

// MainContent.propTypes = {
//     title: String
// };


export default CustomFooter;
