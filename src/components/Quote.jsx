import React from 'react';
import './Quote.css'

function Quote(props) {
    const {quoteData} = props;
        return (
            <div className='quote-card'>
                <p>
                    {quoteData.value}
                </p>
            </div>
        );
};

export default Quote;