import React from 'react'


const PlacesForm = props => {
    const { vacinity, imgUrl, price, postedAt,handleUploadChange, handleUploadSubmit, handleSubmit, handleChange, placeFormToggle, placeFormToggler } = props
    return (
        <div onClick={placeFormToggler}>

            <form onSubmit={handleSubmit} className={`placeForm placeForm-${placeFormToggle ? "on" : "off"}`}>
                <input
                    type="text"
                    name="vacinity"
                    value={vacinity}
                    onChange={handleChange}
                    placeholder="vacinity name"
                    required />
                <input
                    type="file"
                    name="imgUrl"
                    value={imgUrl}
                    onChange={handleChange}
                    accept="image/*"
                    placeholder="upload images" required />
                <input
                    type="text"
                    name="price"
                    value={price}
                    onChange={handleChange}
                    placeholder="price$"
                    required />
                <input
                    type="text"
                    name="postedAt"
                    value={postedAt}
                    onChange={handleChange}
                    placeholder="date posted"
                    required />
                <button> Save vacinity </button>
            </form>
        </div>
    )
}

export default PlacesForm