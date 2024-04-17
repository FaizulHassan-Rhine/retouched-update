import React, { useContext, useEffect, useState } from "react";

import { FileContextManager, OrderContextManager } from "../../App";
import { useNavigate } from "react-router-dom";
import PopupMessage from "../PopUp/PopupMessage";

const HiddenUploadFile = () => {
    const [getPopBool, setPopBool] = useState(false);
    const [getMsg, setMsg] = useState('');
    const [fileInfo, setFileInfo, getAfterBeforeImg, setAfterBeforeImg] = useContext(FileContextManager);
    const [getServiceTypeId, setServiceTypeId, getSubscriptionPlanId, setSubscriptionPlanId, getOrderMasterId, setOrderMasterId, getCostDetails, setCostDetails, getOrderDetailInfo, setOrderDetailInfo, getLimitImg, setLimitImg, getLimitUploadImg] = useContext(OrderContextManager);

    const navigate = useNavigate();

    const uploadFile = (e) => {
        const newFile = e.target.files;

        setFileInfo([]);
        setAfterBeforeImg([]);
        console.log(" new file length : " + newFile.length + " get limit upload: " + getLimitUploadImg);
        if (newFile.length > getLimitUploadImg) {
            setMsg(`Attention! Your current subscription limits the upload of more than ${getLimitUploadImg} images.`)
            // setMsg(`You can not upload more than ${getLimitUploadImg} images`);
            setPopBool(true)
        } else {

            for (const file of newFile) {
                if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/tiff" || file.type == "image/tif") {
                    const imageUrl = URL.createObjectURL(file);
                    const fileObject = { file: file, imageUrl: imageUrl, rework: false};
                    setFileInfo((fileInfo) => [...fileInfo, fileObject]);
                }
            }
            navigate('/upload-image')
        }
    };

    const PopupCloseFunc = () => {
        setPopBool(false);
        document.getElementById('singleImagePick').value = "";
    }

    return (
        <>
            {getPopBool && <PopupMessage msg={getMsg} callBackCloseFunc={PopupCloseFunc} dark={true} />}
            <input
                onChange={uploadFile}
                type="file"
                id="singleImagePick"
                name="imageFile"
                className="hidden"
                accept="image/jpeg, image/png, image/tiff,.tif"
                multiple
            />
        </>
    )
}

export default HiddenUploadFile;