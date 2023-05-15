import { styled } from "styled-components";
import { useForm } from "react-hook-form";
const Form = (): JSX.Element => {
  return (
    <FormContainer>
      <form>
        <label>
          <input type="text" placeholder="First Name" />
        </label>

        <label>
          <input type="text" placeholder="Last Name" />
        </label>

        <label>
          <input type="text" placeholder="Email Addres" />
        </label>

        <label>
          <input type="text" placeholder="Password" />
        </label>

        <button type="submit">CLAIM YOUR FREE TRIAL</button>
      </form>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }

  label {
    width: 100%;
  }

  input {
    width: 100%;
    background: #ffffff;
    border: 1px solid #dedede;
    border-radius: 5px;
    outline: none;
    padding: 15px 32px;
    color: #3d3b48;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 0.25px;
    font-weight: 600;

    :focus {
      outline: none;
    }
  }

  button {
    width: 100%;
    height: 56px;
    border: none;
    text-align: center;
    background: #38cc8b;
    box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
    border-radius: 5px;
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: 26px;
  }
`;
