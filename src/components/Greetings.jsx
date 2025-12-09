function Greetings(props) {
  const { lang, children } = props;

  let greeting;

  if (lang === "de") {
    greeting = "Hallo";
  } else if (lang === "en") {
    greeting = "Hello";
  } else if (lang === "es") {
    greeting = "Hola";
  } else if (lang === "fr") {
    greeting = "Bonjour";
  }

  return (
    <p className="greetings">
      {greeting} {children}
    </p>
  );
}

export default Greetings;
