//This app allows the user to take a multiple choice quiz on content of your choosing. It should meet the following requirements:
//
//Lead the user through a set of questions. The user should only see one question at a time, with new answers presented only after they have answered the current one. You should use jQuery to move between questions as the user enters their response
//Allow the user to input his or her response to each questions with radio buttons for the user to enter their response
//When the user answers the last question, the quiz should show his or her overall score
//Each question should be stored as a JavaScript object, and you’ll want to store your list of questions in an array. For example: var questions = [{question: "What is the capital of the US", choices: ["Washington DC", "NYC", "Silicon Valley"], correct:0}];
//Let the user know where in the quiz they are at each step (i.e. “Question 3 of 5) 
//Let the user know their score so far 
//Let the user know if their previous response was correct 

function formCheck(){
	item = $('#itemx').val();

	if (item == null || item == ""){			
	}else{							//item is OK so add to list
		item = $('#itemx').val();
		item_list[item_ix] = item	
		$('#itemx').val('');
		$('#ct').append('<div><input class="item" type="text" value="' + item + '"><input id="c' + item_ix + '" class="chk" type="checkbox"></div>');
		item_ix++;	
		$('#itemx').css("background-color", "white");
		$('#add').css("color", "black");
		$('#items').html('<p>' + item_ix + ' items</p>');							
	}

	var chk = $("input:checked").length;
	$('#checked').html('<p>' + chk + ' checked</p>');
	return false;
};

$(document).ready(function(){
	item_ix = 0;
	item_list = [];

	$('#rem').click(function(){			// Remove checked items. Make new array and then re-create on screen
		for (i = item_list.length - 1; i >= 0; i--){  // do array in reverse to preserve numbering
			var id = eval("$('#c" + i + "')")
			if (id.is(':checked')){
				item_list.splice(i, 1)
			}
		}
		$('#ct').empty();
		for (i = 0; i < item_list.length; i++){
			$('#ct').append('<div><input class="item" type="text" value="' + item_list[i] + '"><input id="c' + i + '" class="chk" type="checkbox"></div>');
		}
		item_ix = item_list.length
		$('#items').html('<p>' + i + ' items</p>');
		$('#checked').html('<p>' + 0 + ' checked</p>');				
	});

	$('.itemx').change(function(){ // not needed, for now anyway
	});
})
