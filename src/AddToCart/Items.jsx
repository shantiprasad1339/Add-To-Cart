import React, { useState } from 'react';
import Data from './Data';
import './Style.css';
import { usePagination } from '../hook/Pagination';
import { Pagination } from '@mui/material';

function Items(props) {
  const [data, setData] = useState(Data);
  const { handleclick } = props;
  const [totalPages, startPageIndex, endPageIndex, currentPage, dispPage] = usePagination(6, data.length);

  const displayedData = data.slice(startPageIndex, endPageIndex + 1);

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
              <button onClick={() => handleclick(item)}>add to cart</button>
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
