import React from 'react'


const PlacesForm = props => {
    const { vacinity, imgUrl, price, postedAt, handleUploadChange, handleSubmit, handleChange, placeFormToggle, placeFormToggler } = props
    return (
        <div >

            <form className={`placeForm placeForm-${placeFormToggle ? "on" : "off"}`}>
                <input
                    type="text"
                    name="vacinity"
                    value={vacinity}
                    onChange={handleChange}
                    placeholder="vacinity name"
                    required />
                <input
                    type="file"
                    onChange={handleUploadChange}
                    ref={fileInput => fileInput = fileInput} />
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
                     />
                <bttn onClick={handleSubmit} > Save vacinity </bttn>
            </form>
        </div>
    )
}

export default PlacesForm