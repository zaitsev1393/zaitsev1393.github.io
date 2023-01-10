import "./navbars.css";
import githubLogo from "./../assets/img/icons8-github.svg";

const Navbar = ({ name }) => {
  const onLogoClicked = () => {
    console.log("clicked");
    window.open("https://github.com/zaitsev1393");
  }
  return (
    <div className = "content"> 
      <div>{ name }</div>
      <img onClick = { onLogoClicked } className = "logo" src = { githubLogo } alt = "Github" />
    </div>
  )
}

export default Navbar;