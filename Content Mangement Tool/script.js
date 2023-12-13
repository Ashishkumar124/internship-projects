$(function() {
  $(".draggable").draggable({
    helper: "clone",
    revert: "invalid"
});

$("#canvas-container").droppable({
  accept:".draggable",
drop: function(event, ui) {
  var elementType = ui.helper.data("element-type");
  var element = createNewElement(elementType);
  $(this).append(element);
}
});

function createNewElement(type){
  var element;
  switch(type) {
     case "video":
      element = $("<iframe>").attr('src', "http://www.youtube.com/embed/your-video-id");
      break;

      case "text":
        element = $("<p>").text("New Text Element");
        break;

      case "image":
      element = $("<img>").attr('src', "path/to/image.jpg");
      break;

  }
  element.addClass("dropped-element");
  return element;
}
});