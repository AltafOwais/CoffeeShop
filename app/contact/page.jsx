export default function Contact() {

  return (

    <div className="contactPage">


      <h1>
        Contact Shahi Cafe
      </h1>


      <p>
        Have any questions? We would love to hear from you.
      </p>


      <div className="contactBox">


        <div className="contactInfo">

          <h2>Our Cafe</h2>

          <p>📍 MG Road, Pune</p>

          <p>📞 +91 9876543210</p>

          <p>✉️ shahicafe@gmail.com</p>

          <p>⏰ 9:00 AM - 11:00 PM</p>

        </div>



        <div className="contactForm">

          <input 
            type="text" 
            placeholder="Your Name" 
          />


          <input 
            type="email" 
            placeholder="Your Email" 
          />


          <textarea 
            placeholder="Your Message"
          ></textarea>


          <button>
            Send Message
          </button>


        </div>


      </div>


    </div>

  )

}