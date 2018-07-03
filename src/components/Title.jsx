import React from 'react';

const Title = (props) => {

    const { title, subtitle } = props;

    return (
        <div className="title">
            <span>{title} </span>

            {subtitle &&
                <span>| <span className="subtitle">{subtitle}</span></span>
            }

        </div>
    );

}

export default Title;





