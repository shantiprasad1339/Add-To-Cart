import React, { useState } from 'react'
import Data from './Data'
import './Style.css'

function Items(props) {
  const [data, setData] = useState(Data)
  // console.log(data);
const{handleclick}= props;
  return (
    <>
     <div className="Hero">
  {data && data.map((item, index) => {
    return (
      <div className="wrapper" key={item.id}>
        <div className="card">
          <div className="img">
            <img src={item.img} />
          </div>
          <p className="pric">price-{item.price}</p>
          <p className="des">{item.title}</p>
          <button onClick={() => { handleclick(item) }}>add to cart</button>
          <div className="details"></div>
        </div>
      </div>
    )
  })}
</div>

    </>
  )
}

export default Items

