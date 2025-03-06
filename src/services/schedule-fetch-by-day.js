import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({date}){
   try{

    // Faz a requisição para enviar os dados do agendamento
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    // Converte para JSON
    const data = await response.json()

    // Filtra os agendamentos pelo dia selecionado
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

    return dailySchedules
    
   } catch (error){
    console.log(error)
    alert("Não foi possivel buscar os agendamentos do dia selecionado")
   }
}