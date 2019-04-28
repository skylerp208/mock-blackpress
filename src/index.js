window.addEventListener('DOMContentLoaded', (e) => {

  const home_page = document.querySelector('#home-page')
  const about_page = document.querySelector('#about-page')

  document.querySelector('#home').addEventListener('click', (e) => {popHome(e)})
  document.querySelector('#about').addEventListener('click', (e) => {popAbout(e)})

  function popHome(event) {
      home_page.style.display = 'block'
      about_page.style.display = 'none'
  }

  function popAbout(event) {
    about_page.style.display = 'block'
    home_page.style.display = 'none'
  }

})
