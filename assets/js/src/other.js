(function($){
	// 作品展示
	function page_works_show() {
		if(window.location.pathname != '/works-show/') return false;
		var cur_page = $('.works-show-active')[0].className.split(' ')[0];
		get_data();
		$('.works-show-tags a').on('click',function () {
		    $('.works-show-tags a').removeClass('works-show-active');
		    $(this).addClass('works-show-active');
		    cur_page = this.className.split(' ')[0];
		    get_data();
		});

		// 获取对应tag文章
		function get_data() {
			$.get(ghost.url.api('posts', {filter:'tags:'+cur_page+''})).done(function (data){
			  	var posts = data.posts;
			  	console.log(posts);
			}).fail(function (err){
			  console.log(err);
			});
		}
	}
	
	page_works_show();
})($)

