$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();
        $('.profile-posts').addClass('profile-posts_list').removeClass('profile-posts_grid');
        $('.mode-switchers__list').addClass('mode-switchers__list_active');
        $('.mode-switchers__grid').removeClass('mode-switchers__grid_active')});
        $('#grid').click(function(event){event.preventDefault();
        $('.profile-posts').removeClass('profile-posts_list');
        $('.profile-posts').addClass('profile-posts_grid');
        $('.mode-switchers__grid').addClass('mode-switchers__grid_active');
        $('.mode-switchers__list').removeClass('mode-switchers__list_active')});
});