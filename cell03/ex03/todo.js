const buttonNewToDo = document.getElementById('ft_button')
const div = document.getElementById('ft_list')

function addDivOnload() {
    if (!document.cookie) return
    const todoList = Array.from(JSON.parse(document.cookie)).reverse()
    if(!todoList) return
    todoList.forEach(todo => {
        const newDiv = document.createElement('div')
        newDiv.innerHTML = todo
        newDiv.id = todoList.length + 1
        newDiv.style.textAlign = 'center'
        div.appendChild(newDiv)
        newDiv.addEventListener('click', () => {
            if(confirm('Voulez-vous vraiment supprimer ?')) {
            document.cookie = JSON.stringify(JSON.parse(document.cookie).filter(element => element !== todo))
            div.removeChild(newDiv)
            }
        })
    })
}

addDivOnload()

buttonNewToDo.addEventListener('click', () => {
    const promptText = prompt('Veuillez renseigner un nouveau todo.')
    if (!promptText) return
    if (!document.cookie) document.cookie = JSON.stringify([])
    if(JSON.parse(document.cookie).includes(promptText)) return alert('Cet element existe deja.')
    document.cookie = JSON.stringify([...JSON.parse(document.cookie), promptText])
    const newDiv = document.createElement('div')
    newDiv.style.textAlign = 'center'
    newDiv.innerHTML = promptText
    if(JSON.parse(document.cookie).length <= 0) {
    div.appendChild(newDiv)
    return newDiv.addEventListener('click', () => {
        if(confirm('Voulez-vous vraiment supprimer ?')) {
        document.cookie = JSON.stringify(JSON.parse(document.cookie).filter(element => element !== promptText))
        div.removeChild(newDiv)
        }
    })
    }
    const parentNode = document.getElementById('ft_list').firstChild
    div.insertBefore(newDiv, parentNode)
    newDiv.addEventListener('click', () => {
        if(confirm('Voulez-vous vraiment supprimer ?')) {
        document.cookie = JSON.stringify(JSON.parse(document.cookie).filter(element => element !== promptText))
        div.removeChild(newDiv)
        }
    })
    
})
