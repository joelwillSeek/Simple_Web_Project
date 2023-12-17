import "../css/style.css";

import { hide_or_show_dropdown, initialize } from "./drop_down_functionality";

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import svg1 from "../assets/arrow-left.svg";
import svg2 from "../assets/arrow-right.svg";
import carosuel from "./image_slide_show";

let button_shower = document.querySelector("button.shower");

let div_that_has_images = document.querySelector(
  "header .carosuel_container .carousel_for_moving"
);

/**
 * @type {SVGForeignObjectElement}
 */
let img_menu_icon = document.querySelector("nav button.shower object");

let ul_to_hide_and_show = document.querySelector(".drop_down");

let array_of_img_in_image_slider = document.querySelectorAll(
  "header .carosuel_container .carousel_for_moving div.img"
);

let array_of_img_next_and_previous_for_carousel = document.querySelectorAll(
  "header .slider_buttons button img"
);

let button_left_slider = document.querySelector(
  "header .slider_buttons button#left_most"
);

let button_right_slider = document.querySelector(
  "header .slider_buttons button#right_most"
);

let hr_horizontal_bar_image_order = document.querySelectorAll(
  "header .horizontal_indicators hr"
);

array_of_img_in_image_slider.forEach(
  /**
   *
   * @param {HTMLImageElement} img
   */
  (img, index) => {
    /**
     * @type {Array<String>}
     */
    let img_list = [bg1, bg2, bg3];

    //make it so that the last img becomes the first and first img becomes the last
    if (img.id == "last_clone") {
      img.style.backgroundImage = "url(" + img_list[img_list.length - 1] + ")";
    } else if (img.id == "first_clone") {
      img.style.backgroundImage = "url(" + img_list[0] + ")";
    } else {
      img.style.backgroundImage = "url(" + img_list[index - 1] + ")";
    }
  }
);

array_of_img_next_and_previous_for_carousel.forEach((img, index) => {
  let list_of_img = [svg1, svg2];
  img.src = list_of_img[index];
});

button_shower.addEventListener("click", () => {
  hide_or_show_dropdown();
});

carosuel(
  button_left_slider,
  button_right_slider,
  div_that_has_images,
  array_of_img_in_image_slider[1],
  array_of_img_in_image_slider.length,
  hr_horizontal_bar_image_order,
  true
);

initialize(ul_to_hide_and_show);
