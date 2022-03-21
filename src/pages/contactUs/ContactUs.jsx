import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="contactus-container">
      <h1>Gutters & Covers LLC.</h1>
      <h2>9253 Arbolita way</h2>
      <h2>Jacksonville, Florida, 32256</h2>
      <div className="phone">
        <span class="material-icons" id="call">
          call
        </span>
        <h2>(904) 997-6685</h2>
      </div>

      <div className="email">
        <span class="material-icons">email</span>
        <a class="mailTo" href="mailto:contact@test.com">
          gandcjax@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
