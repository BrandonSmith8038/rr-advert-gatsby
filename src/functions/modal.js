export function openModal(e) {
  const modal = document.querySelector('.modal')
  const modalBody = document.getElementById('modal-body')

  const title = this.getTitle(e)
  const price = this.getPrice(e)
  const description = this.getDesc(e)

  modalBody.innerHTML = `
    <h1 class="modal-title">${title}</h1>
    <p class="modal-price">${price}</p>
    <div class="modal-pic">
      <img src=''/>
    </div>
    <p class="modal-desc">${description}</p>
    `
  modal.style.display = 'block'

  this.setPicture(title)
}

export function closeModal() {
  const modal = document.querySelector('.modal')

  modal.style.display = 'none'
}

export function getTitle(e) {
  if (e.target.tagName === 'DIV') {
    title = e.target.querySelector('h2').innerHTML
  } else if (e.target.tagName === 'P') {
    const description = e.target.parentElement
    if (description.className === 'description') {
      title = description.previousElementSibling.querySelector('h2').innerHTML
    } else {
      title = description.querySelector('h2').innerHTML
    }
  } else if (e.target.tagName === 'H2') {
    title = e.target.innerHTML
  }
  return title
}
export function getPrice(e) {
  if (e.target.tagName === 'DIV') {
    price = e.target.querySelector('p').innerHTML
  } else if (e.target.tagName === 'P') {
    const description = e.target.parentElement
    if (description.className === 'description') {
      price = description.previousElementSibling.querySelector('p').innerHTML
    } else {
      price = description.querySelector('p').innerHTML
    }
  } else if (e.target.tagName === 'H2') {
    price = e.target.nextElementSibling.innerHTML
  }
  return price
}
export function getDesc(e) {
  if (e.target.tagName === 'DIV') {
    paragraphs = e.target.querySelectorAll('p')

    paragraphs.forEach(paragraph => {
      if (paragraph.parentElement.className === 'description') {
        desc = paragraph.parentElement.querySelector('p').innerHTML
      }
    })
  } else if (e.target.tagName === 'P') {
    const description = e.target.parentElement
    if (description.className === 'description') {
      desc = description.querySelector('p').innerHTML
    } else {
      desc = description.nextElementSibling.querySelector('p').innerHTML
    }
  } else if (e.target.tagName === 'H2') {
    desc = e.target.parentElement.nextElementSibling.querySelector('p')
      .innerHTML
  }
  return desc
}
export function setPicture(title) {
  const photoUrl = `../images/${title}.jpg`
  const modalPic = document.querySelector('.modal-pic img')
  modalPic.setAttribute('src', photoUrl)
}
