import React from "react";
import { useFormState } from "../../common/hooks";
import validate from "../validate";
import Input from "./Input";
import InputArray from "./InputArray";

const Form = () => {
  const initialValues = {
    clubName: "",
    members: [],
  };

  const handleSuccess = (values) => {
    console.log("handleSuccess", values);
  };

  const { state, getField, getFieldArray, onSubmit } = useFormState(
    initialValues,
    validate,
    handleSuccess
  );

  const clubName = getField("clubName");
  const members = getFieldArray("members");

  return (
    <form onSubmit={onSubmit}>
      <Input placeholder={"Club name"} {...clubName} />
      <InputArray getField={getField} {...members} />
      <div>
        <button> SAVE </button>
      </div>
      <div>
        <small>Results</small>
        <div style={{ backgroundColor: "#DDD", fontSize: 14 }}>
          <pre>{JSON.stringify(state.formValues, null, 2)}</pre>
        </div>
      </div>
    </form>
  );
};

export default Form;
