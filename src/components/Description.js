const Description = ({ description }) => {
  const style = {
    padding: "5px",
    fontSize: "16px",
    fontFamily: "Roboto",
    whiteSpace: "pre-line"
  }
  return (
    <div style = { style }>{ description }</div>
  )
}

export default Description;