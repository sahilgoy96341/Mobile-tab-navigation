const constents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', () =>{
        hideAllConstents()
        hideAllConstents()

        item.classList.add('active')
        contents[idx].classList.add('active')
    })
})
function hideAllContents(){
    contents.forEach(content => content.classList.remove('show'))
}
function hideAllContents(){
    contents.forEach(content => content.classList.remove('active'))
}