import  dayjs  from "dayjs"
import { openingHours } from "../../utils/opening-hours"

export function hoursLoad({ date }){
  const opening = openingHours.map((hour)=>{
    // Recupera somente a hora
    const [scheduleHour, _] = hour.split(":")

    // adiciona a hora na date e verifica se esta no futuro
    const isHoursPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

    return{
      hour,
      available: isHoursPast,
    }
  })
}