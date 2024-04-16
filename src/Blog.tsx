// Create a new React project with Vite and set up the basic structure.
//
// Step 1: Create a component called Blog and add it to App.tsx.
//
// Step 2: Take your blog from the HTML task and recreate it in React.
// Divide your blog thoughtfully into components. The components should
// come together in the Blog component.
//
// If you have already completed this task earlier, you may work on the
// bonus task on the next page.

import './Blog.css'

function Blog():JSX.Element {
    return  <>
        <h1>Carstens Blog</h1>
        <ul className="blog-article-list">
            <Article1 />
            <Article2 />
            <Article3 />
        </ul>
    </>

}

function Article1():JSX.Element {
    //<!-- erster Artikel -->
    return <li className="blog-article blog-article1">
        <article className="article1">
            <h2>BlahBlubb</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti error et facere possimus? A ab beatae
                delectus dolore dolores est, fugiat maiores praesentium quae suscipit, temporibus ullam veritatis
                voluptatem, voluptatum!</p>
        </article>
    </li>

}

function Article2(): JSX.Element {
    //<!-- zweiter Artikel -->
    return <li className="blog-article blog-article2">
        <article className="article2">
            <h2>Vorstellung: mein Motorrad</h2>
            <p>Hier möchte ich Euch mein Motorrad vorstellen. Es handelt sich um eine Aprilia RS 660.</p>
            <img src="./img/Motorrad.jpg" alt="Aprilia RS 660"/>
            <h3>erhältliche Farbschemata</h3>
            <ul>
                <li>Schwarz Racing</li>
                <li>Acid Gold</li>
                <li>Tribute</li>
            </ul>
            <p>Weitere Informationen auf der <a href="https://www.aprilia.com/de_DE/modelle/rs-660/"
                                                target="_blank">Produktwebseite</a></p>
            <p>Das Fazit der Zeitschrift Motorrad im <a
                href="https://www.motorradonline.de/supersportler/aprilia-rs-660-fahrbericht-test/" target="_blank">ersten
                Fahrbericht</a>:</p>
            <blockquote>
                Die RS 660 ist ein sehr gutes Motorrad geworden. Dafür, wie sie den Spagat zwischen Alltagsmotorrad und
                Sportler hinbekommen haben, verdienen die Leute bei Aprilia ein Dankeschön. Einst gab es für
                sportbegeisterte Motorradfahrer auf der Landstraße die 600er-Klasse mit den knapp 100 PS starken
                Vierzylindern aus Japan. Seit diese zu Drehorgeln für die Rennstrecke mutierten, blieb solchen
                Zeitgenossen nur der Schritt zu den Superbikes mit Mega-Leistung oder Naked Bikes der oberen
                Mittelklasse. Mit der RS 660 sind die spaßbeseelten Landstraßen-Sportler wieder zurück – gut so!
            </blockquote>
        </article>
    </li>

}

function Article3(): JSX.Element {
    //<!-- dritter Artikel -->
    return <li className="blog-article blog-article3">
        <article className="article3">
            <h2>BlubbBlah</h2>
            <p>Deleniti error et facere possimus? A ab beatae delectus dolore dolores est, fugiat maiores praesentium
                quae suscipit, temporibus ullam veritatis voluptatem, voluptatum!</p>
        </article>
    </li>

}

export default Blog