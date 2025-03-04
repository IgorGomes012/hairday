import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Data atual para input

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual
selectedDate.value = inputToday

// DEFINE A DATA MINIMA
selectedDate.min = inputToday

form.onsubmit = (event) => {
  //previne o comportamento de carregar a pagina
  event.preventDefault()

  console.log("enviado")
}