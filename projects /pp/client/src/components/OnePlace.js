import React from 'react'
import { withAdmin } from '../context/adminProvider.js'
import {moment} from 'moment'


const OnePlace = props => {
    const { vacinity, imgUrl1,imgUrl2,imgUrl3, price, PostedAt } = props
    // console.log(vacinity, imgUrl1, imgUrl2,imgUrl3 )
    return (
        <div className="onePlace">
            <div>
                <h1>{vacinity}</h1>
            </div>

            <div className="images">
                <img className="img1" src={imgUrl1 || "https://via.placeholder.com/200x200" } height="300" width="300" alt="uploaded image" />
                <img className="img2" src={imgUrl2 || "https://via.placeholder.com/200x200" } height="300" width="300" alt="uploaded image" />
                <img className="img3" src={imgUrl3 || "https://via.placeholder.com/200x200" } height="300" width="300" alt="uploaded image" />
            </div>

            <div>
                <h4>{price}</h4>
            </div>

            <div>
                <h3> {PostedAt}</h3>
            </div>

        </div>
    )
}
export default withAdmin(OnePlace)