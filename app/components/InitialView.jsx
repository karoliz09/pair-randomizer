import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

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

const RulesCollection = ({ data }) => {
  const [config, setConfig] = useState(() => {
    const ids = Object.keys(data);
    const configToSet = ids.reduce((acc, id) => {
      return {
        ...acc,
        [id]: {
          id,
          name: data[id],
          selectableIds: ids?.filter((innerId) => id !== innerId),
        },
      };
    }, {});
    console.log(configToSet);
    return configToSet;
  });
  const ids = Object.keys(config);
  return (
    <div>
      Atzymekite kas negali tarpusavi keistis dovanomis:
      <br />
      {data &&
        ids?.map((id) => (
          <div key="id">
            <div>
              <b>{data[id]}</b>
            </div>
            {[
              config[id].selectableIds.map((i) => (
                <span>
                  <input type="checkbox" checked />
                  {data[i]}
                </span>
              )),
            ]}
            <br />
          </div>
        ))}
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
      {listOfNames && <RulesCollection data={listOfNames} />}
    </div>
  );
};
