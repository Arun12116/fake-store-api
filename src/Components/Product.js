import React from 'react'

const Product = ({product}) => {
  return (
    <>
    <div className="Container">
    <div className="box-container">
        {product.length > 0 ? null : <h1>no Data Found</h1>}
        {

            product.map((items) => {

                return <div className="card">
                    <img src={items.image} alt="img" style={{ width: "50%", height: "40%" }} />
                    <h2>category:{items.category}</h2>
                    <h1>price:{items.price}</h1>
                  <button>Deatiles More</button>
                  
                  


                </div>


            })
        }

    </div>


</div>


    
    </>
  )
}

export default Product