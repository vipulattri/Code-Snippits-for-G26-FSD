import React, { useEffect, useState } from 'react'

const EcomExample = () => {
  const [prodArray, setProdArray] = useState([])



  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => {
        setTimeout(()=>{
          setProdArray(json)

        },5000)
      }
      )


  }, [])



  console.log({ prodArray })
  
//   {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }

  return (
    <div>
      <div>
        {prodArray.length  ? prodArray.map((productData) => {
          return (
            <div style={{border:'2px solid black',margin:'4px'}}>
<img src={productData.image} width={'400'} height={'400'}/>
              <h1>{productData.title}</h1>
              <h2>{productData.price}</h2>
              <h3>{productData.description}</h3>
              <h4>{productData.category}</h4>
            </div>
          )
        }) : <div>we dont have data</div>}
{/* {prodArray.length && <div> we have data</div>} */}


      </div>



    </div>
  )
}

export default EcomExample