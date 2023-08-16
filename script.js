// console.log('hello doctor')

// console.log($)

const $form = $('form')
const $input = $('#formInput')
const $list = $('ul')

$form.on('submit', event => {
    event.preventDefault()
    console.log(event)

    const newTodo = $input.val()

    const $li = $(`<li>${newTodo}</li>`)

    $list.append($li)

    $input.val('')
})