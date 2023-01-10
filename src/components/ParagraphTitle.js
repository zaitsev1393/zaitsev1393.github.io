const ParagraphTitle = ({ title }) => {
  const style = {
    fontSize: "22px",
    padding: "5px",
    paddingBottom: 0,
    marginBottom: "-5px"
  }
  return (
    <h1 style = { style }>{ title }</h1>
  )
}

export default ParagraphTitle;