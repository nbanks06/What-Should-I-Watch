let horror = ["Midsommar", "Hereditary", "Get Out"];

$(".horror").click(function() {
// write your for loop here
    for (let movie of horror) {
        $(".horror-recommend").append("<div></div>" + movie);}
});

//declare your new array here
let action = ["Batman", "Spiderman", "The Adam Project"];
$(".action").click(function() {
    for (let fight of action) {
    $(".action-recommend").append("<div></div>" + fight); }
});