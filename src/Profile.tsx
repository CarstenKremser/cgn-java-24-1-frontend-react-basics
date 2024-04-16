// Bonus: Create a component called profile (which should be at the same level as the
// Blog component in App.tsx) that introduces you as a developer. Use the React basics
// you have learned so far.

import "./Blog.css"

function Profile():JSX.Element {
    return <>
        <h2>Profile</h2>
        <p>Hier möchte ich kurz vorstellen, von wem dieser Blog erstellt wurde. Ich bin Carsten Kremser, ein Entwickler,
            der gerade am Neue Fische Java Fullstack-Entwickler Bootcamp teilnimmt.</p>
    </>
}

export default Profile