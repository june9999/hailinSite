"use client";
import { useFormState } from "@/lib/hooks";
// the common form to register or login by changing the method
const Form = ({ method }) => {
  // event.preventDefault, loading, error, reset, duplicateprevent

  const { state, submitHandler } = useFormState(method);

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" required />
      <button disabled={state.loading}>Submit</button>
      {state.error && <div>{state.error}</div>}
    </form>
  );
};

export default Form;
