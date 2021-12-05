// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  res.json( [



    {
      "id": 1,
      "name": "Lionel Messi",
      "position": "FW",
      "points":"613",
      "stats":{
        "goals":"41",
        "assists":"17",
        "trophys":"Copa America & Copa del Rey"
      },
      "club": {
        "team": "Paris Saint-Germain",
        "country": "Argentina",
        "city": "Bueanse Aries",
        "countryName": "ARG",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },

      "website": "https://messi.com/en/",
      "message": "Ballon d'Or number seven is now Lionel Messi's, even if his relatively slow start to life at Paris Saint-Germain saw the chasing pack close the gap considerably over the past three months.The GOAL50 winner almost single-handedly dragged Barcelona to what would have been an unlikely La Liga title if they had got over the line during the opening months of 2021, before winning Player of the Tournament and the Golden Boot at the Copa America as the Argentine finally claimed his first major international trophy.His goal record might not match that of Lewandowski's, but Ballon d'Or voters do have a magpie-like nature to them, and enjoy the sight of players lifting silverware.For that reason, Messi just had the edge in one of the closest fights for years."
     
      
    },

        
    {
      "id": 2,
      "name": "Robert Lewandowski",
      "position": "FW",
      "points":"580",
      "stats":{
        "goals":"64",
        "assists":"10",
        "trophys":"Bundesliga, Club World Cup & DFL-Supercup"
      },
      "club": {
        "team": "Bayern Munich",
        "country": "Poland",
        "city": "Bueanse Aries",
        "countryName": "POL",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },

      "website": "https://fcbayern.com/en/teams/first-team/robert-lewandowski",
      "message": "There is no doubt that Robert Lewandowski would have won the Ballon d'Or in 2020 had it not been controversially cancelled by France Football.There is even a school of though that believes him carrying that form through into 2021 should have meant he was an automatic selection to claim this year's prize.The Bayern Munich star could certainly not have done any more to force himself into the reckoning, and despite his second-placed ranking here, it would not have been a surprise to see him on stage collecting the most coveted individual award in the sport on November 29.It was a tight race this year, but one man had - in GOAL's opinion - the slight edge."
     
      
    },

              
    {
      "id": 3,
      "name": "Jorginho",
      "position": "MF",
      "points":"460",
      "stats":{
        "goals":"9",
        "assists":"3",
        "trophys":"Won Euro 2020, Champions League & UEFA Super Cup"
      },
      "club": {
        "team": "Chelsea",
        "country": "Italy",
        "city": "Bueanse Aries",
        "countryName": "ITA",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },

      "website": "https://www.chelseafc.com/en/teams/first-team/jorginho?pageTab=biography",
      "message": "Rightly or wrongly, Jorginho headed into the Ballon d'Or ceremony as one of the favourites for the award after a year in which he did the Champions League-European Championship double.Voted UEFA Player of the Year off the back of that achievement, it would be fair to point out that the Chelsea star did play well both club and country as they won that silverware, even if he was not the standout for either.It is for the latter reason, though, that he came up just short in this race."
     
      
    },

    {
      "id": 4,
      "name": "Karim Benzema",
      "position": "FW",
      "points":"239",
      "stats":{
        "goals":"43",
        "assists":"14",
        "trophys":"Won UEFA Nations League"
      },
      "club": {
        "team": "Real Madrid",
        "country": "France",
        "city": "Bueanse Aries",
        "countryName": "FRA",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },

      "website": "https://www.realmadrid.com/en/football/squad/karim-benzema",
      "message": "Karim Benzema continues to go from strength to strength following Cristiano Ronaldo's departure from Real Madrid, and 2021 was arguably the best individual year of his career. An all-round striker who can create goals as well as he can score them, Benzema has also made a triumphant return to international football with France, with his presence ensuring they will likely head to the 2022 World Cup as favourites to defend their crown."
      
    },

         
    {
      "id": 5,
      "name": "N'Golo Kante",
      "position": "MF",
      "points":"186",
      "stats":{
        "goals":"2",
        "assists":"1",
        "trophys":"Won Champions League & UEFA Super Cup."
      },
      "club": {
        "team": "Chelsea",
        "country": "France",
        "city": "Bueanse Aries",
        "countryName": "FRA",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },

      "website": "https://www.chelseafc.com/en/teams/first-team/n-golo-kante?pageTab=biography",
      "message": "Man of the Match in the Champions League final, as well as both legs of the semi-final win over Real Madrid, N'Golo Kante was on a tear towards the end of the 2020-21 campaign.Injuries have disrupted the France international over the course of the past few years, but when he is on the pitch there is still no one better than what he does on the planet."
      
    }
      
      ,

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
      },
      {
        "id": 7,
        "name": "Mohamed Salah",
        "position": "FW",
        "points":"121",
        "stats":{
          "goals":"34",
          "assists":"12",
          "trophys":""
        },
        "club": {
          "team": "Liverpool",
          "country": "Egypt",
          "city": "Bueanse Aries",
          "countryName": "EGY",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
  
        "website": "https://www.liverpoolfc.com/team/first-team/player/mohamed-salah",
        "message": "Recency bias is certainly prevalent when it comes to Ballon d'Or voting, and Mohamed Salah's form since the start of the 2021-22 season put him in contention for a top-10 finish.In truth, Salah was one of the Liverpool players whose form did not fall off a cliff during the early months of the year, and he has now taken his game to new levels after a summer break.The early favourite for the 2022 Ballon d'Or will hope those performance levels carry into the next calendar year."
      },

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
      },

      {
        "id": 9,
        "name": "Kylian Mbappe",
        "position": "FW",
        "points":"58",
        "stats":{
          "goals":"45",
          "assists":"22",
          "trophys":"Won UEFA Nations League, Coupe de France & Trophee des Champions"
        },
        "club": {
          "team": "Paris Saint-Germain",
          "country": "France",
          "city": "Bueanse Aries",
          "countryName": "FRA",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
  
        "website": "https://kylianmbappe.com/en/",
        "message": "Back when these rankings began tracking the Ballon d'Or race in March, Kylian Mbappe found himself out in front following his memorable hat-trick for Paris Saint-Germain against Barcelona.He backed that up with another sensational Champions League display against Bayern Munich, only for the France star to be one of the biggest disappointments of Euro 2020 and fall down the pecking order.He worked his way back towards what we predicted would be a potential top-five finish after a strong start to the new campaign at PSG and match-winning displays in the UEFA Nations League finals for France, but his wait for a first major individual honour goes on."
      },


      
      {
        "id": 10,
        "name": "Gianluigi Donnarumma",
        "position": "GK",
        "points":"36",
        "stats":{
          "goals":"",
          "assists":"",
          "trophys":"Won Euro 2020"
        },
        "club": {
          "team": "Paris Saint-Germain",
          "country": "Italy",
          "city": "Bueanse Aries",
          "countryName": "ITA",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
  
        "website": "https://en.psg.fr/teams/first-team/content/gianluigi-donnarumma-joins-paris-saint-germain",
        "message": "Voted Player of the Tournament at Euro 2020, Gianluigi Donnarumma was superb for Roberto Mancini's side even before his penalty shootout heroics in the final victory over England. His summer move to Paris Saint-Germain has not quite gone to plan as yet as he shares starting duties with Keylor Navas, but time is on the 22-year-old's side."

      }
        


      


    



 
  
    ]




  )
  
}
