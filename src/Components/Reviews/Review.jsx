import React from 'react';

const Review = ({id, info, add, view}) => {
    
    const renderLeft = () => {
        if (info) {

        } else {

        }
    }


    const renderRight = () => {
        if (add) {

        } else if (view) {

        } else {
            
        }
    }
    
    return (
        <div>
            <div>
                Left side
            </div>
            <div>
                Right side
            </div>
        </div>
    )
}

export default Review;