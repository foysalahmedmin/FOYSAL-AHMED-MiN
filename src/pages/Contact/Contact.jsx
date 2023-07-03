import { HiMail } from "react-icons/hi";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9ezwf93', 'template_pdj9an7', form.current, 'SdNHfDP3OrUo2iR59')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className="py-5 px-[2.5%]">
            <div className="flex justify-between items-center text-3xl pb-3 text-primary border-b-2 border-dashed border-base-content">
                <h1 className="uppercase">Contact.</h1>
                <HiMail />
            </div>
            <div className="grid md:grid-cols-2">
                <div>
                    <div className="py-5">
                        <h1 className="uppercase text-3xl mb-1">
                            Projects
                        </h1>
                        <p className="w-40 h-1 bg-base-content rounded-full"><p className="w-1/3 h-full bg-primary rounded-full"></p></p>
                    </div>
                    <div>
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Contact;