$(document).ready(() => {
  // Add a burger click handler
  $("#addBurgerSubmit").on("click", (event) => {
    event.preventDefault();
    // Select the text value from the form input
    const newBurgerName = $("#burger_input").val();
    const ajaxObj = {
      url: "/api/burger",
      method: "POST",
      data: { name: newBurgerName },
    };
    $.ajax(ajaxObj).then((res) => {
      console.log(res);
      location.reload();
    });
  });
  // Devour it click event
  $(".change-devoured").on("click", (event) => {
    event.preventDefault();
    // Get the ID from the button payload
    const id = event.target.dataset.id;
    // URL for the ajax call
    const URL = "/api/burger/" + id;
    // AJAX call
    const ajaxObj = {
      url: URL,
      method: "PUT",
    };
    $.ajax(ajaxObj).then((res) => {
      // Redraw the page
      location.reload();
    });
  });
});
