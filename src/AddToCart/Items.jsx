import React, { useState } from 'react';
import Data from './Data';
import './Style.css';
import { usePagination } from '../hook/Pagination';
import { Pagination } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity,clearCart } from '../Redux/Slice';










function Items(props) {
  const [data, setData] = useState(Data);
  const [totalPages, startPageIndex, endPageIndex, currentPage, dispPage] = usePagination(6, data.length);

  const displayedData = data.slice(startPageIndex, endPageIndex + 1);

  const dispatch = useDispatch();


function handleclickCart(item){
  let cartItem = {
    title:item.title,
    qty:1,
    price:item.price,
    img:item.img
    }
    dispatch(addItem(cartItem))
  
}
  return (
    <>
      <div className="Hero">
        {displayedData.map((item) => (
          <div className="wrapper" key={item.id}>
            <div className="card">
              <div className="img">
                <img src={item.img} alt={item.title} />
              </div>
              <p className="pric">price-{item.price}</p>
              <p className="des">{item.title}</p>
              <button onClick={() => handleclickCart(item)}>add to cart</button>
              <div className="details"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <Pagination
          count={totalPages}
          color="secondary"
          onChange={(event, value) => dispPage(value)}
        />
      </div>
    </>
  );
}

export default Items;
