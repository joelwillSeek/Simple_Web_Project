let counter = 1;
let horizontal_bar_position = 0;
/**
 *
 * @param {HTMLButtonElement} button_left_slide
 * @param {HTMLButtonElement} button_right_slide
 * @param {HTMLDivElement} flex_container
 * @param {HTMLDivElement} image_to_measure_width
 * @param {Number} number_of_images
 * @param {Array<Element>} horizontal_bar_image_order
 */
let carosuel = (
  button_left_slide,
  button_right_slide,
  flex_container,
  image_to_measure_width,
  number_of_images,
  horizontal_bar_image_order,
  stop_slideing
) => {
  let size = image_to_measure_width.clientWidth;

  flex_container.style.transform = "translateX(" + -size * counter + "px)";

  horizontal_bar_image_order[0].classList.add("selected_bar");

  let to_right_sliding_image = () => {
    if (counter >= number_of_images - 1) return;

    if (counter == 1) flex_container.style.transition = "all ease-in-out 300ms";

    counter++;

    flex_container.style.transform = "translateX(" + -size * counter + "px)";

    flex_container.addEventListener("transitionend", () => {
      if (counter >= number_of_images - 1) {
        flex_container.style.transition = "none";

        counter = 1;

        flex_container.style.transform =
          "translateX(" + -size * counter + "px)";
      }
    });

    //horizontal bar mechanics to the right

    horizontal_bar_image_order[horizontal_bar_position].classList.remove(
      "selected_bar"
    );
    if (horizontal_bar_position == 2) {
      horizontal_bar_position = -1;
    }
    horizontal_bar_image_order[++horizontal_bar_position].classList.add(
      "selected_bar"
    );
  };

  if (!stop_slideing) {
    setInterval(() => {
      to_right_sliding_image();
      console.log("hel");
    }, 5000);
  }

  button_right_slide.addEventListener("click", () => {
    to_right_sliding_image();
  });

  button_left_slide.addEventListener("click", () => {
    if (counter <= 0) return;
    if (counter == number_of_images - 2)
      flex_container.style.transition = "all ease-in-out 300ms";

    counter--;

    flex_container.style.transform = "translateX(" + -size * counter + "px)";

    flex_container.addEventListener("transitionend", () => {
      if (counter <= 0) {
        flex_container.style.transition = "none";

        counter = number_of_images - 2;

        flex_container.style.transform =
          "translateX(" + -size * counter + "px)";
      }
    });

    //horizontal bar to left
    horizontal_bar_image_order[horizontal_bar_position].classList.remove(
      "selected_bar"
    );
    if (horizontal_bar_position <= 0) {
      horizontal_bar_position = 3;
    }
    horizontal_bar_image_order[--horizontal_bar_position].classList.add(
      "selected_bar"
    );
  });
};

export default carosuel;
