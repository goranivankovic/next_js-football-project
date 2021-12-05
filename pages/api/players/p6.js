export default async function handler(req, res) {
    res.json( 
      {
        "id": 6,
        "name": "Cristiano Ronaldo",
        "position": "FW",
        "points":"178",
        "stats":{
          "goals":"43",
          "assists":"6",
          "trophys":"Won Coppa Italia & Supercoppa Italiana"
        },
        "club": {
          "team": "Machester United",
          "country": "Portugal",
          "city": "Bueanse Aries",
          "countryName": "PRT",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
  
        "website": "https://www.cristianoronaldo.com/#cr7",
        "message": "Serie A top scorer, Euro 2020 Golden Boot winner and the record goalscorer in men's international football history - 2021 has been another year of success on a personal level for Cristiano Ronaldo. The fact that two of his three managers over the course of the year have been sacked and the third, Portugal's Fernando Santos, is hanging by a thread suggests that the teams with him in have not been quite as successful, but the five-time Ballon d'Or winner still has the capability to come up big with goals on a regular basis."
      }
        

)}