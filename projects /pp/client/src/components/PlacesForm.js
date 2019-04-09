import React from 'react'


const PlacesForm = props => {
    const { vacinity, price, postedAt, handleUploadChange, handleSubmit, handleChange, placeFormToggle, placeFormToggler } = props
    return (
        <div >

            <form className={`placeForm placeForm-${placeFormToggle ? "off" : "on"}`}>
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
                    type="file"
                    onChange={handleUploadChange}
                    ref={fileInput => fileInput = fileInput} />
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
                <button className="saveButton" onClick={handleSubmit} > Save vacinity </button>
            </form>
        </div>
    )
}

export default PlacesForm