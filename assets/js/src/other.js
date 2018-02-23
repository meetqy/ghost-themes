// 代码显示行数
window.onload = function () {
    var all_code = $("pre code");
    if (all_code.length > 0) {
        for (var i = 0, len = all_code.length; i < len; i++) {
            var code = $(all_code[i]);
            var f = '<li>' + code.html().replace(/\n/g, "\n</li><li>") + '</li>';
            var d = '<ul>'+f.replace(/<li><\/li>$/g,'')+'</ul>';
            $(code).html(d);
        }
    }

    // 解决移动端fixed bug
    var winHeight = $(window).height();
    if(navigator.userAgent.match(/mobile/i)) {
        var cyComment = $('.module-cmt-float-bar');
        var cyCommentT = setInterval(function () {
            cyComment = $('.module-cmt-float-bar');
            if(cyComment[0]){
                var cyFixedHeight = cyComment.height();
                cyComment.css('top', $(window).scrollTop() + winHeight - cyFixedHeight);
                $(window).scroll(function () {
                    cyComment.css('top', $(window).scrollTop() + winHeight - cyFixedHeight);
                });
                return clearInterval(cyCommentT);
            }
        }, 500);
    }
};

