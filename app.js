const btnTheme = document.querySelector('.btn-theme')

btnTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')

  if(document.body.classList.contains('dark-theme')) {
    btnTheme.innerHTML = '<i class="fa-solid fa-sun"></i>'
  } else {
    btnTheme.innerHTML = '<i class="fa-solid fa-moon"></i>'
  }
})