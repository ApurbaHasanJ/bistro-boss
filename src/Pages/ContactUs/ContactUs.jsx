import { Helmet } from "react-helmet-async";
import ContactBanner from "./Sections/ContactBanner";
import OurLocation from "./Sections/OurLocation";
import ContactForm from "./Sections/ContactForm";


const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us| Bistro Boss</title>
      </Helmet>

      <ContactBanner/>
      <OurLocation/>
      <ContactForm/>

      
    </>
  );
};

export default ContactUs;
