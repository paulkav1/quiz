//problems: 
// 1. I have two programs here using globals to communicate. How to fix?
// 2. eval
// 3. feels "hacky"

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
