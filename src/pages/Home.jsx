import React from 'react';


const Home = () => {
  return (
    <div className=' sm:container mx-auto'>
        <div className=" w-1/2 mx-auto contant text-center p-8">
            <h1 className=' text-3xl py-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, doloribus!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit esse obcaecati, deserunt similique possimus nostrum velit, qui natus neque totam nobis soluta distinctio aliquam itaque quos doloribus optio laudantium sint!</p>
            <div className='flex justify-center items-center my-4'>
            <button className=' bg-blue-950 py-2 px-3 mt-3 mx-1 text-white'>More detail</button>
            <button className=' bg-blue-950 py-2 px-3 mt-3 mx-1 text-white'>Buy Product</button>
            </div>
        </div>
        <ProductList/>
    </div>
  )
}
export const ProductList = () => {
    let products = [
        {
            name:'Lorem ipsum dolor',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit esse obcaecati, deserunt similique',
            image: 'https://picsum.photos/id/7/300'
        },
        {
            name:'Lorem ipsum dolor',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit esse obcaecati, deserunt similique',
            image: 'https://picsum.photos/id/3/300'
        },
        {
            name:'Lorem ipsum dolor',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit esse obcaecati, deserunt similique',
            image: 'https://picsum.photos/id/137/300'
        },
        {
            name:'Lorem ipsum dolor',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit esse obcaecati, deserunt similique',
            image: 'https://picsum.photos/id/237/300'
        },
        {
            name:'Lorem ipsum dolor',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit esse obcaecati, deserunt similique',
            image: 'https://picsum.photos/id/337/300'
        },
        {
            name:'Lorem ipsum dolor',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit esse obcaecati, deserunt similique',
            image: 'https://picsum.photos/id/37/300'
        },
        {
            name:'Lorem ipsum dolor',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit esse obcaecati, deserunt similique',
            image: 'https://picsum.photos/id/327/300'
        },
        {
            name:'Lorem ipsum dolor',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit esse obcaecati, deserunt similique',
            image: 'https://picsum.photos/id/317/300'
        }
    ]
  return (
    // <div className='products flex flex-row flex-wrap justify-center'>
    //     {products.map((item) => {
    //         return(
    //         <div className='card m-3 w-1/4'>
    //             <img src={item.image} alt="" className=' '/>
    //             <h4 className=''>{item.name}</h4>
    //             <p>{item.detail}</p>
    //         </div>
    //         )
    //     })}
    // </div>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.detail}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default Home