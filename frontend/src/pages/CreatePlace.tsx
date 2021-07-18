import * as React from "react";
export const CreatePlace: React.FC = () => {
  return (
    <div className="place-container">
      <div>
        <div>
          <h2> What kind of place will you host? </h2>
        </div>
        <div>
          <form className="place-form">
            <div className="button">
              <button type="button" role="radio" aria-checked="false">
                <h3>Apartment</h3>
              </button>
            </div>
            <div className="button">
              <button type="button" role="radio" aria-checked="false">
                <h3>House</h3>
              </button>
            </div>
            <div className="button">
              <button type="button" role="radio" aria-checked="false">
                <h3>Self-contained unit</h3>
              </button>
            </div>
            <div className="button">
              <button type="button" role="radio" aria-checked="false">
                <h3>Unique space</h3>
              </button>
            </div>
            <div className="button">
              <button type="button" role="radio" aria-checked="false">
                <h3>Bread and breakfast</h3>
              </button>
            </div>
            <div className="button">
              <button type="button" role="radio" aria-checked="false">
                <h3>Botique hotel</h3>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
