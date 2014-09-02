//console.log($('.post-link').children()[0]);
//
var l_height = 0;
var relation;
var r_height = 0;

var post_list_place = function(){
	$('.post-list').children().each(function(i){
		if(i!==0){
			relation = l_height - r_height;
			if(relation <= 0){
				//Left positioning
				$(this).children().addClass('left');
				l_height += $(this).children().outerHeight();
			}else{
				//Rigth positioning
				$(this).children().addClass('right');
				r_height += $(this).children().outerHeight();
			}
		}else{
			$(this).children().addClass('left');
			l_height += $(this).children().outerHeight();
		}
	});
	l_height=0;
	r_height=0;
}

var resize = function(){
	if($(window).width()<600){
		$('.post-list div').removeClass('left right');
	}else{
		post_list_place();
	}
}

$(window).resize(function(){
	resize();
});

if($(window).width()>600){
	post_list_place();
}
