import ReCAPTCHA from "react-google-recaptcha";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { BsFillSendFill } from "react-icons/bs";

const ContactForm = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const [disabled, setDisabled] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    if (disabled) {
      toast.error("Please complete the ReCAPTCHA validation");
      return;
    }

    const formData = new FormData(form.current);
    const templateParams = {
      from_name: formData.get("user_name"),
      from_email: formData.get("user_email"),
      phone: formData.get("user_phone"),
      message: formData.get("message"),
    };

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        templateParams
      )
      .then((result) => {
        console.log(result.text);
        toast.success("Email sent successfully");
        form.current.reset();
        recaptchaRef.current.reset();
        window.scrollTo({
          top: 0,
        });
      })
      .catch((error) => {
        console.error(error.text);
        toast.error("Failed to send email");
      });
  };

  function onChange(value) {
    console.log("Captcha value:", value);
    setDisabled(!disabled);
  }

  return (
    <section className="md:mt-16 mt-10 my-container">
      <SectionTitle
        subTitle={"---Send Us a Message---"}
        title={"CONTACT FORM"}
      />

      <div className="md:my-16 my-10">
        <div
          className="my-container shadow-xl rounded-lg"
          style={{
            backgroundImage: `url('https://i.postimg.cc/tg8rPHSH/authentication.png')`,
          }}>
          <div className="my-7 mt-0 lg:my-16 items-center">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="form-control">
                  <label className="label justify-start text-base font-medium text-slate-900">
                    <span className="label-text">Name</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your name"
                    className="input hover:shadow-md"
                  />
                </div>
                <div className="form-control">
                  <label className="label justify-start text-base font-medium text-slate-900">
                    <span className="label-text">Email</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Your email"
                    className="input hover:shadow-md"
                  />
                </div>
              </div>
              <div className="form-control mb-3">
                <label className="label justify-start text-base font-medium text-slate-900">
                  <span className="label-text">Phone</span>
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  required
                  placeholder="Phone"
                  className="input hover:shadow-md"
                />
              </div>
              <div className="form-control mb-3">
                <label className="label justify-start text-base font-medium text-slate-900">
                  <span className="label-text">Message</span>
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Your message"
                  className="textarea hover:shadow-md"
                  rows="8"
                />
              </div>
              <div className="mt-7">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lciln4oAAAAAPsdss2OH2dWn-3NKaiY1GC6dIAq"
                  onChange={onChange}
                />
              </div>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="border-none bg-gradient-to-r from-[#835D23] hover:from-[#a57224] hover:to-[#d28209] to-[#c87f12] flex justify-center items-center gap-3 md:p-4 p-2 px-3 md:px-5 text-white bg-[#d1a054b3] hover:bg-[#ec9f2db3]"
                  disabled={disabled}>
                  <span className="md:text-xl font-semibold">Send Message</span>
                  <BsFillSendFill className="md:text-xl" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
