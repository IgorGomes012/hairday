import { hoursLoad } from "../form/hours-load.js"
 
const selectedDate = document.getElementById("date")

export function schedulesDay(){
  // obtem a data do input
  const date = selectedDate.value

  // Renderiza as horas disponiveis
  hoursLoad({date})
  // Busca na API os agendamentos para carregar do lado direito da tela
 
}