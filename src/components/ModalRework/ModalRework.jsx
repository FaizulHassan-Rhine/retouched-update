import React, { useContext, useEffect, useState } from "react";
import { OrderContextManager, apiUrlContextManager, userContextManager } from "../../App";
import { Link } from "react-router-dom";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import logo from '../../images/logo.png'

const ModalRework = ({ modalCallBackRework }) => {
    const [getUserInfo, setUserInfo, getToken, setToken] = useContext(userContextManager);
    const [getModelBaseUrl, setModelBaseUrl, getApiBasicUrl, setApiBasicUrl] = useContext(apiUrlContextManager);
    const [getServiceTypeId, setServiceTypeId, getSubscriptionPlanId, setSubscriptionPlanId, getOrderMasterId, setOrderMasterId, getCostDetails, setCostDetails, getOrderDetailInfo, setOrderDetailInfo, getLimitImg, setLimitImg, getLimitUploadImg, setLimitUploadImg] = useContext(OrderContextManager)
    const [reworkInvoiceInfo, setReworkreworkInvoiceInfo] = useState({});


    const showToastMessageWarning = (msg) => {
        toast.warning(msg, {
          position: toast.POSITION.TOP_RIGHT,
        });
      };

    const ReworkInvoiceFunc = () => {

        console.log(`${getApiBasicUrl}/rework-cost-breakdown?order_master_image_id=${getOrderMasterId}`)

        fetch(`${getApiBasicUrl}/rework-cost-breakdown?order_master_image_id=${getOrderMasterId}`, {
            headers: {
                'Authorization': 'bearer ' + getToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data); 
                setReworkreworkInvoiceInfo(data);
            })
            .catch(error => console.error("Failed to fetch order details:", error))

    }

    const reducePointRework = () => {

        console.log(getOrderMasterId);
        const orderId = {
            // "spendPoint": 0,
            "order_image_master_id": getOrderMasterId
        }


        fetch('http://192.168.1.7:8001/api/2024-04/reduce-user-points-on-rework', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + getToken
            },
            body: JSON.stringify(orderId),
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                data.status_code === 200 && closeModalRework();
                data.status_code !== 200 && showToastMessageWarning(data.message) 
                // Handle success here
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle errors here
            });
    };



    useEffect(() => {
        console.log(getOrderMasterId)
        document.querySelector('body').style.overflow = 'hidden';

        getOrderMasterId.length > 0 && ReworkInvoiceFunc()
    }, [getOrderMasterId]);

    const closeModalRework = () => {
        document.querySelector('body').style.overflow = 'visible';
        modalCallBackRework(false)
    }

    return (
        <div className="fixed inset-0 bg-white z-[9999] flex justify-center items-center">
            <div className="container mx-auto">
                <div >
                    <div className="bg-white flex flex-col items-center mt-10">
                        {/* <img className="h-8 w-44 mb-2" src={logo} alt="" /> */}
                        <p className="text-3xl font-bold">CREDIT OVERVIEW</p>
                    </div>
                    {/* {Object.keys(invoiceInfo).length > 0 && typeof invoiceInfo.results.order_detail_charge_breakdown !== 'undefined' &&  invoiceInfo.results && invoiceInfo.results.order_detail_charge_breakdown && invoiceInfo.results.order_detail_charge_breakdown.length > 0 && */}

                    {Object.keys(reworkInvoiceInfo).length > 0 && typeof reworkInvoiceInfo.results.order_master_charge_breakdown !== 'undefined' && reworkInvoiceInfo.results && reworkInvoiceInfo.results.order_master_charge_breakdown && reworkInvoiceInfo.results.order_master_charge_breakdown.length > 0 &&
                        <div className="flex justify-center mx-auto mt-5 gap-36 border-black border py-5 w-[700px] ">

                            <div className="flex flex-col justify-items-start items-start">
                                <p className="font-semibold text-sm">Date : <span className="font-normal"> {reworkInvoiceInfo.results.order_master_charge_breakdown[0].order_time}</span></p>
                                <p className="font-semibold  text-sm">Order No : <span className="font-normal"> {reworkInvoiceInfo.results.order_master_charge_breakdown[0].order_no}</span></p>
                                <p className="font-semibold  text-sm">Order Status : <span className="font-normal"> {reworkInvoiceInfo.results.order_master_charge_breakdown[0].order_status}</span> </p>
                            </div>



                            <div className="flex flex-col justify-items-start items-start">
                                <p className="font-semibold text-sm">Subscription : <span className="font-normal"> {reworkInvoiceInfo.results.order_master_charge_breakdown[0].order_subscription_plan_type}</span></p>
                                <p className="font-semibold  text-sm">Payment Status : <span className="font-normal"> {reworkInvoiceInfo.results.order_master_charge_breakdown[0].order_payment_status}</span></p>
                                <p className="font-semibold  text-sm">Raw Images : <span className="font-normal"> {reworkInvoiceInfo.results.order_master_charge_breakdown[0].order_no_of_images}</span></p>

                            </div>

                        </div>



                    }
                    {Object.keys(reworkInvoiceInfo).length > 0 && typeof reworkInvoiceInfo.results.order_master_charge_breakdown !== 'undefined' && reworkInvoiceInfo.results && reworkInvoiceInfo.results.order_master_charge_breakdown && reworkInvoiceInfo.results.order_master_charge_breakdown.length > 0 &&
                        <p className="font-semibold text-lg pt-5 ">Current Balance : <span className="font-normal"> {reworkInvoiceInfo.results.order_master_charge_breakdown[0].current_balance}</span> Credit(s)</p>
                    }

                    <div className=" w-[700px] mx-auto mt-5">
                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full text-left text-sm font-light">
                                            <thead class="border-b font-medium dark:border-neutral-500">
                                                <tr className="bg-gray-400">
                                                    <th scope="col" class="px-6 py-2">SL</th>
                                                    <th scope="col" class="px-6 py-2">Service</th>
                                                    <th scope="col" class="px-6 py-2">No.of Services</th>
                                                    <th scope="col" class="px-6 py-2">Credit/Image</th>
                                                    <th scope="col" class="px-6 py-2">Total Credit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Object.keys(reworkInvoiceInfo).length > 0 && typeof reworkInvoiceInfo.results.order_detail_charge_breakdown !== 'undefined' && reworkInvoiceInfo.results && reworkInvoiceInfo.results.order_detail_charge_breakdown && reworkInvoiceInfo.results.order_detail_charge_breakdown.length > 0 &&
                                                    reworkInvoiceInfo.results.order_detail_charge_breakdown.map((data, index) => (

                                                        <tr class="border-b dark:border-neutral-500">
                                                            <td class="whitespace-nowrap px-6 py-2 ">{index + 1}</td>
                                                            <td class="whitespace-nowrap px-6 py-2">{data.name}</td>
                                                            <td class="whitespace-nowrap px-6 text-center py-2">{data.totalImage}</td>
                                                            <td class="whitespace-nowrap text-center px-6 py-2">{data.point}</td>
                                                            <td class="whitespace-nowrap text-center px-6 py-2">{data.spend_point}</td>
                                                            {/* <td class="whitespace-nowrap px-6 py-2">{data.spend_point}</td> */}
                                                        </tr>
                                                    ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {Object.keys(reworkInvoiceInfo).length > 0 && typeof reworkInvoiceInfo.results.order_detail_charge_breakdown !== 'undefined' && reworkInvoiceInfo.results && reworkInvoiceInfo.results.order_detail_charge_breakdown && reworkInvoiceInfo.results.order_detail_charge_breakdown.length > 0 &&
                        <div className="flex justify-end w-[700px]  pt-3 pb-10 mx-auto gap-5">
                            <div>
                                <p className="font-bold text-sm mr-[55px]">Total Credit : <span className="font-normal"> {reworkInvoiceInfo.results.order_detail_charge_breakdown[0].spend_point}</span> </p> <hr></hr>

                            </div>

                        </div>
                    }


                    <div className="flex justify-center items-center gap-7">
                        <div>
                            <button onClick={reducePointRework} className="bg-white shadow-md  flex justify-center items-center text-gray-800 hover:text-green-500 font-bold text-2xl w-16 h-16 rounded-full"><GiCheckMark/></button>
                            <ToastContainer className="text-sm" />
                        </div>
                        <div>
                            <button onClick={closeModalRework} className="bg-white shadow-md  flex justify-center items-center text-gray-800 hover:text-red-500 font-bold text-2xl w-16 h-16 rounded-full"><GiCrossMark/></button>
                        </div>
                    </div>
                    <div className="w-[700px] mx-auto mt-7 " >
                        <hr className="mb-3"></hr>
                        <p className="text-xs text-center  mb-5"> <span className="font-bold">Address:</span> 2nd Floor, Navana DH Tower, Plot:06, Panthapath, Dhaka, Bangladesh   <span className="font-bold">Phone:</span> 02-55013583   <span className="font-bold">Email:</span> info@retouched.ai</p>
                    </div>




                </div>

            </div>
        </div>
    )
}
export default ModalRework;
