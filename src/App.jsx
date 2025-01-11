/*****************************************
 * * IMPORT LIBRARIES
 *****************************************/

// react libraries

// import components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { heading } from "./components/main/data";
import ActionButton from "./components/ActionButton";
import ImageWithCaption from "./components/ImageWithCaption";
import cat from "./assets/cat.jpg";
import ColorBlock from "./components/ColorBlock";

/*****************************************
 * * COMPONENT
 *****************************************/

export default function App() {
  const date = new Date();
  const description = "Beautiful Tuxedo";
  const color_of_square = "purple";

  console.log(`The cat image variable is ${cat}`);
  return (
    <div className="app">
      <Header text={heading} />

      <ActionButton
        label="Click me"
        onAction={() => alert("Button clicked!")}
      />
      <ImageWithCaption src={cat} caption={description} />
      <ColorBlock color={color_of_square} />

      <Footer
        year={date.getFullYear()}
        name="Elad Silam - 208112185 && Shai Salem 314784372"
      />
    </div>
  );
}
