// recuperiamo temperatura minima, massima e corrente di Paperino (PO)

const weatherURL =
  'https://api.open-meteo.com/v1/forecast?latitude=43.8489&longitude=11.0897&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=temperature_2m&timezone=Europe%2FBerlin&forecast_days=1'

const getMeteo = function () {
  fetch(weatherURL)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Errore nel recupero dati meteo')
      }
    })
    .then((data) => {
      // data è il JSON estratto dalla response
      console.log('DATI METEO', data)
      // ora con questo data estraggo le info che mi servono e manipolo il DOM
      const tempCorrente = data.current.temperature_2m
      const tempMin = data.daily.temperature_2m_min[0]
      const tempMax = data.daily.temperature_2m_max[0]

      //   prendo i riferimenti agli span che devo riempire
      const currentSpan = document.getElementById('current-temp')
      const minSpan = document.getElementById('min-temp')
      const maxSpan = document.getElementById('max-temp')

      //   riempio gli span con i dati dall'API
      currentSpan.innerText = tempCorrente
      minSpan.innerText = tempMin
      maxSpan.innerText = tempMax
    })
    .catch((err) => {
      console.log('errore', err)
    })
}

getMeteo()
