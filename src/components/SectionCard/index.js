import React from 'react'
import GetPicture from '../../functions/getPicture'

function openModal(e) {
  const modal = document.querySelector('.modal')
  const modalBody = document.getElementById('modal-body')

  const title = getTitle(e)
  console.log(title)
  const price = getPrice(e)
  const description = getDesc(e)

  modalBody.innerHTML = `
    <h1 class="modal-title">${title}</h1>
    <p class="modal-price">${price}</p>
    <div class="modal-pic">
      <img src=''/>
    </div>
    <p class="modal-desc">${description}</p>
    `
  modal.style.display = 'block'

  setPicture(title)
}

function getTitle(e) {
  let title = ''
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
function getPrice(e) {
  let price = ''
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
function getDesc(e) {
  let desc = ''
  let paragraphs = ''
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
function setPicture(title) {
  const photoUrl = GetPicture(title)
  const modalPic = document.querySelector('.modal-pic img')
  modalPic.setAttribute('src', photoUrl)
}

const SectionCard = props => (
  <section id={props.section}>
    <div className="card" onClick={openModal.bind(this)}>
      <div className="title-price">
        <h2>{props.name}</h2>
        <p className="price">{props.price}</p>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </div>
  </section>
)

export default SectionCard
