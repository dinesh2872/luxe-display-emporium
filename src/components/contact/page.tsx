const ContactPage = () => (
  <div className="max-w-2xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6 text-luxury-black">Contact Us</h1>
    <p className="text-lg text-gray-700 mb-8">
      Have a question or need a custom solution? Fill out the form below and our team will get back to you promptly.
    </p>
    <form className="space-y-6">
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input type="text" className="w-full border rounded px-3 py-2" required />
      </div>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input type="email" className="w-full border rounded px-3 py-2" required />
      </div>
      <div>
        <label className="block mb-1 font-medium">Message</label>
        <textarea className="w-full border rounded px-3 py-2" rows={5} required />
      </div>
      <button
        type="submit"
        className="bg-luxury-gold text-white px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
      >
        Send Message
      </button>
    </form>
    <div className="mt-10 text-gray-600">
      <div>Email: <a href="mailto:info@hilalluxe.com" className="text-luxury-gold">info@hilalluxe.com</a></div>
      <div>Phone: <a href="tel:+1234567890" className="text-luxury-gold">+1 234 567 890</a></div>
      <div>Address: 123 Luxe Avenue, Dubai, UAE</div>
    </div>
  </div>
);

export default ContactPage;