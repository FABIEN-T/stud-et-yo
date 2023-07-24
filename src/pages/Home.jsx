import Header from '../components/Header'
import Footer from '../components/Footer'
import image678 from '../assets/H47A4678.jpg'
import image638 from '../assets/H47A4638.jpg'

export default function Home() {
  return (
    <div className="page">
      <div className="headerMain">
        <Header />
        <main>
          {/* <div> */}
          <h4>
            « Ce qui nous reste sur le cœur, nous l’allégeons par la musique »
          </h4>
          {/* </div> */}

          <div className="imgContainer">
            <div className="my-image">
              <img src={image638} alt="concert" />
            </div>
            <div className="my-image">
              <img src={image678} alt="concert" />
            </div>
          </div>
          {/* <article className="homeArticle"> */}
          <section>
            <h2>STUD...</h2>
            <p className="paraHome">
              ... C’est
              <a href="/biography/#bioDesimpel"> Emmanuelle Desimpel </a>
              qui évolue entre textes engagés, poésie douce amère et humour
              grinçant. Le propos se veut accessible, chaleureux et teinté d’une
              petite touche évoquant le trio Brel, Brassens, Ferré. Le feeling
              blues habite chaque chanson et une envolée de scat peut surgir a
              tout moment.
            </p>
            <p className="paraHome">
              Avec la complicité du batteur, percussioniste et choriste
              <a href="/biography/#bioVigon"> Johann Vigon </a>
              qui accompagne la chanteuse guitariste depuis près de trente ans.
            </p>
            {/* </article> */}
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}
