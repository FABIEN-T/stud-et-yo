import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

import image761 from '../assets/H47A4761.jpg'
import image679 from '../assets/H47A4679.jpg'
import image736 from '../assets/H47A4736.jpg'

export default function Biography() {
  return (
    <div className="page">
      <div className="headerMain">
        <Header />
        <main>
          <section>
            <h2>Stud & Yo</h2>
            <article>
              <div className="my-imageBio">
                <img src={image761} alt="concert" />
              </div>
              <p>
                Du chant de sa mère au berceau, aux chansons reprises en chœur
                dans les grandes tablées de repas familiaux naît le goût de
                composer des chansons chez Emmanuelle Desimpel. Très jeune, la
                musique et l’écriture feront partie de ses pratiques mais c’est
                autour des années 2000 qu’elle décidera de chanter publiquement
                celles qu’elle a déjà composées notamment avec le groupe ALHEM
                (musique arabo andalouse) dans lequel elle est saxophoniste. En
                2006, elle construit un programme entier de ses chansons avec
                STUD, surnom qu’on lui a donné et qui deviendra le nom du
                groupe. Elle s’entoure pour l’accompagner de 2 musiciens :
                Johann Vigon Batteur - percussionniste, choriste et Teddy Moire
                contrebassiste .Le groupe tourne ainsi quelques années avant de
                sortir un premier CD de 7 titres en 2008. S’en suit quelques
                premières parties remarquables : Carmen Maria Vega aux nuits de
                champagne, Joel Favreau au festival Rabardels, Rachid Taha, etc…
                Tout en continuant à se produire aussi en solo comme elle a
                toujours fait, STUD voit une nouvelle aire s’ouvrir en cette
                année 2022 : la formation redémarre en duo avec Johann Vigon le
                batteur – percussionniste – choriste.
              </p>
            </article>
          </section>
          <section>
            <h2 id="bioDesimpel">Emmanuelle Desimpel</h2>
            <article>
              <div className="paralist">
                <p>
                  Baignée dans la musique depuis son enfance Emmanuelle reçoit
                  sa première guitare a 13 ans .A 14 ans elle veut entrer au
                  conservatoire a Troyes .Elle y étudie le solfège et le
                  saxophone. A 20 ans elle ira a l’université Paris 8 ou elle
                  obtiendra une licence de musicologie. Elle fera toutes ces
                  années plusieurs expériences de groupes (folk, rock, afro…) :
                </p>
                <ul>
                  <li>
                    <em>Jala Mano</em>, musique kabyle / compositeur Mohamed
                    Halata
                  </li>
                  <li>
                    <em>Jacob Diboum</em>, musique camerounaise
                  </li>
                  <li>
                    <em>Alhem</em> avec Mustapha Bouneb, musique arabo-andalouse
                  </li>
                  <li>
                    <em>Karma</em>, jazz coltrainien
                  </li>
                  <li>
                    <em>KEETCH</em>, variété latino
                  </li>
                  <li>
                    <em>STUD</em>, chanson française
                  </li>
                </ul>
                <p>
                  Elle a composé aussi pour le théâtre et met des textes
                  d’auteur en musique
                </p>
              </div>
              <div className="my-imageBio">
                <img src={image679} alt="concert" />
              </div>
            </article>
          </section>
          <section>
            <h2 id="bioVigon">Johann Vigon</h2>
            <article>
              <div className="my-imageBio">
                <img src={image736} alt="concert" />
              </div>
              <div className="paragraphLink">
                <p>
                  Il découvre la musique a 17 ans, mais dès lors, celle-ci ne le
                  quittera plus un instant, Musicien professionnel depuis 1995,
                  batteur de Jazz, puis percussionniste. Il se formera auprès
                  des plus grands musiciens dans chaque discipline, en
                  percussions africaines avec Fadouba Oularé, Mamady Keita,
                  Famoudou Konaté, Jalil Toukja … en Percussions orientales avec
                  Hassan Abdel Khalek et en percussions afro-cubaine avec
                  Orlando Poleo et Guido Broglé. Très vite, il aura l’occasion
                  de participer à de nombreuses formations, jazz, chansons
                  françaises ou de musiques du monde, il aura l’occasion de
                  jouer avec des Artistes comme: Mimi Lorenzini, Nicolas
                  Pautras, Manu Codja, Nicolas Moreaux, René Sopa, Seckou Keita,
                  Emmanuelle Desimpel, Layba Kourouma, …)
                </p>
                <Link to="http://johannvigon.fr/" className="linkJohannVigon">
                  Voir son site
                </Link>
              </div>
            </article>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  )
}
