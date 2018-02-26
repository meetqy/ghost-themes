"use strict";

$(function() {
    var $searchField = $("#search-field"),
        $popularTags = $("#popular-tags"),
        showTags,
        hideTags;

    showTags = function() {
        return $popularTags.show();
    };

    hideTags = function() {
        return $popularTags.hide();
    };

    return $searchField.ghostHunter({
        results: "#search-results",
        zeroResultsInfo: false,
        onKeyUp: true,
        displaySearchInfo: true,
<<<<<<< HEAD
        result_template: "<a class=\"result\" href='{{link}}'>\n  <h2>{{title}}</h2>\n  <h4><time datetime=\"{{date published_at format=\"YYYY-MM-DD\"}}\">{{date published_at format=\"YYYY-MM-DD\"}}</time></h4>\n</a>",
=======
        result_template: "<a class=\"result\" href='{{link}}'>\n  <h2>{{title}}</h2>\n  <h4>{{pubDate}}</h4>\n</a>",
>>>>>>> parent of cbb0ee2... 搜素优化
        onComplete: function(query) {
            if (query.length > 0) {
                return hideTags();
            } else {
                return showTags();
            }

        }
    });
});
