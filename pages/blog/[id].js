import {Container,Row,Col,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Flag from 'react-world-flags'
import Link from 'next/link'
import Navic from '../../components/Nav/Navic';
import Footer from '../../components/Footer/Footer'
import idStyle from '../../styles/Id.module.css'



export default function Post(props) {



    return (
        <div className={idStyle.main}>
          <Navic />
           
            <Container> 
              <Row>
                <Col xs={12}># <span className="text-primary h5">{props.data.id}</span> </Col>
                <br></br>
                <Col className="h2" xs={12}>{props.data.name} ({props.data.club.team}) <Flag code={ props.data.club.countryName } style={{height:"40px",width:"40px"}}/> </Col>
                <br></br>
                <Col xs={12} className="h6"><span className="text-danger h3"></span> In 2021 : <span className="text-danger">{props.data.stats.goals}</span> goals  , <span className="text-danger">{props.data.stats.assists}</span> assists , Trophy won : <span className="text-danger">{props.data.stats.trophys}</span></Col>
                <br></br>
                
                <Col xs={12}  className="h6"> 
                 Team : {props.data.club.team} , Country :  {props.data.club.country}
          
                  
                  </Col>
           
                

                  <Col xs={12}  className="h6"> 
                  Points in voting : <span className="text-danger">{props.data.points}</span>
          
                  
                  </Col>


              
              

                     
                <Col xs={12}  className="h6"> 
                 Actual ranking :<span className="text-primary h5"> {props.data.id}</span> st 
          
                  
                  </Col>
                  <hr></hr>
               

                  <Col xs={12}> 
              {props.data.message}
          
                
                  </Col>
                  <br></br>
                  
                  <Col>
                  <br></br>
                  <Button href={props.data.website}>Web Site</Button>
       
                  </Col>
             
              </Row>
              </Container>
              <br></br>
         

                  <Footer />
                 

           


            
        </div>
    )
}






// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/api/players/top10')
//   const posts = await res.json()



//   const paths = posts.map((post) => ({
//     params: {id: post.id.toString()},
//   }))


//   return { paths, fallback: false }


   
//   }


  export async  function  getServerSideProps({params}) {
    const res = await fetch(`https://next-js-football-project.vercel.app/api/players/p${params.id}`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {data}
    }
  }
  
  





