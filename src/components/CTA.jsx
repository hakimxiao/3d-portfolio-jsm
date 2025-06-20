import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Punya sebuah project untuk dikerjakan ?{" "}
        <br className="sm:block hidden" />
        Mari kerjakan bersama sama
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
