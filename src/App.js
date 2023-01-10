import Paragraph from "./components/Paragraph";
import Navbar from "./components/Navbar";
import Links from "./components/Links";
import addIds from "./shared/id-mapper";
import Footer from "./components/Footer";

function App() {
  const name = 'Glib Zaycev';
  const paragraphs = addIds([
    { 
      title: "About me", 
      description: ` Hello! My name is Glib, I am a software engineer from Zaporizhzhya, Ukraine, the motherland of Cossacks, currently located in Kyiv, Ukraine.
        
        I started my career as a fullstack developer at 2016 and since then worked in several long-term projects, which included websites and hybrid mobile apps.

        I specialize in Javascript, Typescript and Angular but I expand my skillset with different technologies daily. This blog is built in React as an exercise to learn something new. I believe that although theory is important, you only can truly understand things after building them. And dissasembling.

        In my free time I educate myself online, work on side projects, play football and videogames, read books and listen to a lot of cool music and take care of belgian griffon and balinese kitten. Soon I am going to marry my beautiful fiancée.
      `
    },
    { 
      title: "About you", 
      description: "You're unique and cool, just a reminder ;)" 
    }
  ]);
  return (
    <>
      <Navbar name = { name } />
      { 
        paragraphs.map(({ id, title, description }) => 
          <Paragraph key = { id } title = { title } description = { description }/>
        )
      }
      
      <Links />
      <Footer />
    </>
  );
}

export default App;
