import { Field, Form, Formik, ErrorMessage } from "formik";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import s from "./LoginPage.module.css";
import { loginThunk } from "../../redux/auth/operations";
import { loginFormSchema } from "../../schemas/validatorLogin";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(loginThunk(values));
  };

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    // <div className={s.div}>
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
            validationSchema={loginFormSchema}
            onSubmit={handleSubmit}
          >
            <Form className={s.form}>
              <ul className={s.list}>
                <li>
                  <div className={s.input_wrap}>
                    <label className={s.label}>
                      <span className={s.span}></span>
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="email"
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
                <li>
                  <div className={s.input_wrap}>
                    <label className={s.label}>
                      {/* <span className={s.span}>Password</span> */}
                    </label>
                    <Field
                      name="password"
                      type="password"
                      placeholder="password"
                      className={s.input}
                      required
                    />
                    <ErrorMessage
                      className={s.error}
                      name="password"
                      component="Field"
                    />
                  </div>
                </li>
              </ul>

              <div className={s.btn_wrapper}>
                <button type="submit" className={s.login_btn}>
                  LOG IN
                </button>
                <button className={s.register_btn}>
                  <Link to="/register">REGISTER</Link>
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
    // </div>
  );
};
