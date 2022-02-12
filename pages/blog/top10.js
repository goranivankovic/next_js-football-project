import {Container,Row,Col,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navic from '../../components/Nav/Navic';
import Flag from 'react-world-flags'


import Link from 'next/link'



import footerStyles from '../../styles/Footer.module.css'
import Footer from '../../components/Footer/Footer';





function Top10(props) {


    return (
        <div>
            <Navic />
            <br></br>

           {props.data.map((el)=>


<Container key={el.id}> 
<Row>
  <Col xs={12}># <span className="text-primary h5">{el.id}</span> </Col>
  <br></br>
  <Col className="h2" xs={12}>{el.name} ({el.club.team}) <Flag code={ el.club.countryName } style={{height:"40px",width:"40px"}}/> </Col>
  <br></br>
  <Col xs={12} className="h6"><span className="text-danger h3"></span> In 2021 : <span className="text-danger">{el.stats.goals}</span> goals  , <span className="text-danger">{el.stats.assists}</span> assists , Trophy won : <span className="text-danger">{el.stats.trophys}</span></Col>
  <br></br>

  <Col xs={12}  className="h6"> 
   Team : {el.club.team} , Country :  {el.club.country}

    
    </Col>
    <br></br>


    <Col xs={12}  className="h6"> 
    Points in voting : <span className="text-danger">{el.points}</span>

    
    </Col>


    <br></br>


       
  <Col xs={12}  className="h6"> 
   Actual ranking :<span className="text-primary h5"> {el.id}</span> st 

    
    </Col>
    <hr></hr>


    <Col xs={12}> 
{el.message}

  
    </Col>
    <br></br>

    <Col>
    <br></br>
    <Button href={el.website}>Web Site</Button>

    </Col>
    <Col xs={12}>
      <br></br>
   
    
    </Col>
 

</Row>
</Container>

          )}

          <br></br>

          <Footer/>


            
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
      props: { data }, // will be passed to the page component as props
    }
  }


  export default  Top10;
