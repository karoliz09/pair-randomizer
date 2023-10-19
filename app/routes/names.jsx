import WhiteBoxWrapper from "../components/WhiteBoxWrapper";
import { useNamesStore } from "../store";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Field } from "react-final-form";

export default function Names() {
  const setNames = useNamesStore((state) => state.setNames);
  const [nameIds, setNameIds] = useState(["initialId"]);

  return (
    <WhiteBoxWrapper>
      <div>
        <h2>Name Pairing Submission Form</h2>
        <p>
          Please enter the names you want to pair up, one per line.<br></br> You
          can include as many names as you need.
        </p>
        <Form
          onSubmit={(data) => {
            console.log(data);
            setNames(data);
          }}
        >
          {({ handleSubmit, resetFieldState }) => (
            <form onSubmit={handleSubmit}>
              {nameIds.map((fieldId) => (
                <div key={fieldId} style={{ marginBottom: "8px" }}>
                  <Field name={fieldId} placeholder="Name">
                    {(props) => (
                      <input className="inputStyle" {...props.input} />
                    )}
                  </Field>
                  <button
                    style={{ marginRight: "8px" }}
                    className="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setNameIds((ids) => [...ids, uuidv4()]);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="grayButton"
                    onClick={() => {
                      setNameIds(nameIds.filter((id) => id !== fieldId));
                      resetFieldState(fieldId);
                    }}
                  >
                    X
                  </button>
                </div>
              ))}

              <br />
              <div>
                - - - - - - - - - - - - -- - - - - - - - - - - - - - - -
              </div>
              <br />
              <div>
                <button type="submit" className="button">
                  Isvardinti poras
                </button>
              </div>
            </form>
          )}
        </Form>
      </div>
    </WhiteBoxWrapper>
  );
}
