//console.log($('.post-link').children()[0]);
//
var l_height = 0;
var l_width;
var relation;
var r_height = 0;
var i_height = 124;
var i_width;
var max_height;

var post_list_place = function(){
	i_width = $(window).width()*0.17;
	l_width = $($('.post-link').children()[0]).outerWidth();
	$('.post-list div').css('position','absolute');
	max_height = i_height + l_height;
	console.log(max_height);
	$('.post-list').children().each(function(i){
		if(i!==0){
			relation = l_height - r_height;
			if(relation <= 0){
				//Left positioning
				if(i>2){
					i_height = 0;
					i_width = $(window).width()*0.17;
				}else{
					i_height = 124;
				}
				l_height = l_height + i_height;
				$(this).children().css('top',l_height+'px');
				$(this).children().css('left',i_width+'px');
				l_height += $(this).children().outerHeight();
			}else{
				//Rigth positioning
				if(i>2){
					i_height = 0;
					i_width = 0;
				}else{
					i_height = 124;
					i_width = $(window).width()*0.17;
				}
				r_height = r_height + i_height;
				l_width = l_width + i_width;
				$(this).children().css('top',r_height+'px');
				$(this).children().css('left',l_width+'px');
				r_height += $(this).children().outerHeight();
			}
		}else{
			i_height = 124;
			i_width = $(window).width()*0.17;
			$(this).children().css('left',i_width+'px');
			$(this).children().css('top',i_height+'px');
			l_height += $(this).children().outerHeight();
		}
	});
	l_width = $($('.post-link').children()[0]).outerWidth();
	l_height=0;
	r_height=0;
}

var resize = function(){
	if($(window).width()<600){
		$('.post-list div').css('position','initial');
	}else{
		post_list_place();
	}
}

$(window).resize(function(){
	$('.post-list div').css('left','');
	$('.post-list div').css('top','');
	console.log(l_width);
	resize();
});

post_list_place();
