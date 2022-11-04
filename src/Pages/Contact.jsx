
import "../css/contact.css";

export default function Contact() {
  return (
    <section id="contact">
    <div className="contact-box">
      <div className="contact-links">
        <h2>CONTACT</h2>
        <div className="links">
          <div className="link">
            <a target="_blank" href="https://www.linkedin.com/in/gireesh-bhat-51bba8238/"><img className="cimg" src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin"/></a>
          </div>
          <div className="link">
            <a target="_blank" href="https://github.com/1Gireesh"><img className="cimg" src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"/></a>
          </div>
          <div className="link">
            <a target="_blank" href="https://codepen.io/gireesh-bhat"><img className="cimg" src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen"/></a>
          </div>
          <div className="link">
            <a target="_blank" href="Gireesh: gireeshbhat68@gmail.com"><img className="cimg" src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email"/></a>
          </div>
        </div>
      </div>
      <div className="contact-form-wrapper">
        <form>
          <div className="form-item">
            <input type="text" name="sender" required/>
            <label>Name:</label>
          </div>
          <div className="form-item">
            <input type="text" name="email" required/>
            <label>Email:</label>
          </div>
          <div className="form-item">
            <textarea className="" name="message" required></textarea>
            <label>Message:</label>
          </div>
          <button className="submit-btn">Send</button>  
        </form>
      </div>
    </div>
  </section>
  )
}
