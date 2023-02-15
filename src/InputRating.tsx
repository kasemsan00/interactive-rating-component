import React, { useState } from "react";

interface Props {
  setRating: (arg0: number) => void;
}

export default function ({ setRating }: Props) {
  const [selectRating, setSelectRating] = useState(0);
  const handleSetRating = (e: React.MouseEvent<HTMLSpanElement>) => {
    const value = (e.target as HTMLDivElement).innerHTML;
    setSelectRating(parseInt(value));
  };
  const handleSubmit = () => {
    setRating(selectRating);
  };

  return (
    <div className="card">
      <div className="icon-star">
        <img alt={"icon-star"} src={"../images/icon-star.svg"} />
      </div>
      <label className="card-title">How did we do?</label>
      <label className="card-description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </label>
      <div className="star-section">
        <span
          className={`star-point ${
            selectRating === 1 ? "star-point-active" : ""
          }`}
          onClick={handleSetRating}
        >
          1
        </span>
        <span
          className={`star-point ${
            selectRating === 2 ? "star-point-active" : ""
          }`}
          onClick={handleSetRating}
        >
          2
        </span>
        <span
          className={`star-point ${
            selectRating === 3 ? "star-point-active" : ""
          }`}
          onClick={handleSetRating}
        >
          3
        </span>
        <span
          className={`star-point ${
            selectRating === 4 ? "star-point-active" : ""
          }`}
          onClick={handleSetRating}
        >
          4
        </span>
        <span
          className={`star-point ${
            selectRating === 5 ? "star-point-active" : ""
          }`}
          onClick={handleSetRating}
        >
          5
        </span>
      </div>
      <div>
        <button className={"submit-button"} onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}
