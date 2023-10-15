import { useState, useId } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form } from "react-final-form";
import { Field } from "react-final-form";

const NamesCollectionForm = ({ collect }) => {
  const [nameIds, setNameIds] = useState(["initialId"]);
  return (
    <div>
      <div>Iveskit sarasa vardu</div>
      <Form
        onSubmit={(data) => {
          collect(data);
        }}
      >
        {({ handleSubmit, resetFieldState }) => (
          <form onSubmit={handleSubmit}>
            {nameIds.map((fieldId) => (
              <div key={fieldId}>
                <Field name={fieldId} component="input" placeholder="vardas" />
                <button
                  onClick={() => {
                    setNameIds(nameIds.filter((id) => id !== fieldId));
                    resetFieldState(fieldId);
                  }}
                >
                  x
                </button>
              </div>
            ))}
            <br></br>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setNameIds((ids) => [...ids, uuidv4()]);
                }}
              >
                Prideti dar viena varda
              </button>
            </div>
            <div>
              <button type="submit">Isvardinti poras</button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export const InitialView = () => {
  const [listOfNames, setListOfNames] = useState(null);
  console.log(listOfNames);
  return (
    <div>
      {!listOfNames && (
        <NamesCollectionForm collect={(data) => setListOfNames(data)} />
      )}
      {listOfNames && (
        <div>
          sarasasVardu:
          {listOfNames &&
            Object.keys(listOfNames)?.map((id) => <div>{listOfNames[id]}</div>)}
        </div>
      )}
      <div></div>
    </div>
  );
};
