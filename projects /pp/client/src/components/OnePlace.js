import React from 'react'
import { withAdmin } from '../context/adminProvider.js'
import moment from 'moment'

const OnePlace = props => {
    const { vacinity, imgUrl1, imgUrl2, imgUrl3, price, postedAt} = props
    
    // const today = moment(new Date())
    // const postDate = moment(postedAt)
    // console.log(vacinity, imgUrl1, imgUrl2,imgUrl3 )
    return (
        <div className="onePlace">
            <div className="images">
                <img className="img1" src={imgUrl1 || "https://via.placeholder.com/200x200"} height="300" width="300" alt="uploaded image" />
                {/* <img className="img2" src={imgUrl2 || "https://via.placeholder.com/200x200" } height="300" width="300" alt="uploaded image" />
                <img className="img3" src={imgUrl3 || "https://via.placeholder.com/200x200" } height="300" width="300" alt="uploaded image" /> */}
            </div>
            <div className="details">
                <div className="det">
                    <h2>{vacinity}</h2>
                </div>
                <div className="det">
                    <h3>{price}</h3>
                </div>

                <div className="det">
                    <h4> posted  {moment().startOf('hour').fromNow()} </h4>
                    {/* <h4>{postDate.from(today)}</h4> */}
                </div>
            </div>
        </div>
    )
}
export default withAdmin(OnePlace)