import Head from 'next/head'
import Image from 'next/image'

import 'bootstrap/dist/css/bootstrap.min.css';


import {Container,Row,Col,Table } from 'react-bootstrap'



import NavicBre from '../components/Nav/Navic';


import homeStyle from '../styles/Home.module.css'

import slika from '../images/messi2.jpg'


import footerStyles from '../styles/Footer.module.css'

import Link from 'next/link'
import Footer from '../components/Footer/Footer';







export default function Home(props) {



  return (
    <div className={homeStyle.home}>

      <NavicBre  />

 





      <div className={homeStyle.home_headline}>

  
          

               Final results as Lionel Messi takes home 7th player of the year award

               </div>
       
            
               
   
        
<div className={homeStyle.home_image_div}>


       
    
            <Image
        
              src={slika}
              alt='messi'
              layout='fill'
              objectFit="fill"

          
          
              
              />
              </div>
          





 <div className={homeStyle.first_text_WH}>
   <div className={homeStyle.first_text}>

 

                 Argentina and Paris Saint-Germain forward Lionel Messi won the 2021 Ballon dOr, his record-extending seventh Player of the Year award in his career (2009, 2010, 2011, 2012, 2015 and 2019). He beat out Bayern Munich and Poland forward Robert Lewandowski, who was the other top contender for this year s honor. The final points margin was tight: 613-580.

Messi won the last Ballon dOr award presented in 2019. The 2020 edition was cancelled due to the COVID-19 pandemic, but Lewandowski was widely believed to be the likely winner before it was controversially scratched
  </div>
  </div>


  
     
    






      <div className={homeStyle.home_table}>

    <div className={homeStyle.table_headline}>2021 Ballon dOr final results — Men</div>


    <Table striped hover   className={homeStyle.table_WH}>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th className="text-primary">Points</th>
      <th>Position</th>
      <th>Club</th>
      <th>National Team</th>
    </tr>
  </thead>
  <tbody>
    {props.data.map((el)=>


   <tr key={el.id}>
      <th>{el.id}</th>
      <th>{el.name}</th>
      <th>{el.points}</th>
      <th>{el.position}</th>
      <th>{el.club.team}</th>
      <th>{el.club.country}</th>
    </tr>
    


    )}
    
  </tbody>
</Table>




<div className={homeStyle.table_bootom_text}>
    <marquee  width="100%"   direction="left"  loop="1">
    The Argentine wizard - as predicted by GOAL - won his seventh Golden Ball on November 29, beating the Bayern Munich star into second place
</marquee>
</div>
</div>







<div className={homeStyle.second_text}>
   <div className={homeStyle.second_text_headline}>Ballon dOr History</div>     


<div className={homeStyle.second_text_main}>
    The Ballon dOr  ("Golden Ball") is an annual football award presented by French news magazine France Football that is one of the oldest and generally regarded as the most prestigious individual award for football players.[2] It has been awarded since 1956, although between 2010 and 2015, an agreement was made with FIFA, and the award was temporarily merged with the FIFA World Player of the Year (founded in 1991) and known as the FIFA Ballon dOr. However, the partnership ended in 2016, and the award reverted to the Ballon dOr, while FIFA also reverted to its own separate annual award The Best FIFA Men s Player. The recipients of the joint FIFA Ballon dOr are considered as winners by both award organisations.

Conceived by sports writer Gabriel Hanot.
  
</div>
</div>











<Footer />











    </div>
  )
}





export async function getServerSideProps(context) {
  const res = await  fetch(`https://next-js-football-project.vercel.app/api/players/top10`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}
