const padlOrel = Math.random() < 0.5;

 const vysledekElement = document.querySelector('.vysledek')

if (padlOrel) {
    vysledekElement.textContent =  'Padl orel'
  } else {
    vysledekElement.textContent = 'padla panna'
  }


  const minceElement = document.querySelector('.mince')
  if (padlOrel) {
    minceElement.classList.add('mince--orel')
  } else {
    minceElement.classList.add('mince--panna')
  }
  