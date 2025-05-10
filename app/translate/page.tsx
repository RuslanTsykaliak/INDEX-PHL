import { T } from "gt-next";


// This is a test page to check if the translation works in the production build.



export default function Translate() {
  const translatedText = "Translated text is here!";
  return (

    <T>
      <div>{translatedText}</div>
    </T>
  )
}
