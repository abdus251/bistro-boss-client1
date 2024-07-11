import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
const AddItem2 = () => {
    return (
        <div className='w-full px-10'>
            <SectionTitle subHeading="What's New" heading="Add an item"></SectionTitle>
            <form>
                <div className='form-control w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Category*</span>
                        <span className="label-text-alt">Alt label</span>
                    </div>
                    <select className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Salad</option>
                        <option>Driks</option>
                        <option>Dessert</option>
                    </select>
                </div>
                <div className='form-control w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control">
                    <div className="label">
                        <span className="label-text">Recipe Details</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Item Image*</span>
                    </div>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input className='btn btn-sm mt-4' type="submit" value="Add Item"  />
            </form>
        </div>
    )
}

export default AddItem2