//console.log($('.post-link').children()[0]);
//
jQuery(window).load(function(){
var l_height = 0;
var relation;
var r_height = 0;

var $postsDivs = document.getElementById('match').parentNode.childNodes;
var $ph = [];
var j = 0;
for(var i=3;i<=$postsDivs.length;i=i+4){
	$ph[j] = $postsDivs[i].childNodes[1].clientHeight;
	j++;
}

var post_list_place = function(){
	$('.post-list').children().each(function(i){
		if(i!==0){
			relation = l_height - r_height;
			if(relation <= 0){
				l_height += $ph[i];
				$(this).children().addClass('left');
			}else{
				r_height += $ph[i];
				$(this).children().addClass('right');
				console.log('-------------------------------');
			}
		}else{
			console.log('-------------------------------');
			l_height += $ph[i];
			$(this).children().addClass('left');
		}
console.log($(this).children().height());
console.log($(this).children());
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
});
