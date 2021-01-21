import React from 'react'
import './ComplaintCard.styles.css';

const ComplaintCard = ({data}) => {
    console.log(data)
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default ComplaintCard
