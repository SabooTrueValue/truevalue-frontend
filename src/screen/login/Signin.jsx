import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Assuming useNavigate is from React Router v6
import { signgInUserWithEmailAndPassword } from "../../components/context/Firebase";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Signin = () => {
  const backgroundStyle = {
    backgroundImage: `radial-gradient(circle at 77% 66%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 9%,transparent 9%, transparent 43%,transparent 43%, transparent 100%),radial-gradient(circle at 6% 56%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 20%,transparent 20%, transparent 56%,transparent 56%, transparent 100%),radial-gradient(circle at 48% 45%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 15%,transparent 15%, transparent 85%,transparent 85%, transparent 100%),radial-gradient(circle at 89% 6%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 5%,transparent 5%, transparent 32%,transparent 32%, transparent 100%),radial-gradient(circle at 71% 38%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 14%,transparent 14%, transparent 21%,transparent 21%, transparent 100%),radial-gradient(circle at 84% 78%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 11%,transparent 11%, transparent 85%,transparent 85%, transparent 100%),radial-gradient(circle at 92% 72%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 42%,transparent 42%, transparent 51%,transparent 51%, transparent 100%),radial-gradient(circle at 73% 95%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 48%,transparent 48%, transparent 63%,transparent 63%, transparent 100%),radial-gradient(circle at 29% 29%, rgba(43,51,149, 0.04) 0%, rgba(43,51,149, 0.04) 24%,transparent 24%, transparent 73%,transparent 73%, transparent 100%),linear-gradient(90deg, hsl(147,0%,99%),hsl(147,0%,99%))`,
  };
  const navigate = useNavigate(); // Assuming useNavigate is from React Router v6
  const [loading, setLoading] = React.useState(false);

  const validationSchemaStep4 = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div style={backgroundStyle} className="min-h-[90vh] overflow-hidden">
      <div className="flex items-center justify-center h-screen">
        <div className="w-full mx-2">
          <div className="container w-full max-w-lg px-4 py-10 mx-auto bg-white border shadow-xl rounded-3xl">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchemaStep4}
              onSubmit={async (values) => {
                try {
                  setLoading(true);
                  const user = await signgInUserWithEmailAndPassword(
                    values.email,
                    values.password
                  );
                  //console.log(user);
                  setLoading(false);
                  // Store token in local storage upon successful login
                  //   localStorage.setItem("userToken", user.accessToken);
                  localStorage.setItem(
                    "userToken",
                    user._tokenResponse.idToken
                  );

                  navigate("/dashboard");
                } catch (error) {
                  //console.log(error);
                  alert("Invalid email or password");
                  setLoading(false);
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="mb-1 text-2xl font-bold text-center text-primary">
                    Sign In
                  </div>
                  <hr />
                  <div className="my-4">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-lg text-primary"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-3 py-2 border rounded-lg text-primary"
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-500">{errors.email}</div>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-lg text-primary"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-3 py-2 border rounded-lg text-primary"
                    />
                    {errors.password && touched.password && (
                      <div className="text-red-500">{errors.password}</div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full px-3 py-3 mt-4 text-white rounded-lg bg-primary"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>

                  <p className="mt-2 text-center text-gray-500">OR</p>
                 {!loading && <div className="text-center">
                    <Link to="/" className="text-center text-primary">
                      Back to home
                    </Link>
                  </div>}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
