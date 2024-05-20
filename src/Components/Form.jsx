import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
const Contact = ({lang}) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(true);
  const [send, setSend] = useState(false);
  const sendSubmit = (e) => {
    if (
      form.email === "" ||
      form.message === "" ||
      form.name === "" ||
      form.number === ""
    )
      return;

    setSend(true);
    e.preventDefault();

    setLoading(true);

    setVerified(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Rami",
          from_email: form.email,
          to_email: "rami-lash@outlook.com",
          message: form.message,
          from_number: form.number,
        },
        import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setTimeout(function () {
            setSend(false);
          }, 1600);

          setForm({
            name: "",
            email: "",
            message: "",
            number: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error.text);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!verified) return;
  };

  return (
    <form className="mt-7 z-[99]" ref={formRef}>
      <input
        className="w-[90%] md:w-[80%] contact-input "
        placeholder={`${lang ? "Email" : "البريد إلكتروني"}`}
        required
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <div className="flex justify-between w-[100%] md:w-[80%] mt-4">
        <input
          className=" w-[90%] md:w-[45%] contact-input"
          placeholder={`${lang ? "Name" : "الاسم"}`}
          required
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="w-[90%] md:w-[45%] hidden md:inline contact-input "
          placeholder={`${lang ? "Phone" : "الهاتف"}`}
          type="number"
          name="number"
          required
          value={form.number}
          onChange={handleChange}
        />
      </div>
      <input
        className="w-[90%] md:w-[80%]  md:hidden mt-4 contact-input "
        placeholder={`${lang ? "Phone" : "الهاتف"}`}
        type="number"
        name="number"
        required
        value={form.number}
        onChange={handleChange}
      />
      <textarea
        className="mt-4 w-[90%] md:w-[80%] contact-input pb-[80px] h-[150px] overflow-hidden resize-none"
        placeholder={`${lang ? "Your request" : "طلبك"}`}
        name="message"
        required
        type="text"
        value={form.message}
        onChange={handleChange}
      />
      <button
        className={`form-btn ${send ? "active-btn" : ""} max-sm:w-[90%] mt-3`}
        type="submit"
        onClick={sendSubmit}
      >
        <span
          className={`${
            send ? "active-span" : ""
          } text-[1rem] md:text-[1.3rem]`}
        >
          {`${lang ? `Send` : `ارسل`}`}
        </span>
        <svg
          className={send ? "active-svg" : ""}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z" />
        </svg>
      </button>
    </form>
  );
};

export default Contact;
