import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Listings from './Listings';
import Blog from './Blog';

// Real image URLs from Unsplash
const piusMwangi = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';
const piouwareOffice = 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80';
const techTeam = 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80';
const realEstateAgents = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
const customerSupport = 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-content">
            <Link to="/" className="nav-logo">EliteEstates</Link>
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              <li><Link to="/careers" className="nav-link">Careers</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
              <li><Link to="/blog" className="nav-link">Blog</Link></li>
            </ul>
            <span className="piouware-brand">Piouware</span>
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                {!selectedProperty ? (
                  <>
                    <header className="hero-section">
                      <div className="hero-content">
                        <h1 className="hero-title">Discover Exceptional Homes</h1>
                        <p className="hero-subtitle">Curated luxury properties worldwide</p>
                        <a href="#listings" className="cta-button">View Collections</a>
                      </div>
                    </header>

                    <Listings onSelectProperty={setSelectedProperty} />
                  </>
                ) : (
                  <PropertyDetail property={selectedProperty} onBack={() => setSelectedProperty(null)} />
                )}
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <div className="footer-content">
            <div className="footer-left">
              <p>© {new Date().getFullYear()} EliteEstates | All rights reserved</p>
              <p>Powered by Piouware Technologies</p>
              <div className="social-links">
                <a href="https://facebook.com/piouware" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com/piouware" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://linkedin.com/company/piouware" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
            <div className="footer-right">
              <span className="piouware-footer">Piouware</span>
              <p>Innovating real estate technology since 2018</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function PropertyDetail({ property, onBack }) {
  return (
    <div className="property-detail-container">
      <button onClick={onBack} className="back-button">
        ← Back to Listings
      </button>

      <div className="property-gallery">
        <div className="gallery-scroll">
          {property.images.map((img, index) => (
            <div key={index} className="gallery-slide">
              <img src={img} alt={`${property.title} - View ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="property-info-container">
        <div className="property-header">
          <h1>{property.title}</h1>
          <div className="price-tag">${property.price.toLocaleString()}</div>
        </div>

        <div className="property-meta">
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.sqft.toLocaleString()} sqft</span>
          <span>Built in {property.yearBuilt}</span>
        </div>

        <p className="property-location">{property.location}</p>

        <div className="property-description">
          <h3>Property Details</h3>
          <p>{property.description}</p>
        </div>

        <div className="property-features">
          <h3>Premium Features</h3>
          <div className="features-grid">
            {property.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-icon">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="contact-agent-button">Contact Listing Agent</button>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="page-container">
      <h2>About EliteEstates</h2>
      <p className="intro-text">EliteEstates is a premier luxury real estate platform revolutionizing property discovery through cutting-edge technology and personalized service.</p>
      
      <div className="about-section">
        <div className="about-content">
          <h3>Our Story</h3>
          <p>Founded in 2018, EliteEstates began as a vision to transform the luxury real estate market. What started as a small boutique agency has grown into a global platform serving high-net-worth clients across five continents.</p>
          <p>Our unique approach combines traditional real estate expertise with innovative technology solutions developed by our sister company, Piouware Technologies.</p>
        </div>
        <div className="about-image">
          <img src={piouwareOffice} alt="Piouware office headquarters" />
        </div>
      </div>

      <div className="team-section">
        <h3>Leadership Team</h3>
        <div className="team-member">
          <div className="member-image">
            <img src={piusMwangi} alt="Pius Mwangi" />
          </div>
          <div className="member-info">
            <h4>Pius Mwangi</h4>
            <p className="position">Founder & CEO</p>
            <p className="bio">With over 15 years in real estate technology, Pius founded EliteEstates to bridge the gap between luxury properties and discerning buyers. His vision for seamless property discovery has positioned EliteEstates as an industry leader.</p>
            <p className="bio">Prior to EliteEstates, Pius led technology initiatives at several Fortune 500 companies, specializing in AI-driven customer experiences.</p>
            <div className="social-links">
              <a href="https://linkedin.com/in/piusmwangi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/piusmwangi" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
      </div>

      <div className="piouware-section">
        <h3>About Piouware Technologies</h3>
        <p>Piouware is the technology engine powering EliteEstates, providing:</p>
        <ul className="piouware-features">
          <li>AI-powered property matching algorithms</li>
          <li>Virtual and augmented reality property tours</li>
          <li>Blockchain-based transaction security</li>
          <li>Predictive market analytics</li>
        </ul>
        <p>Founded in 2016, Piouware has been recognized with multiple industry awards for innovation in proptech.</p>
      </div>
    </div>
  );
}

function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Real Estate Agent",
      location: "Nairobi, Kenya",
      type: "Full-time",
      department: "Sales",
      description: "Lead our luxury property sales team, working with high-net-worth clients to find their dream homes.",
      responsibilities: [
        "Manage portfolio of luxury properties",
        "Develop relationships with premium clients",
        "Conduct market analysis and pricing strategies",
        "Negotiate complex real estate transactions"
      ],
      requirements: [
        "5+ years luxury real estate experience",
        "Proven sales track record",
        "Exceptional communication skills",
        "Bachelor's degree preferred"
      ],
      benefits: [
        "Competitive commission structure",
        "Health and wellness package",
        "Company vehicle allowance",
        "Continuing education opportunities"
      ]
    },
    {
      id: 2,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      department: "Technology",
      description: "Build beautiful, responsive interfaces for our real estate platform using modern web technologies.",
      responsibilities: [
        "Develop new user-facing features",
        "Optimize applications for maximum performance",
        "Collaborate with design team",
        "Implement responsive design principles"
      ],
      requirements: [
        "3+ years React experience",
        "Proficient in CSS/SCSS",
        "Experience with RESTful APIs",
        "Familiarity with real estate tech a plus"
      ],
      benefits: [
        "Flexible work arrangements",
        "Competitive salary + equity",
        "Annual tech conference budget",
        "Latest hardware setup"
      ]
    },
    {
      id: 3,
      title: "Customer Experience Manager",
      location: "Nairobi, Kenya",
      type: "Full-time",
      department: "Operations",
      description: "Ensure exceptional service for our clients throughout their property journey.",
      responsibilities: [
        "Develop customer service protocols",
        "Train and mentor support staff",
        "Analyze customer feedback",
        "Implement service improvements"
      ],
      requirements: [
        "5+ years in luxury customer service",
        "Real estate experience preferred",
        "Strong leadership skills",
        "Data-driven decision making"
      ],
      benefits: [
        "Performance bonuses",
        "Generous vacation policy",
        "Professional development budget",
        "Health and dental coverage"
      ]
    }
  ];

  return (
    <div className="page-container">
      <div className="careers-hero">
        <h2>Build Your Career With Us</h2>
        <p className="hero-subtext">Join a team that's transforming luxury real estate through innovation and exceptional service.</p>
      </div>

      <div className="why-join">
        <h3>Why Join EliteEstates?</h3>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h4>Growth Opportunities</h4>
            <p>We invest in our team's development with training programs and clear career paths.</p>
          </div>
          <div className="benefit-card">
            <h4>Innovative Culture</h4>
            <p>Work with cutting-edge technology that's reshaping the real estate industry.</p>
          </div>
          <div className="benefit-card">
            <h4>Competitive Compensation</h4>
            <p>Attractive salaries, bonuses, and benefits packages for all positions.</p>
          </div>
          <div className="benefit-card">
            <h4>Global Network</h4>
            <p>Connect with professionals across our international offices and partnerships.</p>
          </div>
        </div>
      </div>

      <div className="job-openings">
        <h3>Current Opportunities</h3>
        <div className="job-filters">
          <button className="filter-button active">All Positions</button>
          <button className="filter-button">Technology</button>
          <button className="filter-button">Sales</button>
          <button className="filter-button">Operations</button>
        </div>

        <div className="job-listings">
          {jobOpenings.map(job => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <h4>{job.title}</h4>
                <div className="job-meta">
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                  <span>{job.department}</span>
                </div>
              </div>
              <p className="job-description">{job.description}</p>
              
              <div className="job-details">
                <div className="detail-section">
                  <h5>Responsibilities</h5>
                  <ul>
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="detail-section">
                  <h5>Requirements</h5>
                  <ul>
                    {job.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="detail-section">
                  <h5>Benefits</h5>
                  <ul>
                    {job.benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button className="apply-button">Apply Now</button>
            </div>
          ))}
        </div>
      </div>

      <div className="hiring-process">
        <h3>Our Hiring Process</h3>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h5>Application Review</h5>
            <p>We carefully review all applications within 5 business days.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h5>Screening Call</h5>
            <p>A 30-minute phone interview with our HR team.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h5>Skills Assessment</h5>
            <p>Role-specific evaluation of your capabilities.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h5>Final Interview</h5>
            <p>Meet with department leadership and potential colleagues.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="page-container">
      <div className="contact-hero">
        <h2>Get In Touch</h2>
        <p>Our team is ready to assist with all your real estate needs.</p>
      </div>

      <div className="contact-sections">
        <div className="contact-info">
          <h3>Contact Information</h3>
          
          <div className="info-card">
            <h4>General Inquiries</h4>
            <p>Email: info@eliteestates.com</p>
            <p>Phone: +254 700 123 456</p>
          </div>
          
          <div className="info-card">
            <h4>Sales Team</h4>
            <p>Email: sales@eliteestates.com</p>
            <p>Phone: +254 700 654 321</p>
          </div>
          
          <div className="info-card">
            <h4>Customer Support</h4>
            <p>Email: support@eliteestates.com</p>
            <p>Phone: +254 700 987 654</p>
          </div>
          
          <div className="office-hours">
            <h4>Office Hours</h4>
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 3:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h3>Send Us a Message</h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject">
                <option value="">Select a subject</option>
                <option value="property-inquiry">Property Inquiry</option>
                <option value="careers">Careers</option>
                <option value="partnerships">Partnerships</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
            
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>

      <div className="global-offices">
        <h3>Our Global Offices</h3>
        <div className="office-cards">
          <div className="office-card">
            <h4>Nairobi Headquarters</h4>
            <p>Piouware Towers, 12th Floor</p>
            <p>Westlands Road</p>
            <p>Nairobi, Kenya</p>
          </div>
          
          <div className="office-card">
            <h4>Dubai Office</h4>
            <p>Burj District, Office 2104</p>
            <p>Sheikh Zayed Road</p>
            <p>Dubai, UAE</p>
          </div>
          
          <div className="office-card">
            <h4>New York Office</h4>
            <p>Manhattan Plaza, Suite 500</p>
            <p>5th Avenue</p>
            <p>New York, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;