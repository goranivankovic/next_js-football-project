import Head from 'next/head'
import Image from 'next/image'

import 'bootstrap/dist/css/bootstrap.min.css';


import {Container,Row,Col,Table } from 'react-bootstrap'



import NavicBre from '../components/Navic';


import homeStyle from '../styles/Home.module.css'

import slika from '../images/messi2.jpg'


import footerStyles from '../styles/Footer.module.css'

import Link from 'next/link'







export default function Home(props) {



  return (
    <div className={homeStyle.home}>

      <NavicBre  />

      <br>
      </br>
      <div className={homeStyle.stickyLeft}>

      
         </div>
         <div className={homeStyle.stickyRight}>

      
</div>




      <div className={homeStyle.home_main}>

        <Container>
          <Row>
            <Col xs={12} className="text-center h3 text-danger">
          

               Final results as Lionel Messi takes home 7th player of the year award
               <br></br>
               <br></br>
               <br></br>
          
            
               
               </Col>
        
   
            <Col xs={12} style={{display:"flex",justifyContent:"space-around",borderRadius:"50px"}}>
    
            <Image
             
              src={slika}
              height="400"
              width="800px"
              alt="image"
            
          


              />
          





            </Col>


            <Col xs={12} className="text-center">
              <br></br>
              <br></br>
              <br></br>
       
             <div>
                 Argentina and Paris Saint-Germain forward Lionel Messi won the 2021 Ballon dOr, his record-extending seventh Player of the Year award in his career (2009, 2010, 2011, 2012, 2015 and 2019). He beat out Bayern Munich and Poland forward Robert Lewandowski, who was the other top contender for this year s honor. The final points margin was tight: 613-580.

Messi won the last Ballon dOr award presented in 2019. The 2020 edition was cancelled due to the COVID-19 pandemic, but Lewandowski was widely believed to be the likely winner before it was controversially scratched
           
</div>
            <br></br>
              <br></br>
            </Col>


          </Row>
        </Container>

    
     
    

      </div>


      <div className={homeStyle.home_second}>

<Container>
  <Row>
    <Col className="text-center h4 text-danger">2021 Ballon dOr final results — Men</Col>

    <Col xs={12} className="text-center text-primary">
      <br></br>
    <Table striped hover size="sm" responsive >
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


  
    </Col>

    <Col>
    <br></br>
    <br></br>
    <marquee width="100%" direction="left" height="100px" loop="1"  className="h3">
    The Argentine wizard - as predicted by GOAL - won his seventh Golden Ball on November 29, beating the Bayern Munich star into second place
</marquee>

    
    </Col>




  </Row>
</Container>







</div>



<div className={homeStyle.home_three}>

<Container>
  <Row>
    <Col className="text-center h4 text-danger">Ballon dOr History
    <br></br>
    <br></br>
    </Col>

    <Col xs={12} className="text-center text-dark">


    The Ballon dOr  ("Golden Ball") is an annual football award presented by French news magazine France Football that is one of the oldest and generally regarded as the most prestigious individual award for football players.[2] It has been awarded since 1956, although between 2010 and 2015, an agreement was made with FIFA, and the award was temporarily merged with the FIFA World Player of the Year (founded in 1991) and known as the FIFA Ballon dOr. However, the partnership ended in 2016, and the award reverted to the Ballon dOr, while FIFA also reverted to its own separate annual award The Best FIFA Men s Player. The recipients of the joint FIFA Ballon dOr are considered as winners by both award organisations.

Conceived by sports writer Gabriel Hanot, the Ballon dOr award honours the male player deemed to have performed the best over the previous year, based on voting by football journalists, from 1956 to 2006.[3] After 2007, coaches and captains of national teams were also given the right to vote.[3] Originally, it was awarded only to players from Europe and widely known as the European Footballer of the Year award. In 1995, the Ballon dOr was expanded to include all players from any origin that have been active at European clubs.[4][5] The award became a global prize in 2007 with all professional footballers from around the world being eligible.[6]
  


  
    </Col>


  </Row>
</Container>





</div>




<div className={footerStyles.home_div}>
             <Container>
                 <Row>
                     <Col className="text-light text-center" xs={12}> <Link href="https://gogadesign.uk"><span style={{color:"white"}}>ALL RIGHTS RESERVED</span></Link> || <Link href="https://gogadesign.uk"><span style={{color:"white"}}> gogaDesign</span></Link>
                     
                     </Col>

                     <Col className="text-light text-center" xs={12}>
                       <br></br>
                       goranivankovic87@gmail.com
                     
                     </Col>
                 
                 </Row>
             </Container>

                
            </div>










   

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
