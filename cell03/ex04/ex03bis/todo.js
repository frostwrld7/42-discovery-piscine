const buttonNewToDo = $( '#ft_button' )
const div = $( '#ft_list' )

function addDivOnload() {
    if (!document.cookie) return
    const todoList = Array.from(JSON.parse(document.cookie)).reverse()
    if(!todoList) return
    todoList.forEach(todo => {
        const newDiv = $('<div></div>');
        newDiv.text(todo)
        newDiv.attr('id', todoList.length + 1)
        newDiv.css('text-align', 'center')
        newDiv.appendTo(div)
        newDiv.click(() => {
            if(confirm('Voulez-vous vraiment supprimer ?')) {
            document.cookie = JSON.stringify(JSON.parse(document.cookie).filter(element => element !== todo))
            newDiv.appendTo(div)
            }
        })
    })
}

addDivOnload()

buttonNewToDo.click(() => {
    const promptText = prompt('Veuillez renseigner un nouveau todo.')
    if (!promptText) return
    if (!document.cookie) document.cookie = JSON.stringify([])
    if(JSON.parse(document.cookie).includes(promptText)) return alert('Cet element existe deja.')
    document.cookie = JSON.stringify([...JSON.parse(document.cookie), promptText])
    const newDiv = $('<div></div>');
    newDiv.css('text-align', 'center')
    newDiv.text(promptText)
    if(JSON.parse(document.cookie).length <= 0) {
    newDiv.appendTo(div)
    return newDiv.click(() => {
        if(confirm('Voulez-vous vraiment supprimer ?')) {
        document.cookie = JSON.stringify(JSON.parse(document.cookie).filter(element => element !== promptText))
        div.find(`#${newDiv.id}`).remove()
        }
    })
    }
    const parentNode = $('#ft_list').children().first();
    newDiv.insertBefore(parentNode)
    newDiv.click(() => {
        if(confirm('Voulez-vous vraiment supprimer ?')) {
        document.cookie = JSON.stringify(JSON.parse(document.cookie).filter(element => element !== promptText))
        div.find(`#${newDiv.id}`).remove()        
    }
    })
    
})