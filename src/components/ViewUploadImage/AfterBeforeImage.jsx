import React, { useContext, useEffect, useState } from 'react';
import { FileContextManager } from '../../App';

import ReactCompareImage from "react-compare-image";


import { TIFFViewer } from 'react-tiff'
import Loading3 from '../Loading/Loading_3';



import 'react-tiff/dist/index.css'

const AfterBeforeImage = ({ proccesImages }) => {

    const [getRating, setRating] = useState(0)
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [ratio, setRatio] = useState(0);
    const [getImageStatus, setImageStatus] = useState(false);
    const [getCompleteImage, setCompleteImage] = useState({});

    const [fileInfo, setFileInfo, getAfterBeforeImg, setAfterBeforeImg, getProccessImgIndex, setProccessImgIndex, getTotalImage, setTotalImage] = useContext(FileContextManager);

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
    };

    const checkAiProccesDone = () => {
        //    const filePathLength=  proccesImages.file.webkitRelativePath.length;
        //    let found = false; 

        //     if(filePathLength > 0){
        //         found = getAfterBeforeImg.some(el => el.output_urls[0].filter_image_file_path === proccesImages.file.filePathLength);
        //     }else {
        //         found = getAfterBeforeImg.some(el => el.output_urls[0].filter_image_file_path === proccesImages.file.name);
        //     }

        console.log(getAfterBeforeImg)
        // const found = false; 
        const found = getAfterBeforeImg.some(el => el.output_urls[0].filter_image_file_path == proccesImages.file.name);
        // console.log(found + " : after before :  "+ getAfterBeforeImg[0].output_urls[0].filter_image_file_path  + " procces : "  + proccesImages.file.name)
        //    console.log(getAfterBeforeImg[0].output_urls[0].filter_image_file_path === proccesImages.file.name)
        if (found == false) {
            // setTimeout(()=>{checkAiProccesDone()},1000)
            console.log('image not found :' + found)
        } else {
            setImageStatus(true);
            const getData = getAfterBeforeImg.find(el => el.output_urls[0].filter_image_file_path == proccesImages.file.name)
            setCompleteImage(getData);
            console.log('image found : ' + found)
        }
    }

    const checkSelectImages = () => {
        checkAiProccesDone()
    }

    const imageRatiocheck = (imgFile) => {
        const img = new Image();
        img.src = proccesImages.imageUrl

        img.onload = () => {
            const { naturalWidth, naturalHeight } = img;
            const aspectRatio = naturalWidth / naturalHeight;

            setWidth(naturalWidth);
            setHeight(naturalHeight);
            setRatio(aspectRatio);
        };
    }

    useEffect(() => {
        imageRatiocheck(proccesImages.imageUrl);
    }, [])

    useEffect(() => {
        getImageStatus == false && checkSelectImages();
    }, [getAfterBeforeImg])

    return (
        <>
            <div className="h-[400px] w-full lg:w-96  rounded-lg shadow-lg relative">
                <div className="h-full img-bag flex flex-col justify-center">
                    {/* {
                        getImageStatus ?
                            <CompareImageWithButton
                                topImage={getCompleteImage.output_urls[0].compressed_raw_image_public_url}
                                bottomImage={getCompleteImage.output_urls[0].default_compressed_output_public_url}
                            />
                            :
                            <img className={`mx-auto ${ratio > 1 ? 'w-full' : 'h-full'}`} src={proccesImages.imageUrl} />

                    } */}

                    {
                        getImageStatus ?
                            // <ReactCompareImage
                            //     leftImage={proccesImages.output_urls[0].compressed_raw_image_public_url}
                            //     rightImage={proccesImages.output_urls[0].default_compressed_output_public_url}
                            // />
                            <ReactCompareImage  
                          
                            leftImage={getCompleteImage.output_urls[0].compressed_raw_image_public_url}
                            rightImage={getCompleteImage.output_urls[0].default_compressed_output_public_url}
                            />

                            :
                            proccesImages.file.type === 'image/tiff' ?
                                <TIFFViewer tiff={proccesImages.imageUrl} className={`mx-auto w-full h-full}`} />
                                :
                                <img className={`mx-auto ${ratio > 1 ? 'w-full' : 'h-full'}`} src={proccesImages.imageUrl} />
                    }

                </div>
                {/* <p className="text-sm font-semibold mt-2">Rate this result <i onClick={() => setRating(1)} className={`fa-solid fa-face-smile cursor-pointer ${getRating == 1 ? 'text-green-900' : 'text-green-600'}`}></i> <i onClick={() => setRating(2)} className={`fa-solid fa-face-frown cursor-pointer ${getRating == 2 ? 'text-green-900' : 'text-green-600'}`}></i></p>
                <p className="text-[9px] font-semibold mt-2">Don't forget to download your files. They will be discarded automatically after 60 minutes </p> */}
                {/* <div className='flex justify-center items-center gap-2 pt-4'>
                <button
      className={`w-8 h-8 rounded-full bg-gray-300 text-white text-2xl flex items-center justify-center focus:outline-none ${isActive ? 'bg-green-500' : ''}`}
      onClick={handleClick}
    >
      {isActive ? '✓' : '+'}
    </button>
    <h1>Pro Touch-up</h1>
                </div> */}

                {
                    getImageStatus == false &&
                    <div className='loadingImg absolute top-[50%] left-[50%]' style={{ transform: 'translate(-50%)' }} > <Loading3 /></div>
                }

            </div>



        </>
    );
};

export default AfterBeforeImage;