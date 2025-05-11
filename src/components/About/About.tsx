import "../../assets/images/image1.jpg";
import "../../assets/images/image2.jpg";
const About = () => {
  return (
    <div className="about p-20 bg-gray-100 rounded-lg shadow-md text-center mt-10 bg-gradient-to-br from-red-500 via-yellow-300 to-orange-500 text-white">
      {/* Secțiunea de descriere */}
      <div className="description mb-12 bg-gradient-to-br from-red-700 via-yellow-500 to-orange-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Cheia problemei tale!</h2>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to ProKeys! We specialize in providing top-notch services for your locksmith needs, 
          including a physical store and a mobile workshop to serve you wherever you are.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src={require("../../assets/images/image1.jpg")}
            alt="Store"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src={require("../../assets/images/image2.jpg")}
            alt="Mobile Workshop"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://via.placeholder.com/300"
            alt="Team"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Secțiunea cu cele două carduri */}
      <div className="cards grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Card pentru magazinul fizic */}
        <div className="card bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Physical Store</h3>
          <p className="text-gray-700">
            Visit our physical store for a wide range of locksmith products and services. 
            Our friendly staff is ready to assist you!
          </p>
        </div>

        {/* Card pentru atelierul mobil */}
        <div className="card bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Mobile Workshop</h3>
          <p className="text-gray-700">
            Our mobile workshop is equipped to handle locksmith services on the go. 
            We come to you, saving you time and hassle!
          </p>
        </div>
      </div>

      {/* Secțiunea cu harta și datele de contact */}
      <div className="contact-info bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
        <p className="text-gray-700 mb-4">
          <strong>Phone:</strong> +123 456 7890<br />
          <strong>Email:</strong> contact@prokeys.com
        </p>
        <div className="map-container w-full h-64 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153167!3d-37.81627997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8b3c5f1c1e!2sProKeys%20Store!5e0!3m2!1sen!2sus!4v1681234567890!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="ProKeys Store Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;

