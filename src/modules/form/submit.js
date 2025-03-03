import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Carrega a data atual
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

// DEFINE A DATA MINIMA
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD")

form.onsubmit = (event) => {
  //previne o comportamento de carregar a pagina
  event.preventDefault()

  console.log("enviado")
}