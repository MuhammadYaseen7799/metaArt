import { useEffect, useState } from "react";
import axios from "axios"; // Import the axios library
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
const HeroSlider = () => {
  // Hero slider
  useEffect(() => {
    const fn_cs_slider = document.querySelectorAll(".fn_cs_slider");
    fn_cs_slider.forEach((element) => {
      let sliderTop = element.getElementsByClassName("slider_top")[0],
        sliderBottom = element.getElementsByClassName("slider_content"),
        activeIndex = 2,
        speed = 6000;

      let myInterval = setInterval(function () {
        activeIndex++;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
      }, speed);
      const prev = document.querySelector(".slider_nav .prev"),
        next = document.querySelector(".slider_nav .next"),
        li = element.getElementsByTagName("li");
      prev.addEventListener("click", function (e) {
        e.preventDefault();
        clearInterval(myInterval);
        activeIndex--;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex++;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      });
      next.addEventListener("click", (e) => {
        e.preventDefault();
        clearInterval(myInterval);
        activeIndex++;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex--;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      });
      for (let i = 0; i < li.length; i++) {
        const liElement = li[i];
        const getClass = liElement.getAttribute("class");
        if (getClass === "next") {
          activeIndex++;
        } else if (getClass === "prev") {
          activeIndex--;
        } else {
          return false;
        }
        clearInterval(myInterval);
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex++;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      }
    });
  }, []);

  const sliderDo = (sliderTop, sliderBottom, activeIndex) => {
    var topLength = sliderTop.getElementsByTagName("li").length;
    if (activeIndex > topLength) {
      activeIndex -= topLength;
    }
    var indexPrev = activeIndex - 1;
    var indexPrev2 = activeIndex - 2;
    var indexNext = activeIndex + 1;
    var indexNext2 = activeIndex + 2;
    if (indexPrev > topLength) {
      indexPrev -= topLength;
    }
    if (indexPrev2 > topLength) {
      indexPrev2 -= topLength;
    }
    if (indexNext > topLength) {
      indexNext -= topLength;
    }
    if (indexNext2 > topLength) {
      indexNext2 -= topLength;
    }
    if (indexPrev < 1) {
      indexPrev += topLength;
    }
    if (indexPrev2 < 1) {
      indexPrev2 += topLength;
    }
    if (activeIndex < 1) {
      activeIndex += topLength;
    }
    if (indexNext < 1) {
      indexNext += topLength;
    }
    if (indexNext2 < 1) {
      indexNext2 += topLength;
    }
    let li = sliderTop.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      const element = li[i];
      element.classList.remove("prev", "prev2", "active", "next", "next2");
      // element.setAttribute(`data-index${indexNext}`);
    }
    sliderTop
      .querySelector('li[data-index="' + indexPrev2 + '"]')
      .classList.add("prev2");
    sliderTop
      .querySelector('li[data-index="' + indexPrev + '"]')
      .classList.add("prev");
    sliderTop
      .querySelector('li[data-index="' + activeIndex + '"]')
      .classList.add("active");
    sliderTop
      .querySelector('li[data-index="' + indexNext + '"]')
      .classList.add("next");
    sliderTop
      .querySelector('li[data-index="' + indexNext2 + '"]')
      .classList.add("next2");
    return activeIndex;
  };

  const [TextAreaValue, setTextAreaValue] = useState();
  const [result, setResult] = useState();
  const [ImgStyle, setImgStyle] = useState(null); // border image or set model pick
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); //image pop up dialog
  const [loadImage, setLoadImage] = useState(true); // image loader while gener
  const openImageDialog = () => {
    setModalIsOpen(true);
  };

  const closeImageDialog = () => {
    setModalIsOpen(false);
  };
  const model_styles = [
    "juggernaut-xl",
    "xsdmodelx",
    "dream-shaper-8797",
    "midjourney",
    "sdxl-unstable-diffusers-y",
    "ae-sdxl-v1",
    "crystal-clear-xlv1",
    "sdxl",
  ];
  const model_img_paths = [
    "/img/Model/juggernaut-xl.jpg",
    "/img/Model/xsdmodelx.jpg",
    "/img/Model/dream-shaper-8797.jpg",
    "/img/Model/midjourney.jpg",
    "/img/Model/sdxl-unstable-diffusers-y.jpg",
    "/img/Model/AE-SDXL-V1-Model1.jpg",
    "/img/Model/crystal-clear-xlv1.jpg",
    "/img/Model/SDXL.jpg",
  ];
  const API_ENDPOINT = "https://stablediffusionapi.com/api/v4/dreambooth";
  useEffect(() => {
    console.log("result", result);
  }, [result]);
  const HandleAPICall = async (ModelId) => {
    try {
      const model_id = ModelId;
      setLoadImage(false);
      const requestData = {
        key: "qw74CWfWQv2CCCseTU9LlNwKBlACUwCYxkra9ZYbWqC6r1tL5YuLiVgUaBoJ",
        prompt: TextAreaValue, // Use the textarea value
        negative_prompt:
          "(text, watermark:2.0), gaussian noise, worst quality, ...", // Your negative prompt
        model_id: model_id,
        width: "1024",
        height: "1024",
        samples: "1",
        num_inference_steps: "50",
        safety_checker: "yes",
        enhance_prompt: "no",
        seed: null,
        guidance_scale: 15,
        panorama: "yes",
        multi_lingual: "no",
        lora_model: "more_details_XL",
        lora_strength: "1",
        upscale: 1,
      };

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      setLoadImage(true);
      if (response.ok) {
        const responseData = await response.json();

        // Check for data in the response
        if (
          responseData.status === "success" &&
          responseData.output &&
          responseData.output.length > 0
        ) {
          setResult(responseData.output[0]);
          openImageDialog();

          // Store the URL in the result state
        } else if (responseData.status === "processing") {
          console.log(
            "API response is still processing. You may need to wait and check again."
          );
        } else {
          console.error(
            "API response does not contain valid data:",
            responseData
          );
        }
      } else {
        console.error("API request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const handleOpenResult = () => {
  //   if (result) {
  //     window.open(result, "_blank"); // Open the URL in a new tab
  //   }
  // };

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value); // Update the state with the new value
  };
  useEffect(() => {
    // console.log('text' , TextAreaValue);
  }, [TextAreaValue]);
  return (
    <section id="home">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="META ART"
          data-align="center"
        >
          META ART
        </h3>
        {/* Slider */}
        <div className="fn_cs_slider" data-responsive="on">
          <div className="slider_top">
            <img src="/img/1x1.jpg" alt="" />
            <ul>
              <li className="prev" data-index={1}>
                <div className="item">
                  <img src="/img/1x1.jpg" alt="" />
                  <div className="item_in">
                    <div className="img" data-bg-img="/img/slider/1.png" />
                  </div>
                </div>
              </li>
              <li className="active" data-index={2}>
                <div className="item">
                  <img src="/img/1x1.jpg" alt="" />
                  <div className="item_in">
                    <div className="img" data-bg-img="/img/slider/2.png" />
                  </div>
                </div>
              </li>
              <li className="next" data-index={3}>
                <div className="item has_video">
                  <img src="/img/1x1.jpg" alt="" />
                  <a
                    className="popup-youtube metaportal_fn_videobutton" //video link code
                    href=""
                  >
                    <img src="/svg/play.svg" alt="" className="fn__svg" />
                  </a>
                  <div className="item_in">
                    <div className="img" data-bg-img="/img/slider/3.png" />
                  </div>
                </div>
              </li>
              <li className="next2" data-index={4}>
                <div className="item">
                  <img src="/img/1x1.jpg" alt="" />
                  <div className="item_in">
                    <div className="img" data-bg-img="/img/slider/4.png" />
                  </div>
                </div>
              </li>
              <li data-index={5}>
                <div className="item">
                  <img src="/img/1x1.jpg" alt="" />
                  <div className="item_in">
                    <div className="img" data-bg-img="/img/slider/5.png" />
                  </div>
                </div>
              </li>
              <li data-index={6}>
                <div className="item">
                  <img src="/img/1x1.jpg" alt="" />
                  <div className="item_in">
                    <div className="img" data-bg-img="/img/slider/6.png" />
                  </div>
                </div>
              </li>
              <li className="prev2" data-index={7}>
                <div className="item">
                  <img src="/img/1x1.jpg" alt="" />
                  <div className="item_in">
                    <div className="img" data-bg-img="/img/slider/7.png" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="slider_nav">
            <a href="#" className="prev">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
            <a href="#" className="next">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
          </div>
        </div>
        {/* !Slider */}
        {/* Description */}
        <div className="fn_cs_desc">
          <h4>Write your own prompt to generate your dream art</h4>
          <TextareaAutosize
            minRows={2}
            value={TextAreaValue}
            onChange={handleTextAreaChange} // Correctly call the function
          ></TextareaAutosize>
          <br></br>

          {/* {IsDataLoading? <Button variant="contained" onClick={HandleAPICall("juggernaut-xl")} >Generate</Button> : <CircularProgress/>} */}

          {/* <Button variant="outline" onClick={() => {  setImgStyle("juggernaut-x") }} load> Style 1</Button>
          <Button variant="outline" onClick={() => { setImgStyle("ae-sdxl-v1") }} load> Style 2</Button> */}
          <Box display={"flex"} flexWrap={"wrap"} boxSizing={"border-box"}>
            {model_styles.map((model_id, index) => ( // loop maper
              <div
                key={index}
                style={{
                  flexBasis: "20%",
                  padding: "5px", // Adjust the padding as needed
                  boxSizing: "border-box", // Include padding in the width calculation
                  transition: "transform 0.2s ease-in-out", // Add a smooth transition
                  borderRadius: "10px", // Rounded border
                }}
                onClick={() => {
                  setSelectedImage(index);
                  setImgStyle(model_styles[index]);
                }}
              >
                <img
                  src={model_img_paths[index]}
                  width={"80%"}
                  height={"110px"}
                  style={{
                    borderRadius: "10px",
                    boxShadow: "initial",
                    border:
                      selectedImage === index ? "5px solid white" : "none", // Highlight selected image
                  }}
                  alt={model_id}
                  // Add hover effect
                  onMouseOver={() => {
                    // Scale up on hover
                    document.getElementById(`image-${index}`).style.transform =
                      "scale(1.1)";
                  }}
                  onMouseOut={() => {
                    // Reset on hover out
                    document.getElementById(`image-${index}`).style.transform =
                      "scale(1)";
                  }}
                  id={`image-${index}`}
                />
              </div>
            ))}
          </Box>

          {loadImage ? (
            <Button
              variant="contained"
              disabled={selectedImage == null ? true : false}
              onClick={() => {
                HandleAPICall(ImgStyle);
              }}
              width={"100%"}
              sx={{
                marginTop: "20px",
                backgroundColor: "white",
                color: "purple",
                fontWeight: "bold",
              }}
            >
              Generate
            </Button>
          ) : (
            <CircularProgress sx={{ marginTop: "20px" }} />
          )}

          {result && (
            <Dialog onClose={closeImageDialog} open={modalIsOpen} maxWidth>
              <Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>The image in response to your prompt</Typography>
                  <IconButton>
                    <SaveAltIcon />
                  </IconButton>
                </Box>
                <img
                  src={result}
                  alt="Generated Image"
                  width={"500px"}
                  height={"500px"}
                />
              </Box>
            </Dialog>
            // <div>
            //   <img src={result} alt="Generated Image" />
            //   <br />
            //   <button onClick={handleOpenResult}>Open Result in Browser</button>
            // </div>
          )}
        </div>
        {/* !Description */}
      </div>
    </section>
  );
};
export default HeroSlider;
