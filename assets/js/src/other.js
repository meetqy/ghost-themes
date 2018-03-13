(function($) {
	// 作品展示
    function page_works_show() {
        if (window.location.pathname != '/works-show/') return false;
        var aArr = $('.works-show-tags a');

        $.each(aArr,function (index,s) {
        	var tag = s.className.split(' ')[0];
        	
            $.get(ghost.url.api('posts', {filter: 'tags:' + tag + ''})).done(function (data) {
                var posts = data.posts;
                var index = 0;		// li换行使用
                var dl_str = '';	// dl
                var li_str = '';	// ul
                for (var i = 0, len = posts.length; i < len; i++) {
                    index++;
                    dl_str += splice_html(posts[i]);
                }
                
                li_str += '<li class="clear">' + dl_str + '</li>';
                $('#content-box').append('<ul class="show-post-box '+tag+'-ul">' + li_str + '</ul>');
                MouseDirection('.box-3d');
                var nav_a = $('.works-show-tags a')[0];
                var get_tag = nav_a.className.split(' ')[0];
                var ul_box = $('.'+get_tag+'-ul')[0];
                if(ul_box.className.indexOf('block')<=-1){
               		$(ul_box).addClass('block');
                }
            
            }).fail(function (err) {
                console.log(err);
            });
        })

        // 拼接html
        function splice_html(posts) {
        	var feature_image = posts.feature_image || '/assets/img/icons/favicon/favicon-170x170.png';
            var str = '<dl><a href='+posts.url+' title='+posts.title+'>\
	            <dt>\
	                <div class="box-3d" >\
	                    <div class="box-3d-content" style="transform: translateZ(-85px) rotateY(0deg) rotateX(0deg);">\
	                        <img src='+feature_image+'>\
	                        <img src='+feature_image+'>\
	                       	<img src='+feature_image+'>\
	                        <img src='+feature_image+'>\
	                        <img src='+feature_image+'>\
	                    </div>\
	                </div>\
	            </dt></a>\
	            <dd>\
	                <p><a href='+posts.url+' title='+posts.title+' target="_blank">' + posts.title + '</a></p>\
	               	<p style="text-align:right"># <a href="'+posts.url+'#SOHUCS"  target="_blank">查看评论</a></p>\
	            </dd>\
	        </dl>';
            return str;
        }

        $('.works-show-tags a').on('click', function () {
            $('.works-show-tags a').removeClass('works-show-active');
      		$('.show-post-box').removeClass('block');
            $(this).addClass('works-show-active');
            var tag = this.className.split(' ')[0];           
            $('.' + tag + '-ul').addClass('block');
        });

        var MouseDirection = function (element, opts) {
	        var $element = $(element);
	        opts = $.extend({}, {
	            enter: $.noop,
	            leave: $.noop
	        }, opts || {});

	        var dirs = ['top', 'right', 'bottom', 'left'];

	        var calculate = function (e,$obj) {
	            var w = $obj.outerWidth(),
	                h = $obj.outerHeight(),
	                offset = $obj.offset(),
	                x = (e.pageX - offset.left - (w / 2)) * (w > h ? (h / w) : 1),
	                y = (e.pageY - offset.top - (h / 2)) * (h > w ? (w / h) : 1);

	            return Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
	        };

	        $element.on('mouseenter', function (e) {
	            var r = calculate(e,$(this));
	            switch (dirs[r]){
	                case 'left':
	                    $(this).find('.box-3d-content').css({'transform':'translateZ(85px) rotateY(90deg) rotateX(0deg)'});
	                    break;
	                case 'right':
	                    $(this).find('.box-3d-content').css({'transform':'translateZ(85px) rotateY(-90deg) rotateX(0deg)'});
	                    break;
	                case 'top':
	                    $(this).find('.box-3d-content').css({'transform':'translateZ(85px) rotateY(0deg) rotateX(-90deg)'});
	                    break;
	                case 'bottom':
	                    $(this).find('.box-3d-content').css({'transform':'translateZ(85px) rotateY(0deg) rotateX(90deg)'});
	                    break;
	            }
	        }).on('mouseleave', function (e) {
	            var r = calculate(e,$(this));
	            opts.leave($(this), dirs[r]);
	            $(this).find('.box-3d-content').css({'transform':'translateZ(-85px) rotateY(0deg) rotateX(0deg)'});
	        });
	    };
    }

    // 代码显示行号
    function showCodeNum(){
    	var $pres = $('pre');
    	if(!$pres)  return;
    	for(var i = 0,len = $pres.length;i<len;i++){
    		var $pre = $pres.eq(i);
    		var countLen =$pre.find('code').html().split('\n').length;
    		var j = 1;
    		var liStr = '';
    		while(j < countLen){
    			liStr += '<li>'+j+'</li>'
    			j++;
    		}
    		$pre.append('<ul>'+liStr+'</ul>');
    	}
    }

    showCodeNum();
    page_works_show();
})($)

