const hides = document.querySelectorAll('.hide')

for (let hide of hides) {
  hide.addEventListener("click", function() {
    const hide_id = hide.getAttribute("id")
    const descriptionHide = document.querySelector(`.ingredientes-items${hide_id}`)
    descriptionHide.classList.toggle('none')
    if  (document.querySelector(`#${hide_id}`).textContent == ('ESCONDER')) {
      document.querySelector(`#${hide_id}`).textContent = ('MOSTRAR')
    }
    else if (document.querySelector(`#${hide_id}`).textContent == ('MOSTRAR')) {
      document.querySelector(`#${hide_id}`).textContent = ('ESCONDER')
    }
  })
}
