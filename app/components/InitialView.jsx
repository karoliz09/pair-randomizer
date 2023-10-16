import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Field } from "react-final-form";
import { generatePairs } from "../utils";

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
  const [pairs, setPairs] = useState(null);
  const [config, setConfig] = useState({});
  useEffect(() => {
    const ids = Object.keys(data);
    const configToSet = ids.reduce((acc, id) => {
      return {
        ...acc,
        [id]: {
          id,
          name: data[id],
          suggestions: ids?.filter((innerId) => id !== innerId),
          selected: [],
        },
      };
    }, {});
    setConfig(configToSet);
  }, []);
  console.log({
    title: "RENDER",
    config,
  });
  return (
    <div>
      Atzymekite kas negali tarpusavi keistis dovanomis:
      <br />
      {Object.values(config)?.map(({ id }) => (
        <div key={id}>
          <div>
            <b>{config[id].name}</b>
          </div>
          {config[id].suggestions.map((currentId) => (
            <span key={currentId}>
              <input
                type="checkbox"
                checked={config[id].selected.indexOf(currentId) > -1}
                onChange={(e) => {
                  if (e.target.checked) {
                    console.log({
                      title: "true",
                      config,
                    });
                    const next = {
                      ...config,
                      [id]: {
                        ...config[id],
                        selected: [...config[id].selected, currentId],
                      },
                    };
                    setConfig(next);
                    console.log(config);
                  } else {
                    console.log({
                      title: "ELSE",
                      config,
                    });
                    setConfig({
                      ...config,
                      [id]: {
                        ...config[id],
                        selected: (config[id].selected || []).filter(
                          (innerId) => currentId !== innerId
                        ),
                      },
                    });
                  }
                }}
              />
              {data[currentId]}
            </span>
          ))}
          <br />
        </div>
      ))}
      <button
        onClick={() => {
          setPairs(generatePairs(config));
        }}
      >
        Sugeneruoti poras
      </button>
      {pairs?.map((pair) => (
        <div>{`${config[pair[0]].name} dovanoja dovana ${
          config[pair[1]].name
        }`}</div>
      ))}
    </div>
  );
};

export const InitialView = () => {
  const [listOfNames, setListOfNames] = useState(null);

  console.log("INITIAL VIEW");
  return (
    <div>
      {!listOfNames && (
        <NamesCollectionForm
          collect={(namesList) => setListOfNames(namesList)}
        />
      )}
      {listOfNames && <RulesCollection data={listOfNames} />}
    </div>
  );
};
