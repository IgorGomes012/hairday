import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

// Data atual para input

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual
selectedDate.value = inputToday

// DEFINE A DATA MINIMA
selectedDate.min = inputToday

form.onsubmit = (event) => {
  //previne o comportamento de carregar a pagina
  event.preventDefault()

  try{

    //recuperando nome do cliente
    const name = clientName.value.trim()
    
    if(!name){
      return alert("Informe o nome do cliente!")
    }

    //recuperando horario selecionado
    const hourSelected = document.querySelector(".hour-selected")

    //Recupera o horario selecionado
    if(!hourSelected) {
      return alert("Selecione a hora")
    }

    //Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")

    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    // Gera um ID
    const id = new Date().getTime()

    console.log({
      id,name,when
    })

  } catch(error) {
    alert("Não foi possivel realizar o agendamento")
    console.log(error)
  }

}