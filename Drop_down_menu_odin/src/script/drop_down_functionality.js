/**
 * The code is hard coded for only fade in and out
 *
 *first call initialize function
 *
 * hides the drop down else where
 */

let hidden = true;

let duration_of_fade = 300;

let ul_list;

let initialize = (ul_list_element) => {
  ul_list = ul_list_element;
  ul_list.style.transform = "translateX(2000px) ";
  ul_list.style.opacity = "0%";
};

/**
 *
 * @param {HTMLUListElement} ul_list
 * @param {HTMLButtonElement} button_shower
 */
//after opacity is 0% hide it to the left
let hide_or_show_dropdown = () => {
  let hold_time_out;

  if (!hidden) {
    clearTimeout(hold_time_out);
    ul_list.style.opacity = "0%";

    hold_time_out = setTimeout(() => {
      ul_list.style.transform = "translateX(2000px)";
    }, duration_of_fade);
  } else {
    clearTimeout(hold_time_out);

    ul_list.style.transform = "translateX(0px)";

    hold_time_out = setTimeout(() => {
      ul_list.style.opacity = "100%";
    }, 0);
  }

  hidden = !hidden;
};

export { hide_or_show_dropdown, initialize };
