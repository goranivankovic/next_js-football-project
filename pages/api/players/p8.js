export default async function handler(req, res) {
    res.json( 

   
      {
        "id": 8,
        "name": "Kevin De Bruyne",
        "position": "MF",
        "points":"73",
        "stats":{
          "goals":"14",
          "assists":"16",
          "trophys":"Won Premier League & Carabao Cup"
        },
        "club": {
          "team": "Manchester City",
          "country": "Belgium",
          "city": "Bueanse Aries",
          "countryName": "BEL",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
  
        "website": "https://www.mancity.com/players/kevin-de-bruyne",
        "message": "Voted the PFA Player of the Year for the second successive season after another mesmerising year in midfield for Manchester City, Kevin De Bruyne remains the outstanding creative player in English, and perhaps European, football.Injuries hampered him in Euro 2020 as Belgium's 'Golden Generation' missed arguably their last chance at winning some major silverware, but he stil produced some memorable moments that caught the Ballon d'Or judges' collective eyes."
      }
        

)}