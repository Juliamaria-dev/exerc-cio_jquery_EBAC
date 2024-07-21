$(document).ready(function() {
  // Adiciona tarefa ao clicar no botão "Adicionar"
  $('#taskForm').submit(function(e) {
      e.preventDefault();
      var taskName = $('#taskInput').val();
      if (taskName.trim() === '') {
          alert('Por favor, insira o nome da tarefa.');
          return;
      }
      $('#taskList').append('<li>' + taskName + '</li>');
      $('#taskInput').val(''); // Limpa o campo de input após adicionar a tarefa
  });

  // Marca tarefa como concluída ao clicar nela
  $(document).on('click', 'li', function() {
      $(this).toggleClass('completed');
  });
});

