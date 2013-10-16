$(document).ready(function(){
	var title = "US Geography";
	var questions = [
	{question: "What is the capital of the US?", choices: ["Washington DC", "NYC", "Silicon Valley", "Kansas City", "London"], correct:0},
	{question: "What is the biggest state in the US?", choices: ["Texas", "Florida", "California", "Illinois", "New York"], correct:2},
    {question: "What is the oldest city in the US?", choices: ["Washington DC", "Boston", "Santa Fe", "Kansas City", "St Augustine"], correct:4},
    {question: "What is the northern neighbor of the US?", choices: ["Alaska", "Newfoundland", "Mexico", "Canada", "Norway"], correct:3},      	
    {question: "What is the biggest river in the US?", choices: ["Potomac", "Mississippi", "Rio Grande", "Delaware", "Amazon"], correct:1} 
	];

    var last_score = 0
    var total_score = 0
    var this_q = 1

	$('.title').html(title);
    show_quiz(0);
    $('#last').html('last: ' + last_score);
    $('#total').html('total: ' + total_score);
    $('#this').html('this: ' + this_q); 

	$(".answer").change(function(){
		if ($("#r1").is(":checked")){
            qx = 0;
        }
        else if ($("#r2").is(":checked")){
            qx = 1;
        }
        else if ($("#r3").is(":checked")){
            qx = 2;
        }
        else if ($("#r4").is(":checked")){
            qx = 3;
        }
        else if ($("#r5").is(":checked")){
            qx = 4;
        }                 

        score_quiz();
        
        $('#last').html('last: ' + last_score);
        $('#total').html('total: ' + total_score);
        $('#this').html('this: ' + this_q);
        $(".answer").prop("checked", false);      
    });

    function score_quiz(){
        if (qx == questions[this_q - 1].correct){
            last_score = 'Right';
            total_score += 1;
        }else{
            last_score = 'Wrong';
        }
        this_q += 1;        
        if (this_q > questions.length)
            show_final();
        else
            show_quiz(this_q - 1);      
    };

    function show_quiz(q){
        $('#s0').html(questions[q].question);
        $('#s1').html(questions[q].choices[0]);
        $('#s2').html(questions[q].choices[1]);
        $('#s3').html(questions[q].choices[2]);
        $('#s4').html(questions[q].choices[3]);  
        $('#s5').html(questions[q].choices[4]);   
    };

    function show_final(){
        $('#quiz').remove();
        $('.page').html('<h1>You scored ' + total_score + ' out of 5</h1>');
    };
})
