import addIds from "../shared/id-mapper";
import Link from "./Link"
import ParagraphTitle from "./ParagraphTitle";

const Links = () => {
  const style = {
    width: "50vw",
    margin: "0 auto",
    marginBottom: "30px",
  }
  let links = addIds([
    { text: "Twitter", link: "https://twitter.com/StarnightViewer" },
    { text: "Github", link: "https://github.com/zaitsev1393" },
    { text: "LinkedIn", link: "https://www.linkedin.com/in/glib-zaycev-89096a10a/" }
  ])

  return (
    <>
      <div style = { style }>
        <hr />
        <ParagraphTitle title = { 'Links' } />
        {
          links.map(({ id, text, link }) => 
            <Link key = { id } link = { link } text = { text }/>
          )
        }
      </div>
    </>
  )
}

export default Links;