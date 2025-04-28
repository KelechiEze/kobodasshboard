import {
    FiTruck,
    FiBox,
    FiActivity,
    FiDollarSign,
    FiMap,
    FiGlobe,
    FiCheckCircle,
    FiTrendingUp,
    FiBarChart,
    FiCreditCard,
    FiUsers,
    FiFileText,
  } from 'react-icons/fi';
  import './BenefitsSection.css';
  
  const BenefitsSection = () => {
    return (
      <section className="benefits-section">
        <h2 className="benefits-title">Benefits for our Customers & Transporters</h2>
        <div className="benefits-container">
          {/* Customers Box */}
          <div className="benefit-box customer-box">
            <h3>Customers</h3>
            <ul>
              <li><FiTruck className="icon blue" /> Fast and efficient freight transportation</li>
              <li><FiBox className="icon blue" /> Rail cargo movement</li>
              <li><FiActivity className="icon blue" /> Barge operations</li>
              <li><FiDollarSign className="icon blue" /> Vendor financing</li>
              <li><FiMap className="icon blue" /> Extensive partner network for warehousing, clearing & freight forwarding</li>
              <li><FiGlobe className="icon blue" /> Real-time visibility</li>
            </ul>
          </div>
  
          {/* Transporters Box */}
          <div className="benefit-box transporter-box">
            <h3>Transporters</h3>
            <ul>
              <li><FiCheckCircle className="icon amber" /> Guaranteed trips</li>
              <li><FiTrendingUp className="icon amber" /> Increased earning above the average market rate</li>
              <li><FiBarChart className="icon amber" /> Ability to grow your trucking business</li>
              <li><FiCreditCard className="icon amber" /> Trip financing</li>
              <li><FiUsers className="icon amber" /> Driver and fleet management</li>
              <li><FiFileText className="icon amber" /> Logistics related VAS with discounted rates on diesel and tyre purchases</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default BenefitsSection;
  