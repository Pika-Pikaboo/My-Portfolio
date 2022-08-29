import "./contact.css";
import { useRef, useDisclosure } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

const AlertMessage = () => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  return isVisible ? (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Form submitted!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Thanks for submitting your message. I will keep in touch with you soon.
      </AlertDescription>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <button onClick={onOpen}>Show Alert</button>
  );
};

function Contact() {
  const form = useRef();

  const sendSubmission = () => {
    const sendEmail = (event) => {
      event.preventDefault();
      emailjs
        .sendForm(
          "service_7dhhtyt",
          "template_k43w182",
          form.current,
          "ZVwxsbMJHLSOHiB68"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      event.target.reset();
    };
    return <AlertMessage />;
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>&lt; Contact Me /&gt;</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>marnhtetzan11@gmail.com</h5>
            <a href="mailto:marnhtetzan11@gmail.com">Send me mail</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>James Harry</h5>
            <a href="mailto:marnhtetzan11@gmail.com">Send me mail</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>LinkedIn</h4>
            <h5>Harry Junior</h5>
            <a href="mailto:marnhtetzan11@gmail.com">Send me mail</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendSubmission}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your comment...."
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
