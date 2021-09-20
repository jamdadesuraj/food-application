import React from 'react'
import error from "../images/error.jpg"


const Error = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                    <div className="eoor_info">
                    <img src={error} alt="" srcset="" />
                    <button type="button" class="btn btn-primary">Go Home</button>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error
