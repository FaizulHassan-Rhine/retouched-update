import  {  useContext,  useState } from "react";


import { useNavigate } from "react-router-dom";

import HomeContainer from "../components/HomeContainer/HomeContainer";
import Navbar from "../components/Navbar/Navbar";
import { FileContextManager, OrderContextManager } from "../App";
import PopupMessage from "../components/PopUp/PopupMessage";
import HiddenUploadFile from "../components/FileUploadPage/HiddenUploadFile";
import HowToUse from "../components/HowToUse/HowToUse";


// const Illustration = lazy(() => import("../IllustrationPart/IllustrationPart"));

const HomePage = () => {

    const [getDrugBool, setDrugBool] = useState(false);
    const [fileInfo, setFileInfo, getAfterBeforeImg, setAfterBeforeImg] = useContext(FileContextManager);
    const [getServiceTypeId, setServiceTypeId, getSubscriptionPlanId, setSubscriptionPlanId, getOrderMasterId, setOrderMasterId, getCostDetails, setCostDetails, getOrderDetailInfo, setOrderDetailInfo, getLimitImg, setLimitImg, getLimitUploadImg] = useContext(OrderContextManager);
    const [getPopBool, setPopBool] = useState(false);
    const [getMsg, setMsg] = useState('');
    const [elementVisible, setElementVisible] = useState(false)

    const navigate = useNavigate();

    function dragOverHandler(e) {
        console.log("File(s) in drop zone");
        setDrugBool(true)
        // Prevent default behavior (Prevent file from being opened)
        e.preventDefault();
    }

    function dropHandler(ev) {
        console.log("File(s) dropped");
        setFileInfo([]);
        setAfterBeforeImg([]);
        setDrugBool(false)

        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        var imageTypes = ['image/png', 'image/jpeg'];

        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            // let files = [];
            if (ev.dataTransfer.items.length > getLimitUploadImg) {
                setMsg(`Attention! Your current subscription limits the upload of more than ${getLimitUploadImg} images.`)
                // setMsg(`You can not upload more than ${getLimitUploadImg} images`);
                setPopBool(true)
            } else {
                [...ev.dataTransfer.items].forEach((item, i) => {
                    // If dropped items aren't files, reject them
                    const fileType = item.type;
                    console.log("fileType : " + fileType)
                    if (imageTypes.includes(fileType)) {

                        const file = item.getAsFile();
                        // files.push(file)
                        const imageUrl = URL.createObjectURL(file);
                        const fileObject = { file: file, imageUrl: imageUrl, rework: false };
                        setFileInfo((fileInfo) => [...fileInfo, fileObject]);

                        console.log(`… file[${i}].name = ${file.name}`);
                        navigate('/upload-image')

                    } else {
                        //  window.alert('dropped file is not an image');
                    }

                    // if (item.kind === "file") {
                    //     const file = item.getAsFile();
                    //     files.push(file)
                    //     console.log(`… file[${i}].name = ${file.name}`);
                    // }
                });
                // setFileInfo(files);
            }

        }

    }

    const dragEnterHandler = (e) => {
        e.preventDefault();
        setDrugBool(true)
    }
    const dragLeaveHandler = (e) => {
        e.preventDefault();
        setDrugBool(false)
    }
    function handlePaste(event) {
        // Handle paste event
        const imgUrl = event.clipboardData.getData('text/plain')
        console.log('Content pasted:', imgUrl);
        // setImg(imgUrl)
    }
    const PopupCloseFunc = () => {
        setPopBool(false);
    }

    function pastFileFunc(e) {
        // e.preventDefault();
        setFileInfo([])
        setAfterBeforeImg([])
        const currentLocation = window.location.pathname;
        console.log("location : " + currentLocation)


        const newFile = e.clipboardData.files
        let x = 0;
        let imageTypes = ['image/png', 'image/jpeg', "image/tiff"];

        for (const file of newFile) {
            if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/tiff") {
                const imageUrl = URL.createObjectURL(file);
                const fileObject = { file: file, imageUrl: imageUrl, rework: false  };
                setFileInfo((fileInfo) => [...fileInfo, fileObject]);
                x = imageTypes.includes(file.type) && x + 1;
            }
        }

        x > 0 && navigate('/upload-image')

        window.removeEventListener('paste', pastFileFunc);

    }
    // copy file and past on browswer
    window.addEventListener('paste', pastFileFunc, { once: true });


    return (
        <>
      
         <Navbar/>

        
            <div
                id="homeContainer"
                onDrop={dropHandler}
                onDragOver={dragOverHandler}
                onPaste={handlePaste}
       
            >
            <HomeContainer/>
            <HowToUse/>
               
             <HiddenUploadFile/>
           
                {getDrugBool && <img className="fixed w-full h-full top-0 left-0 opacity-90 z-50" src={require('../../public/images/logo.png')} />}
            </div>
            {getPopBool && <PopupMessage msg={getMsg} callBackCloseFunc={PopupCloseFunc} dark={true} />}

        </>
    )
}

export default HomePage;