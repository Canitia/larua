    $(document).ready(function () {
        $.get(ghost.url.api('posts', {limit: 'all',filter: "featured:false+image:-null"})
        ).done(onSuccess);
    });

    function onSuccess(data) {
        var $result = $('#random-posts-list');
        var sortedPosts = shuffleArray(data.posts);
        var displayPosts = sortedPosts.slice(0,2);
        $.each(displayPosts, function (i, post) {
            $result.append(
                '<a href="https://www.miboutech.com' + post.url + '"><img class="sidebar-img" src="' + post.image + '"/></a>'
            );
        });
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
