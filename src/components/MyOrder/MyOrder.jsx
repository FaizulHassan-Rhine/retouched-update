import React, { useContext, useEffect, useState } from "react";
import { apiUrlContextManager, userContextManager } from "../../App";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { convertDate } from '../ComonFunc/ComonFunc';

const MyOrder = () => {
    const [getUserInfo, setUserInfo, getToken, setToken] = useContext(userContextManager);
    const [getModelBaseUrl, setModelBaseUrl, getApiBasicUrl, setApiBasicUrl] = useContext(apiUrlContextManager);
    const [orderDetailsInfo, setOrderDetailsInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Loading state

    const OrderDetailFunc = () => {
        setIsLoading(true); // Start loading
        fetch(getApiBasicUrl + "/user-order-master-info", {
            headers: {
                'Authorization': 'bearer ' + getToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrderDetailsInfo(data);
            })
            .catch(error => console.error("Failed to fetch order details:", error))
            .finally(() => setIsLoading(false)); // End loading
    }

    useEffect(() => {
        if (getUserInfo.status_code === 200) {
            OrderDetailFunc();
        }
    }, [getUserInfo]);

    if (isLoading) {
        return <div className="flex justify-center items-center h-[80vh]">
            <div className="loader-order"></div>
        </div>; // Show loading indicator while data is being fetched
    }
    return (
      <div className="bg-[#FAFAFA]">
        <Navbar/>
          <div className="container mx-auto  pb-10">
            <div className="flex justify-center ml-10 mb-5">
                <h2 className="text-2xl mt-4  font-bold"><i className="fa-solid mr-2 fa-basket-shopping"></i>ORDERS </h2>

            </div>
            {/* {Object.keys(orderDetailsInfo).length > 0 && console.log(orderDetailsInfo.results.user_order_master_info_list)} */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-4 mx-6">
                {Object.keys(orderDetailsInfo).length > 0 && orderDetailsInfo.results && typeof orderDetailsInfo.results.user_order_master_info_list !== 'undefined' &&
                    orderDetailsInfo.results.user_order_master_info_list != null && orderDetailsInfo.results.user_order_master_info_list.map((data, index) => (
                        <div className="w-72 mt-6 m-auto lg:mt-2 max-w-sm relative">

                            <div className="bg-white shadow-2xl rounded-xl p-4 flex flex-col">
                                {/* <h2 className="text-start text-gray-800 text-base font-bold ">Pending</h2> */}
                                <div className=" flex flex-col justify-items-start items-start">
                                    <p className="text-[16px]"> {data.is_order_placed === 1 ? "Delivered" : "Pending"}</p>
                                    <p className="text-[12px]">No of Images : {data.no_of_images}</p>
                                    <p className="text-[12px]">Order Date : {convertDate(data.order_time)}</p>
                                    {/* <p className="text-[12px]">Delivery Date : {data.delivery_date}</p> */}
                                </div>

                                <p className="bg-green-900 h-6 w-6 text-xs flex justify-center items-center rounded-full text-white text-center absolute top-2 right-2">{data.order_squence}</p>


                                <div className="flex justify-center items-center gap-2 mt-3">
                                
                                                {
                                                    data.orderImageDetails.map((imageData, index) =>
                                                        <>
                                                            {
                                                                index < 3 &&
                                                                <div>
                                                                    <img className="h-16 w-16 rounded-md" src={imageData.compressed_raw_image_public_url} />
                                                                </div>
                                                            }

                                                        </>

                                                    )
                                                }

                                </div>

                                <Link to={`/order-details/`}
                                state={{ orderData: data }} className="bg-[#dbe1e3] flex justify-center w-full items-center gap-2 px-6 m-auto mt-6 py-2 cursor-pointer rounded-md text-green-900 text-center shadow-md">
                                    <h1><FaEye/></h1>
                                    <button className="lg:text-sm text-lg font-normal">View</button>
                                </Link>

                            </div>
                        </div>
                    ))}
            </div>
        </div>
      </div>
    )
}

export default MyOrder


