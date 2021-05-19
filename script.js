let counter = 0;

$(".enter").click(function() {
    let answer1 = $(".input1").val();
    let answer2 = $(".input2").val();
	let user_inputs_correct = 1; // user input is correct by default
    if (answer1 === "warm" && answer2 >= 2) {
        $(".results").append("You are Pickles.");
        $(".results").append("<img class='hi'src= https://static.wikia.nocookie.net/nekoatsume/images/c/c7/Pickles.png/revision/latest/scale-to-width-down/40?cb=20151108105219>");
    $("body").css("background-color", answer1);
    } else if (answer1 === "cold" && answer2 >= 2) {   
        $(".results").append("You are Ginger.");
        $(".results").append("<img class='hi'src= https://static.wikia.nocookie.net/nekoatsume/images/8/85/Ginger.png/revision/latest/scale-to-width-down/40?cb=20151108111523>");
    $("body").css("background-color", answer1);
    } else if (answer1 === "warm" && answer2 <= 1) {      
        $(".results").append("You are Chip.");
        $(".results").append("<img class='hi'src= https://static.wikia.nocookie.net/nekoatsume/images/6/6f/Chip.png/revision/latest/scale-to-width-down/40?cb=20160716121707>");
    $("body").css("background-color", answer1);
    } else if (answer1 === "cold" && answer2 <= 1) {
        $(".results").append("You are Pasty.");
        $(".results").append("<img class='hi'src= https://static.wikia.nocookie.net/nekoatsume/images/f/fd/Pasty.png/revision/latest/scale-to-width-down/40?cb=20160716084425>");
    $("body").css("background-color", answer1);
    } else {
        user_inputs_correct = 0;
    	alert("wrong input");
    }
    if (user_inputs_correct === 1) {
        $(".results").append("<p> - You prefer " + answer1 + " colors.</p>" + "<p> - You have " + answer2 + " siblings. </p>");
        counter = counter + 1;
		$(".counter").text("This quiz has been taken " + counter.toString() + " times.");
    }
});

$(".reset").click(function() {
    $(".results").text("");
    $("input:text").val("");
    counter = 0;
    $(".counter").text("This quiz has been taken " + counter.toString() + " times.");
});