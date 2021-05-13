import React, { useState } from "react";

interface FormComponentProps {
  title: "";
  body: "";
  type: string;
}

export const FormComponent: React.FC<FormComponentProps> = ({
  title,
  body,
  type,
}) => {
  const createHandler = () => {};
  const [titleValue, setTitle] = useState<string>(title);
  const [bodyValue, setBody] = useState<string>(body);

  return (
    <form className="mutate_blog_form">
      <div className="input_wrapper">
        <input
          className="form_input"
          type="text"
          maxLength={15}
          placeholder="Title"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setTitle(e.target.value);
          }}
        />
        <p className="input_length">{`${titleValue.length}/30`}</p>
      </div>
      <div className="input_wrapper">
        <input
          className="form_input"
          type="text"
          maxLength={150}
          placeholder="Body"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setBody(e.target.value);
          }}
        />
        <p className="input_length">{`${bodyValue.length}/150`}</p>
      </div>

      <div style={{ display: "flex" }}>
        <button style={{ marginLeft: "auto" }} type="submit">
          Create
        </button>
      </div>
    </form>
  );
};
