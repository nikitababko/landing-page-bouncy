filterSelectionPortfolio("allworks");
function filterSelectionPortfolio(c) {
    var x, i;
    x = document.getElementsByClassName("filterDivPortfolio");
    if (c == "allworks") c = "allworks";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClassPortfolio(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClassPortfolio(x[i], "show");
    }
}

// Show filtered elements
function w3AddClassPortfolio(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClassPortfolio(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("servicesPortfolio");
var btns = btnContainer.getElementsByClassName("btn-portfolio");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active-portfolio");
        current[0].className = current[0].className.replace(" active-portfolio", "");
        this.className += " active-portfolio";
    });
}
