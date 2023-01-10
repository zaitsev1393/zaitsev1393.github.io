const Link = ({ text, link }) => {
  const style = {
    fontSize: "18px",
    color: "#ECB365",
    padding: "5px",
    display: "block"
  }
  return (
    <a target = "_blank" style = { style } href = { link }>{ text }</a>
  )
}

export default Link;