import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import s from "./RegisterPage.module.css";
import { registerThunk } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(registerThunk(values));
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
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
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={s.form}>
              <ul className={s.list}>
                <li className={s.item}>
                  <div className={s.input_wrap}>
                    <label className={s.label}>
                      {/* <span className={s.span}>Name</span> */}
                    </label>
                    <Field
                      name="name"
                      type="name"
                      placeholder="Name"
                      className={s.input}
                      required
                    />
                  </div>
                </li>
                <li className={s.item}>
                  <div className={s.input_wrap}>
                    <label className={s.label}>
                      {/* <span className={s.span}>Email</span> */}
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="E-mail"
                      className={s.input}
                      required
                    />
                  </div>
                </li>
                <li className={s.item}>
                  <div className={s.input_wrap}>
                    <label className={s.label}>
                      {/* <span className={s.span}>Password</span> */}
                    </label>
                    <Field
                      name="password"
                      type="password"
                      placeholder="Password"
                      className={s.input}
                      required
                    />
                  </div>
                </li>
                <li className={s.item}>
                  <div className={s.input_wrap}>
                    <label className={s.label}>
                      {/* <span className={s.span}>Confirm password</span> */}
                    </label>
                    <Field
                      name="confirm_password"
                      type="password"
                      placeholder="Confirm password"
                      className={s.input}
                      required
                    />
                  </div>
                </li>
              </ul>

              <p className={s.bar}>bar</p>

              <ul className={s.btn_wrapper}>
                <li>
                  <button type="submit" className={s.register_btn}>
                    REGISTER
                  </button>
                </li>

                <li>
                  <button className={s.login_btn}>
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
