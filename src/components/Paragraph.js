import Description from "./Description";
import ParagraphTitle from "./ParagraphTitle";

const Paragraph = ({ title, description }) => {
  const style = {
    width: '50vw',
    margin: "0 auto",
    marginTop: "50px",
    marginBottom: "50px"
  }
  return (
    <section style = { style }>
      <ParagraphTitle title = { title }></ParagraphTitle>
      <hr />
      <Description description = { description }/>
    </section>
  )
}

export default Paragraph;