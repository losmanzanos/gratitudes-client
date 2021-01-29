import React, { useState, useEffect } from "react";
import "./EditEntry.css";

const EditEntry = (props) => {
  useEffect(async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/http://https://gratitudes-server.herokuapp.com/api/gratitudes/${props.match.params.id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(response);
    setThankfulFor(data.thankful_for);
    setDidWell(data.did_well);
    setAchieve(data.achieve);
    setSoc(data.soc);
  }, []);

  const [thankful_for, setThankfulFor] = useState("");
  const [did_well, setDidWell] = useState("");
  const [achieve, setAchieve] = useState("");
  const [soc, setSoc] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { thankful_for, did_well, achieve, soc };
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/http://https://gratitudes-server.herokuapp.com/api/gratitudes/${props.match.params.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/gratitude";
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteGratitude = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/http://https://gratitudes-server.herokuapp.com/api/gratitudes/${props.match.params.id}`,
        {
          method: "DELETE",
        }
      );

      window.location = "/gratitude";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
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
            Save
          </button>
          <button
            type="submit"
            className="btn delete"
            id="delete"
            onClick={deleteGratitude}
          >
            Delete
          </button>
          <button
            type="submit"
            className="btn cancel"
            onClick={(e) => props.history.push("/gratitude")}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEntry;
