import masterCardImg from "../assets/images/master-card.svg";
import visaImg from "../assets/images/visa.png";

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const boxStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    // padding: "20px",
    // margin: "10px",
    // border: "1px solid black",
    // textAlign: "center",
  };

  let pictureURL;
  if (type === "Master Card") {
    pictureURL = masterCardImg;
  } else {
    pictureURL = visaImg;
  }

  return (
    <div className="credit-card">
      <img src={pictureURL} alt="type" />
      <div style={boxStyle}>
        <p>{number}</p>
        <p>
          Expires {expirationMonth}/{expirationYear}
        </p>
        <p>{bank}</p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
