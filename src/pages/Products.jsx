import React from 'react'

const Products = () => {
  return (
    <div className=' container mx-auto mt-8'>
        <div className="topdetail flex flex-row">
            <div className="left w-1/2">
                <img src="https://picsum.photos/id/137/400" alt="" className=' h-full w-full object-cover object-center rounded-2xl' />
            </div>
            <div className="right w-1/2 px-8">
                <div className="detail border rounded p-6">
                    <h2 className=' text-4xl my-6'>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
                    <p className=' mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quam numquam molestias quae atque veniam maiores tempora porro molestiae laboriosam quia unde officiis a fugit consectetur, provident nam? Ipsum, saepe.</p>
                    <p className='mb-6'><strong>Price : </strong>100 THB</p>
                    <p><strong>Quantity</strong></p>
                    <input type="number" name="" id="" className=' bg-slate-100 w-full h-9 rounded-md mt-2'/>
                    <button className='px-3 py-2 bg-blue-900 mt-7 rounded-md text-white'>Add to Cart</button>
                </div>
                <div className="border rounded mt-4">
                    <div className="top bg-slate-600 text-white py-4 px-2">Details</div>
                    <div className="py-2 px-4 border"><strong>Display :</strong> Lorem ipsum dolor sit amet.</div>
                    <div className="py-2 px-4 border"><strong>Display :</strong> Lorem ipsum dolor sit amet.</div>
                    <div className="py-2 px-4 border"><strong>Display :</strong> Lorem ipsum dolor sit amet.</div>
                    <div className="py-2 px-4 border"><strong>Display :</strong> Lorem ipsum dolor sit amet.</div>
                    <div className="py-2 px-4 border"><strong>Display :</strong> Lorem ipsum dolor sit amet.</div>
                    <div className="py-2 px-4 border"><strong>Display :</strong> Lorem ipsum dolor sit amet.</div>
                </div>
            </div>
        </div>
        <div className="border rounded my-7">
            <div className="top bg-slate-600 text-white py-4 px-2">Details</div>
            <div className='my-6'>
                <label htmlFor="1" className=' px-3'>1</label>
                <input type="checkbox" className='px-3' name="1" id="" />
                <label htmlFor="1" className=' px-3'>2</label>
                <input type="checkbox" className='px-3' name="1" id="" />
                <label htmlFor="1" className=' px-3'>3</label>
                <input type="checkbox" className='px-3' name="1" id="" />
                <label htmlFor="1" className=' px-3'>4</label>
                <input type="checkbox" className='px-3' name="1" id="" />
            </div>
        </div>
        <div className="border rounded my-7">
                    <div className="top bg-slate-600 text-white py-4 px-2">Details</div>
                    <div className="py-2 px-4 border"><strong>Display :</strong> Lorem ipsum dolor sit amet.</div>
                    <div className="py-2 px-4 border"><strong>Display :</strong> Lorem ipsum dolor sit amet.</div>
                    <div className="py-2 px-4 border"><strong>Display :</strong> Lorem ipsum dolor sit amet.</div>
        </div>
    </div>
  )
}

export default Products