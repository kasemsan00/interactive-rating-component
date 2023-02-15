interface Props {
  rating: number;
}

export default function ThankYou({ rating }: Props) {
  return (
    <div className="card">
      <div className={"thank-you-section"}>
        <div className={"thank-you-logo"}>
          <img alt={"Thank you"} src={"./images/illustration-thank-you.svg"} />
        </div>
        <div className={"select-point"}>
          <label className={"select-point-text"}>
            You selected {rating} out of 5
          </label>
        </div>
        <div className={"thank-you-description"}>
          <label className="card-title">Thank you!</label>
          <label className="card-description" style={{ textAlign: "center" }}>
            We appreciate you taking the time to give a rating. if you ever need
            more support, don't hasitate to get in touch!
          </label>
        </div>
      </div>
    </div>
  );
}
