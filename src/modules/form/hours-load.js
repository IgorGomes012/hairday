import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora
    const [scheduleHour, _] = hour.split(":");

    // adiciona a hora na date e verifica se esta no futuro
    const isHoursPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: isHoursPast,
    };
  });
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour
    hours.append(li)
  });
}
