var placeholderText = {"Portfolio":"Search in portfolio","Blog":"Search in blog"};

$("#selectionType").on("change",function() {
    var selection = document.getElementById("selectionType");
    var inputBox = document.getElementById("inputBox");
    
    var selectedVal = $('#selectionType').find(':selected').text();
    if (placeholderText[selectedVal] !== undefined) {
        inputBox.placeholder = placeholderText[selectedVal];
    }
});

// Icon Changer

function setImage(select){
    var image = document.getElementsByName("image-swap")[0];
    image.src = select.options[select.selectedIndex].value;
}
