const api = "https://api.whatsapp.com/send?phone=55"
const cellNumber = document.querySelector("#cellNumber")
const enviarMsg = document.querySelector("#enviarMsg")
const errortxt = document.querySelector('h3')
const maskOptions =  {
  mask: '(00) 00000-0000'
}

enviarMsg.addEventListener('click', () => {
  if (cellNumber.value == "") {
    errortxt.innerHTML = "Por favor, digite um número"
  }
  else if (cellNumber.value.length < 15) {
    errortxt.innerHTML = "Por favor, digite um número válido"
  }
  else {
    const cellNumberFormatted = cellNumber.value.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')
    const url = `${api}${cellNumberFormatted}`
    window.open(url, 'blank');
  }
})

function maskNumber() {
  IMask(cellNumber, maskOptions)
}
maskNumber()
