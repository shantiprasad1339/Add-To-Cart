import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './Test.css'
import {usePagination} from '../hook/Pagination';
import {Pagination, colors} from '@mui/material'
function Addtocart() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001');
    //             console.log(response.data);
    //             setData(response.data);

    //             setLoading(true)
    //         } catch (error) {
    //             console.log('Error:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);


    const [totalPages, startPageIndex, endPageIndex, currentPage, dispPage] = usePagination(3, data.length)
    console.log(totalPages);
    return (
        <>
        <div className="mainDiv">
            <div className="apiData">

                {
                loading ? (() => {
                    const dispPosts = [];
                    for (let i = startPageIndex; i <= endPageIndex; i++) {
                        dispPosts.push (
                            <div key={
                                data[i].index
                            }>
                                <div className='content'>
                                    <img src={
                                        data[i].imageUrl
                                    }/>
                                    <h3>First-Name: {
                                       data[i].firstName
                                    }</h3>
                                    <h4>Last-Name: {
                                        data[i].lastName
                                    }</h4>
                                    <h4>Number: {
                                        data[i].contactNumber
                                    }</h4>
                                </div>
                            </div>
                        );
                    }
                    return dispPosts;
                })() : "loading...."
            }

                <div className='pagination'>
                    <Pagination count={totalPages}
                        color='secondary'
                        // variant="outlined"
                        onChange={
                            (event, value) => dispPage(value)
                        }/>
                </div>
            </div>
            </div>
        </>
    )
}

export default Addtocart
