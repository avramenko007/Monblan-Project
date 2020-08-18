var parent = document.getElementsByClassName('profile-posts')[0],
items  = parent.getElementsByClassName('profile-posts__post-item'),
loadMoreBtn =  document.querySelector('#loadMore'),
maxItems = 3,
hiddenClass = "visually-hidden";


[].forEach.call(items, function(item, idx){
    if (idx > maxItems - 1) {
        item.classList.add(hiddenClass);
    }
});

loadMoreBtn.addEventListener('click', function(){

[].forEach.call(document.querySelectorAll('.' + hiddenClass), function(item, idx){
    /*console.log(item);*/
    if (idx < maxItems - 0) {
        item.classList.remove(hiddenClass);
    }

    if ( document.querySelectorAll('.' + hiddenClass).length === 0) {
        loadMoreBtn.style.display = 'none';
    }

});

});