import React from 'react'
import "./Profile.css"

function withProfileLoading(Component) {
    return function withLoadingComponent ({ isLoading, ...props }) {
        if(!isLoading) return <Component {...props} />
        return (
            <p className="loading">
                Hold on fetching data may take some time
            </p>
        )
    }
}

export default withProfileLoading
