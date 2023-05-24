$(document).ready(function(){
    $('form').on('submit',function(e){
        e.preventDefault()
        
        const newTarefa =  $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
    
        $(`<li>${newTarefa}</li>`).appendTo(novoItem);
        
        $(novoItem).appendTo('ul');

        $('#nova-tarefa').val('')

        $('li').click(function(){
            $(this).css('text-decoration','line-through')
        })
    })
})

