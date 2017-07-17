$("#ask").on("keyup change" , function () {
  $("#counter").html(`Còn ${200-$(this).val().length}/200 ký tự`);
});
