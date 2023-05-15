import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { types } from "../types";
import schema from "./schema";
import img from "../assets/icon-error.svg";

const Form = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<types>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: types) => {
    console.log(data);
  };

  return (
    <FormContainer error={errors}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName")}
            className="first"
          />
          <img className="firstImg" src={img} alt="error icon" />
          <p>{errors.firstName?.message}</p>
        </label>

        <label>
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName")}
            className="last"
          />
          <img className="lastImg" src={img} alt="error icon" />
          <p>{errors.lastName?.message}</p>
        </label>

        <label>
          <input
            type="text"
            placeholder="Email Addres"
            {...register("email")}
            className="email"
          />
          <img className="emailImg" src={img} alt="error icon" />
          <p>{errors.email?.message}</p>
        </label>

        <label>
          <input
            type="text"
            placeholder="Password"
            {...register("password")}
            className="password"
          />
          <img className="passwordImg" src={img} alt="error icon" />
          <p>{errors.password?.message}</p>
        </label>

        <button type="submit">CLAIM YOUR FREE TRIAL</button>
      </form>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.div<{ error: any }>`
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
    display: flex;
    flex-direction: column;
    gap: 6px;
    position: relative;

    p {
      color: #ff7979;
      font-size: 11px;
      font-style: italic;
      font-weight: 500;
      line-height: 17px;
      text-align: right;
    }

    .firstImg {
      display: ${(props) => (props.error.firstName ? "block" : "none")};
    }

    .lastImg {
      display: ${(props) => (props.error.lastName ? "block" : "none")};
    }

    .emailImg {
      display: ${(props) => (props.error.email ? "block" : "none")};
    }

    .passwordImg {
      display: ${(props) => (props.error.password ? "block" : "none")};
    }
  }

  img {
    position: absolute;
    top: 15px;
    right: 10px;
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

  .first {
    border: ${(props) =>
      props.error.firstName ? "2px solid #FF7979" : "1px solid #dedede"};
  }

  .last {
    border: ${(props) =>
      props.error.lastName ? "2px solid #FF7979" : "1px solid #dedede"};
  }

  .email {
    border: ${(props) =>
      props.error.email ? "2px solid #FF7979" : "1px solid #dedede"};
  }

  .password {
    border: ${(props) =>
      props.error.password ? "2px solid #FF7979" : "1px solid #dedede"};
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
