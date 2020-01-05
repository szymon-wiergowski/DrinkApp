import React from 'react';

export function PageWrapper(props) {
    return (
        <div style={{
            marginTop: '100px'
        }}>
            {props.children}
        </div>
    );
}