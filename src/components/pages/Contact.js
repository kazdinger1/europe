import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import classes from "./Contact.module.css";

function Contact() {
  return (
    <>
      <Navbar />
      <section className={classes.contactContainer}>
        <div className={classes.contact}>
          <div className={classes.contactMiddle}>
            <form className={classes.contactForm}>
              <h1>Send us a message!</h1> <br />
              <label for="fullName">Full Name</label> <br></br>
              <input
                type="text"
                placeholder="What's your full name?"
                id="fullName"
                name="fullName"
                required
              ></input>{" "}
              <br />
              <label for="email">E-mail</label> <br></br>
              <input
                type="text"
                placeholder="you@example.com"
                id="email"
                name="email"
                required
              ></input>{" "}
              <br />
              <label for="message">Message</label> <br></br>
              <textarea
                rows="7"
                cols="50"
                placeholder="Write your message for the team here"
                id="message"
                name="message"
                required
              ></textarea>
              <br />
              <button>Contact us</button>
            </form>
          </div>
          <div className={classes.contactRight}></div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
