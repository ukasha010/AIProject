import React from 'react';

const Footer = () => {
 return (
    <footer className="bg-light text-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <h5>Why Iankas</h5>
            <ul className="list-unstyled">
              <li>Platform Overview</li>
              <li>Generate</li>
              <li>Optimize</li>
              <li>Understand</li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h5>Use Cases</h5>
            <ul className="list-unstyled">
              <li>Email</li>
              <li>Push and SMS</li>
              <li>Web and App</li>
              <li>Social Ads</li>
              <li>Optimize Promotional Content</li>
              <li>Drive Purchase Completion</li>
              <li>Improve Customer Loyalty</li>
              <li>Increase Customer Retention</li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>Learning Hub</li>
              <li>Blogs & News</li>
              <li>Orange Papers & Guides</li>
              <li>Events & Webinars</li>
              <li>Ask the Expert</li>
            </ul>
          </div>
        </div>
        {/* Add hr and other content as needed */}
        <div className="row">
          <div className="col-12 col-md-6">
            <h5>Customers</h5>
            <ul className="list-unstyled">
              <li>Customer Stories</li>
              <li>Retail & Ecommerce</li>
              <li>Travel & Hospitality</li>
              <li>Health & Wellness</li>
              <li>Financial Services</li>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <h5>Connect with Us</h5>
            <ul className="list-unstyled d-flex justify-content-start">
              <li className="mx-2">
                <a href="#" className="text-dark">
                 <i className="fas fa-facebook"></i>
                </a>
              </li>
              <li className="mx-2">
                <a href="#" className="text-dark">
                 <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="mx-2">
                <a href="#" className="text-dark">
                 <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="mx-2">
                <a href="#" className="text-dark">
                 <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Add more content as needed */}
      </div>
    </footer>
 );
}

export default Footer;
