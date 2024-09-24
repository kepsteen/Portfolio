import emailjs from "@emailjs/browser";
import { useState } from "react";

const TEMPLATE_ID = "template_wxjnwuc";

const ContactMe = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !email || !message) return;

		const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
		const templateId = "template_gxyynmw";
		const publicKey = import.meta.env.PUBLIC_EMAILJS_KEY;

		const templateParams = {
			from_name: name,
			user_email: email,
			message: message,
		};

		emailjs
			.send(serviceId, TEMPLATE_ID, templateParams, publicKey)
			.then((response) => {
				console.log("email sent successfully", response);
				setName("");
				setEmail("");
				setMessage("");
			})
			.catch((error) => {
				console.log("error sending email", error);
			});
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
			<div className="flex gap-2 w-1/2">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					placeholder="Your Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="grow"
				/>
			</div>
			<div className="flex gap-2 w-1/2">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					placeholder="Your Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="grow"
				/>
			</div>
			<div className="flex gap-2 w-1/2">
				<label htmlFor="message">Message</label>
				<textarea
					placeholder="Your Message"
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="grow"
				></textarea>
			</div>
			<button
				type="submit"
				className="bg-blue py-2 px-3 text-white rounded-md cursor-pointer hover:bg-green"
			>
				Send Email
			</button>
		</form>
	);
};

export default ContactMe;
