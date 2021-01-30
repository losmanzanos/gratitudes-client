import React, { useState } from "react";
import "./entry.css";
import TokenService from "../../services/token-service";

const Entry = (props) => {
  const [thankful_for, setThankfulFor] = useState("");
  const [did_well, setDidWell] = useState("");
  const [achieve, setAchieve] = useState("");
  const [soc, setSoc] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { thankful_for, did_well, achieve, soc };
      const response = await fetch(
        "https://gratitudes-server.herokuapp.com/gratitudes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify(body),
        }
      );
      props.setShowForm(false);
      props.getGratitudes();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      {props.showForm ? (
        <div className="form-popup" id="myForm">
          <form className="form-container" onSubmit={onSubmitForm}>
            <h1>Gratitude</h1>
            <label>
              <b>What are you thankful for?</b>
            </label>
            <textarea
              id="thankful_for"
              value={thankful_for}
              onChange={(e) => setThankfulFor(e.target.value)}
              required
            />
            <label>
              <b>What did you do well today?</b>
            </label>
            <textarea
              id="did_well"
              value={did_well}
              onChange={(e) => setDidWell(e.target.value)}
              required
            />
            <label>
              <b>What do you hope to achieve tomorrow?</b>
            </label>
            <textarea
              id="achieve"
              value={achieve}
              onChange={(e) => setAchieve(e.target.value)}
              required
            />
            <label>
              <b>Stream of consciousness:</b>
            </label>
            <textarea value={soc} onChange={(e) => setSoc(e.target.value)} />
            <button type="submit" className="btn">
              Submit
            </button>
            <button
              type="submit"
              className="btn cancel"
              onClick={(e) => props.setShowForm(false)}
            >
              Close
            </button>
          </form>
        </div>
      ) : (
        <button
          className="btn"
          id="new-gratitude"
          onClick={(e) => props.setShowForm(true)}
        >
          Add New Gratitude
        </button>
      )}
    </div>
  );
};

export default Entry;
