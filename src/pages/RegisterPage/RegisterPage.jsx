import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import s from "./RegisterPage.module.css";
import { registerThunk } from "../../redux/auth/operations";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { registerFormSchema } from "../../schemas/validatorLogin";
import User from "../../components/Icons/UserIcon";
import PasswordStrengthBar from "react-password-strength-bar-with-style-item";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(registerThunk(values));
  };

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <div className={s.title_wrap}>
          <img
            src="../../../public/Money Guard.svg"
            alt="logo"
            className={s.logo}
          />
          <h1 className={s.title}>Money Guard</h1>
        </div>

        <div className={s.formik}>
          <Formik
            initialValues={initialValues}
            validationSchema={registerFormSchema}
            onSubmit={handleSubmit}
          >
            <Form className={s.form}>
              <ul className={s.list}>
                <li className={s.item}>
                  <div className={s.input_wrap}>
                    <label className={s.label}>
                      <span className={s.span}></span>

                      {/* <span className={s.span}>UserName</span> */}
                      {/* <span className={s.span}> */}
                      {/* <img src="../../images/icons/user-icon.svg" alt="user" /> */}
                      {/* </span> */}
                    </label>
                    <User />
                    {/* <img src="../../images/icons/user-icon.svg" alt="user" /> */}
                    <Field
                      name="name"
                      type="name"
                      placeholder="Name"
                      className={s.input}
                      required
                    />
                    <ErrorMessage
                      className={s.error}
                      name="name"
                      component="span"
                    />
                  </div>
                </li>
                <li className={s.item}>
                  <div className={s.input_wrap}>
                    <label className={s.label}>
                      {/* <span className={s.span}>
                        <img src="../../images/icons/email-icon.svg" />
                      </span> */}
                      <span className={s.span}></span>

                      {/* <span className={s.span}>Email</span> */}
                    </label>

                    <Field
                      name="email"
                      type="email"
                      placeholder="E-mail"
                      className={s.input}
                      required
                    />
                    <ErrorMessage
                      className={s.error}
                      name="email"
                      component="span"
                    />
                  </div>
                </li>
                <li className={s.item}>
                  <div className={s.input_wrap}>
                    <label className={s.label}>
                      <span className={s.span}></span>

                      {/* <span className={s.span}>
                        <img src="../../images/icons/pass-icon.svg" />
                      </span> */}
                      {/* <span className={s.span}>Password</span> */}
                    </label>
                    <Field
                      name="password"
                      type="password"
                      placeholder="Password"
                      className={s.input}
                      required
                    />
                    <ErrorMessage
                      className={s.error}
                      name="password"
                      component="span"
                    />
                  </div>
                </li>
                <li className={s.item}>
                  <div className={s.input_wrap}>
                    <label className={s.label}>
                      <span className={s.span}></span>

                      {/* <span className={s.span}>
                        <img src="../../images/icons/pass-icon.svg" />
                      </span> */}
                      {/* <span className={s.span}>Confirm password</span> */}
                    </label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm password"
                      className={s.input}
                      required
                    />
                    <ErrorMessage
                      className={s.error}
                      name="confirmPassword"
                      component="span"
                    />
                    <PasswordStrengthBar
                      password={"password"}
                      className="bar"
                      scoreWordClassName="bar_sections"
                    />
                  </div>
                </li>
              </ul>

              {/* <p className={s.bar}>bar</p> */}

              <ul className={s.btn_wrapper}>
                <li>
                  <button type="submit" className={s.register_btn}>
                    REGISTER
                  </button>
                </li>

                <li>
                  <button type="button" className={s.login_btn}>
                    <Link to="/login"> LOG IN</Link>
                  </button>
                </li>
              </ul>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
