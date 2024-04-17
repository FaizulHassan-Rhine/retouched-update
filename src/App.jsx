import { Routes, Route } from "react-router-dom";

import { createContext, useState } from "react";
import ResetPassword from "./components/SignInForm/ResetPassword";
import SetPassword from "./components/SignInForm/SetPassword";
import HomePage from "./pages/HomePage";
import ViewUploadImageNew from "./components/ViewUploadImage/ViewUploadImageNew";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProfileInfo from "./components/Dashboard/ProfileInfo/ProfileInfo";
import MyOrder from "./components/MyOrder/MyOrder";
import OrderDetails from "./components/MyOrder/OrderDetails";
import { ToastContainer } from "react-toastify";
import Scroll from "./components/Scroll/Scroll";
import InitialDataLoad from "./components/InitialDataLoad/InitialDataLoad";

export const OrderContextManager = createContext();
export const userContextManager = createContext();
export const apiUrlContextManager = createContext();
export const FileContextManager = createContext();
export const menuContextManager = createContext();
const App = () => {
  const [fileInfo, setFileInfo] = useState([]);
  const [getImageUrl, setImageUrl] = useState("");
  const [getAfterBeforeImg, setAfterBeforeImg] = useState([]);
  const [getServiceTypeId, setServiceTypeId] = useState("");
  const [getUserInfo, setUserInfo] = useState({});
  const [getToken, setToken] = useState("p_k_hKqzczG8QEAdqdy0h5OMOO0ngQ4nawou");
  const [getOrderMasterId, setOrderMasterId] = useState(
    "00b93d49-c32b-46d5-a3cd-8b6c4d04b41f"
  );
  const [getSubscriptionPlanId, setSubscriptionPlanId] = useState("");
  const [getCostDetails, setCostDetails] = useState({});
  const [getOrderDetailInfo, setOrderDetailInfo] = useState([]);
  const [getModelBaseUrl, setModelBaseUrl] = useState("");
  const [getApiBasicUrl, setApiBasicUrl] = useState(
    "http://192.168.1.7:8001/api/2023-02"
  ); // for local server
  // const [getApiBasicUrl, setApiBasicUrl] = useState("https://103.197.204.22:8005/api/2023-02"); // for cpanel server
  // const [getApiBasicUrl, setApiBasicUrl] = useState("http://103.197.204.22:8007/api/2023-02"); // for cpanel server
  // const [getApiBasicUrl, setApiBasicUrl] = useState("https://api1.retouched.ai/api/2023-02"); // for cpanel server

  // const [getApiBasicUrl, setApiBasicUrl] = useState("https://103.197.204.22:8006/api/2023-02"); // for cpanel server for ssl
  // const [getApiBasicUrl, setApiBasicUrl] = useState("https://api1.retouched.ai:8006/api/2023-02"); // domain api with ssl
  // const [getApiBasicUrl, setApiBasicUrl] = useState("http://103.197.204.22:8005/api/2023-02");
  const [getLimitImg, setLimitImg] = useState(0);
  const [getLimitUploadImg, setLimitUploadImg] = useState(0);
  const [getMenuId, setMenuId] = useState("");
  const [getMenu, setMenu] = useState([]);
  const [getProccessImgIndex, setProccessImgIndex] = useState(0);
  const [getTotalImage, setTotalImage] = useState(0);
  return (
    <FileContextManager.Provider
      value={[
        fileInfo,
        setFileInfo,
        getAfterBeforeImg,
        setAfterBeforeImg,
        getProccessImgIndex,
        setProccessImgIndex,
        getTotalImage,
        setTotalImage,
        getImageUrl,
        setImageUrl,
      ]}
    >
      <OrderContextManager.Provider
        value={[
          getServiceTypeId,
          setServiceTypeId,
          getSubscriptionPlanId,
          setSubscriptionPlanId,
          getOrderMasterId,
          setOrderMasterId,
          getCostDetails,
          setCostDetails,
          getOrderDetailInfo,
          setOrderDetailInfo,
          getLimitImg,
          setLimitImg,
          getLimitUploadImg,
          setLimitUploadImg,
        ]}
      >
        <userContextManager.Provider
          value={[getUserInfo, setUserInfo, getToken, setToken]}
        >
          <apiUrlContextManager.Provider
            value={[
              getModelBaseUrl,
              setModelBaseUrl,
              getApiBasicUrl,
              setApiBasicUrl,
            ]}
          >
            <menuContextManager.Provider
              value={[getMenuId, setMenuId, getMenu, setMenu]}
            >
              <div className="App">
                <Scroll/>
                <InitialDataLoad/>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route
                    path="/reset-password/:token"
                    element={<ResetPassword />}
                  />
                  <Route
                    path="/confirm-password/:token"
                    element={<SetPassword />}
                  />
                  <Route
                    path="/upload-image"
                    element={<ViewUploadImageNew />}
                  />

                  <Route path="/profile/" element={<PrivateRoute />}>
                    <Route path="settings" element={<ProfileInfo />} />
                    <Route path="my-order" element={<MyOrder />} />
                  </Route>
                  <Route path="/order-details/" element={<OrderDetails />} />
                </Routes>
                <ToastContainer />
              </div>
            </menuContextManager.Provider>
          </apiUrlContextManager.Provider>
        </userContextManager.Provider>
      </OrderContextManager.Provider>
    </FileContextManager.Provider>
  );
};

export default App;
