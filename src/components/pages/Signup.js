import { Link, useNavigate } from "react-router-dom";
import classes from "./Signup.module.css";
import { BsChevronDoubleLeft } from "react-icons/bs";

function Signup() {
  const navigate = useNavigate();
  return (
    <section className={classes.signupContainer}>
      <Link onClick={() => navigate(-1)} className={classes.arrowPrevious}>
        <BsChevronDoubleLeft />
      </Link>
      <div className={classes.contact}>
        <div className={classes.contactLeft}>
          <form className={classes.contactForm}>
            <h1>Register your account</h1> <br />
            <label for="username">Username</label> <br></br>
            <input
              type="text"
              placeholder="Enter your username.."
              id="username"
              name="username"
              required
            ></input>{" "}
            <br />
            <label for="email">E-mail</label> <br></br>
            <input
              type="email"
              placeholder="Enter your E-mail.."
              id="email"
              name="email"
              required
            ></input>{" "}
            <br />
            <label for="password">Password</label> <br></br>
            <input
              type="password"
              placeholder="Enter your password.."
              id="password"
              name="password"
              required
            ></input>{" "}
            <br />
            <button to="/">Sign Up</button>
            <br />
            <br />
            <p>
              Have an account already?{" "}
              <Link
                to="/login"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0 });
                }}
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
        <div className={classes.contactRight}>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.46657023695!2d20.896387437668963!3d52.23303347754041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2srs!4v1673309410246!5m2!1sen!2srs"></iframe> */}
        </div>
      </div>
    </section>
  );
}

export default Signup;
