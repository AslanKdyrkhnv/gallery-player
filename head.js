const imgs = document.querySelectorAll('.item-img');
const search = document.getElementById('search');

imgs.forEach(item=> {
    console.log(item.getAttribute("data-text"));
})

search.addEventListener('input', (e) => {
    let word = search.value; 
    imgs.forEach(item=> {
        let img = item.firstElementChild;
        let text = item.getAttribute("data-text"); 
        if(containsWordIgnoreCase(text, word)) {
            item.classList.remove('hidden')
            item.classList.add("block");
        } else {
            item.classList.remove('block')
            item.classList.add('hidden')
        }
    })
});




function containsWordIgnoreCase(word, substring) {
    return word.toLowerCase().includes(substring.toLowerCase());
}