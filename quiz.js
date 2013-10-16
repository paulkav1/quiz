//This app allows the user to take a multiple choice quiz on content of your choosing.
//Lead the user through a set of questions, one at a time, with new answers presented only after they have answered the current one. 
// You should use jQuery to move between questions as the user enters their response
//Allow the user to input his or her response to each questions with radio buttons
//When the user answers the last question, the quiz should show his or her overall score
//Let the user know:
// where in the quiz they are at each step (i.e. “Question 3 of 5) 
// their score so far 
// if their previous response was correct 

$(document).ready(function(){
	var title = "US Geography";
	var questions = [
	{question: "What is the capital of the US?", choices: ["Washington DC", "NYC", "Silicon Valley", "Kansas City", "London"], correct:0},
	{question: "What is the biggest state in the US?", choices: ["Texas", "Florida", "California", "Illinois", "New York"], correct:0}	
	];

	$('.title').html(title);
    $('#s0').html(questions[0].question);
    $('#s1').html(questions[0].choices[0]);
    $('#s2').html(questions[0].choices[1]);
    $('#s3').html(questions[0].choices[2]);
    $('#s4').html(questions[0].choices[3]);  
    $('#s5').html(questions[0].choices[4]);

	$(".answer").change(function(){
		if ($("#r1").is(":checked")){
            alert('r1');
        }
        else if ($("#r2").is(":checked")){
            alert('r2');
        }
        else if ($("#r3").is(":checked")){
            alert('r3');
        }
        else if ($("#r4").is(":checked")){
            alert('r4');
        }
        else if ($("#r5").is(":checked")){
            alert('r5');
        }                 
        else{
        	alert('other');
        }
    });
})
