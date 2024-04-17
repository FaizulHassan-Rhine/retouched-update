import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  FileContextManager,
  apiUrlContextManager,
  userContextManager,
} from "../../App";
import sample_img_1 from '../../../public/images/1.jpg'
import sample_img_2 from '../../../public/images/2.jpg'
import sample_img_3 from '../../../public/images/3.jpg'
import sample_img_4 from '../../../public/images/4.jpg'


const HomeContainer = () => {
  const [
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
  ] = useContext(FileContextManager);
  const [getUserInfo, setUserInfo, getToken, setToken] =
    useContext(userContextManager);
  const [getModelBaseUrl, setModelBaseUrl, getApiBasicUrl, setApiBasicUrl] =
    useContext(apiUrlContextManager);

  const navigate = useNavigate();

  const uploadFile = (e) => {
    const newFile = e.target.files;
    setAfterBeforeImg([]);
    setFileInfo(newFile);
    navigate("/upload-image");
  };

  const pastUrlPrompt = () => {
    let person = prompt("Image URL:");
    if (person != null) {
      //   do action here
      console.log(person);
      checkAiProccesDone(person);
    }
  };
  const checkAiProccesDone = (imgFile) => {
    const myCallback = (result) => {
      if (result == "success") {
        setFileInfo([]);
        setAfterBeforeImg([]);

        const fileObject = { file: imgFile, imageUrl: imgFile, rework: false };
        setFileInfo((fileInfo) => [...fileInfo, fileObject]);
        navigate("/upload-image");
      } else {
        console.log("unsuccess is");
        setTimeout(() => checkAiProccesDone(imgFile), 1000);
      }
    };
    testImage(imgFile, myCallback);
  };

  function testImage(url, callback, timeout) {
    timeout = timeout || 5000;
    var timedOut = false,
      timer;
    var img = new Image();
    img.src = url;
    img.onerror = img.onabort = function () {
      if (!timedOut) {
        clearTimeout(timer);
        callback("error");
      }
    };
    img.onload = function () {
      if (!timedOut) {
        clearTimeout(timer);
        callback("success");
      }
    };

    timer = setTimeout(function () {
      timedOut = true;
      callback("timeout");
    }, timeout);
  }

  const sampleImageFunc = (img) => {
      setAfterBeforeImg([])

      const base_url = window.location.origin;
      const full_url = base_url + img;
      const fileObject = { file: full_url, imageUrl: full_url, rework: false};
      setFileInfo((fileInfo) => [...fileInfo, fileObject]);
      navigate('/upload-image')
  }
  // const navbarHeight = 48;

  // const availableHeight = `calc(100vh - ${navbarHeight}px)`;
  return (
    <>
    {/* <Navbar/> */}
      <div className="relative ">
        <div
          className="flex justify-center items-center"
          // style={{ height: availableHeight }}
        >
          <video className=" object-cover lg:-mt-28 w-full h-[40vh] lg:h-full" autoPlay loop muted>
            <source src="/videos/bg.webm" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=" w-full flex justify-center rounded-md">
          <div className="absolute rounded-md top-[80px] lg:right-[100px] p-5 shadow-md bg-white justify-items-center  flex flex-col items-center  xl:items-center">
            <div className="w-full lg:w-[350px] flex flex-col gap-3 md:gap-9">
              <div className="flex flex-col items-center">
                <h2 className=" font-extrabold tracking-[2px] leading-[35px] text-3xl lg:text-3xl text-center lg:text-center text-[#333333]">
                  Remove Image Background
                </h2>
                <p className="text-[#02ce8f] text-lg pt-1 md:pt-4 text-center  font-semibold">
                  Completely Free and Automatic
                </p>
              </div>
              <div>
                <div className="flex flex-col items-center  w-full  py-[16px] px-[40px] shadow-xl rounded-3xl">
                  <button
                    onClick={() =>
                      document.getElementById("singleImagePick").click()
                    }
                    className="bg-[#003333] mx-auto hover:bg-[#001515] transition-all py-[14px] px-[40px] text-white font-extrabold rounded-[48px] text-xl"
                  >
                    Upload Image
                  </button>
                  <p className="font-bold pt-4 text-xl">or drop a file,</p>
                  <p className="font-semibold text-[13px]">
                    paste image or{" "}
                    <span
                      onClick={pastUrlPrompt}
                      className="underline cursor-pointer"
                    >
                      URL
                    </span>
                  </p>
                </div>
                <div className=" flex flex-col md:flex-row justify-center items-center gap-3  mt-4 lg:mt-8">
                  <div className="text-left flex md:flex-col font-semibold text-xs">
                    <h2>No image?</h2>
                    <h2>Try one of these:</h2>
                  </div>
                  <div className="flex gap-3 ">
                                        <img onClick={() => sampleImageFunc(sample_img_1)} className="h-10 rounded-md w-12 cursor-pointer hover:scale-110 transition duration-500 ease-in-out" src={sample_img_1} />
                                        <img onClick={() => sampleImageFunc(sample_img_2)} className="h-10 rounded-md w-12 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" src={sample_img_2} />
                                        <img onClick={() => sampleImageFunc(sample_img_3)} className="h-10 rounded-md w-12 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" src={sample_img_3} />
                                        <img onClick={() => sampleImageFunc(sample_img_4)} className="h-10 rounded-md w-12 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" src={sample_img_4} />
                                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
