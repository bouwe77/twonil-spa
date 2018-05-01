import React from 'react';

function WrapWithBlock(WrappedComponent, numberOfColumns, title) {

    return class Wrapper extends React.Component {
        render() {
            return (
                <div className={`block-${numberOfColumns}columns`}>

                    <h4>{title}</h4>

                    <WrappedComponent {...this.props} />

                </div>
            )
        }
    }
}

export default WrapWithBlock;