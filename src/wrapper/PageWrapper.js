import React from 'react';

export function PageWrapper(props) {
    return (
        <div style={{
            marginTop: '73px'
        }}>
            {props.children}
        </div>
    );
}