import React from 'react'
import { withAdmin } from '../context/adminProvider.js'

const OnePlace = props => {
    const { vacinity, imgUrl, price, PostedAt } = props
    return (
        <div>
            <div>
                <h1>{vacinity}</h1>
            </div>

            <div>
                <img src={imgUrl} />
            </div>

            <div>
                <h4>{price}</h4>
            </div>

            <div>
                <h3>{PostedAt}</h3>
            </div>

        </div>
    )
}
export default withAdmin(OnePlace)