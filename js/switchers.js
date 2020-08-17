jQuery('mode-switchers').on('click',function(e) {
    if ($(this).hasClass('mode-switchers__grid')) {
        $('container #profile-posts').removeClass('profile-posts_list').addClass('profile-posts_grid');
    }
    else if($(this).hasClass('mode-switchers__list')) {
        $('container #profile-posts').removeClass('profile-posts_grid').addClass('profile-posts_list');
    }
});