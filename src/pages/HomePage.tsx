// HomePage component
// For external links, research the security attribute that should always be applied to 'target="_blank" links - it was mentioned in the design document's security section.
export default function HomePage() {
//render:
//  section
//    heading: your name
//    paragraph: professional summary
//    contact links
//      anchor: LinkedIn (external)
//      anchor: GitHub (external)
//      anchor: email (mailto:)
    return (
        <div>
            <h1>Name</h1>
            <p>Zachary Johnson</p>
            <h1>Summary</h1>
            <p>This will be a summary of me.</p>
            <h1>Contact Links</h1>
            <p>Links go somewhere below here. </p>
        </div>
    )
}