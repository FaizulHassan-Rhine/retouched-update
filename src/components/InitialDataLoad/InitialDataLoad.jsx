import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { apiUrlContextManager, menuContextManager, OrderContextManager, userContextManager } from '../../App';
import localforage from 'localforage';




const InitialDataLoad = () => {


  const [getServiceTypeId, setServiceTypeId, getSubscriptionPlanId, setSubscriptionPlanId, getOrderMasterId, setOrderMasterId, getCostDetails, setCostDetails, getOrderDetailInfo, setOrderDetailInfo, getLimitImg, setLimitImg, getLimitUploadImg, setLimitUploadImg] = useContext(OrderContextManager);
  const [getUserInfo, setUserInfo, getToken, setToken] = useContext(userContextManager);
  const [getModelBaseUrl, setModelBaseUrl, getApiBasicUrl, setApiBasicUrl] = useContext(apiUrlContextManager);
  const [getMenuId, setMenuId, getMenu, setMenu] = useContext(menuContextManager)

  const location = useLocation();

  async function fetchManifestData() {
    try {
      const response = await fetch('/manifest.json'); // Relative path to the manifest file
      if (!response.ok) {
        throw new Error('Failed to fetch manifest.json');
      }
      const data = await response.json();
      setApiBasicUrl(data.api_url);
      return 'success'; 
    } catch (error) {
      console.error(error);
      return 'error';
    }
  }

  const defaultSettingFunc = (token) => {
    console.log(token)
    fetch(getApiBasicUrl + "/default-settings", {
      headers: {
        'Authorization': 'bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.status_code == 200) {
          console.log(data);
          console.log("limit image : " + data.results.default_settings[0].no_of_image_limit)
          // setModelBaseUrl("https://192.168.1.218:8010/v.03.13.23/")
          setModelBaseUrl(data.results.default_settings[0].model_base_url)

          setServiceTypeId(data.results.default_settings[0].service_type_id)
          setSubscriptionPlanId(data.results.default_settings[0].subscription_plan_type_id)
          setLimitUploadImg(data.results.default_settings[0].processable_image_qty_limit)
          setLimitImg(data.results.default_settings[0].downloadable_image_qty_limit)
          setMenuId(data.results.default_settings[0].menu_id)
        }
      })
  }
  const tokenValidationFunc = async (token) => {
    const response = await fetch(getApiBasicUrl + "/token-validation?token=" + token, {
      method: "POST", // or 'PUT'
    });
    const data = await response.json();
    return data.results.token.user_logged_in;
  };
  // const getUserInfoFunc = () => {

  //   localforage.getItem("userInfo").then(data => {
  //     if (data !== null && Object.keys(data).length > 0) {

  //       console.log(data)
  //       const tokenValid = tokenValidationFunc(data.results.token); 
  //       console.log("check token : " + tokenValid)
  //       if(tokenValid){
  //         console.log("token valid"); 
  //         setUserInfo(data);
  //         setToken(data.results.token);
  //         defaultSettingFunc(data.results.token)
  //       }else{
  //         console.log("invalid token")
  //       }

  //     }
  //   }).catch((error) => { console.log(error) });
  // }

  const getUserInfoFunc = async () => {
    try {
      const data = await localforage.getItem("userInfo");
      if (data !== null && Object.keys(data).length > 0) {
        const tokenValid = await tokenValidationFunc(data.results.token);
        console.log("check token : " + tokenValid);
        if (tokenValid) {
          console.log("token valid");
          setUserInfo(data);
          setToken(data.results.token);
          defaultSettingFunc(data.results.token);
        } else {
          localforage.removeItem("userInfo");
          console.log("invalid token");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    defaultSettingFunc(getToken);
    getUserInfoFunc()

  }, [getToken]);

  return (
    <>
      {console.log("testingggg ")}
    </>
  );
};

export default InitialDataLoad;