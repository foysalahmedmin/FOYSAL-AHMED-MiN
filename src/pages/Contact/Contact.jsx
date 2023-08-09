import { HiMail } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { BsSendFill } from "react-icons/bs";
import SectionTitle from "../../components/SectionTitle";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9ezwf93', 'template_do2iup9', form.current, 'SdNHfDP3OrUo2iR59')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section className="py-5 px-[2.5%]">
            <div className="flex justify-between items-center text-3xl pb-3 text-primary border-b-2 border-dashed border-base-content">
                <h1 className="uppercase">Contact.</h1>
                <HiMail />
            </div>
            <div className="py-5 min-h-[calc(100vh-11rem)] flex flex-col justify-center">
                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <SectionTitle title={"Mail"} />
                        <div>
                            <form ref={form} onSubmit={sendEmail}>
                                <input className="input input-bordered w-full mb-5" type="text" name="user_name" placeholder="Name" required />
                                <input className="input input-bordered w-full mb-5" type="email" name="user_email" placeholder="Email" required />
                                <textarea className="textarea textarea-bordered textarea-md w-full mb-5" name="message" required />
                                <button className="btn rounded-none flex gap-3" type="submit" value="Send">Send <BsSendFill className="text-primary" /></button>
                            </form>
                        </div>
                    </div>
                    <div className="py-5">
                        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d456.65067832432646!2d90.49487587787515!3d23.704357048302132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1688412843793!5m2!1sen!2sbd" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="py-5 bg-base-300 grid grid-cols-4 gap-5 justify-between">
                    <a href="https://www.linkedin.com/in/foysal-ahmed-min/"><FaLinkedin className="text-3xl mx-auto text-primary" /></a>
                    <a href="https://github.com/foysalahmedmin"><FaGithub className="text-3xl mx-auto text-primary" /></a>
                    <a href="https://web.facebook.com/foysal.gq"><FaFacebookSquare className="text-3xl mx-auto text-primary" /></a>
                    <a href="https://twitter.com/FoysalAhmedMin"><FaTwitterSquare className="text-3xl mx-auto text-primary" /></a>
                </div>
            </div>

        </section>
    );
};

export default Contact;