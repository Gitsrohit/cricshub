import React from "react";
import logo from "../cricshub.png";
import playStoreLogo from "../playstore.png";
import appStoreLogo from "../appstore.png";

function Home() {
  return (
    <div className="home">
      <img src={logo} alt="Cricshub Logo" className="logo" />
      <h1>Available soon on</h1>
      <div className="buttons">
        <button className="playstore">
          <img src={playStoreLogo} alt="Play Store" className="store-logo" />
          <span className="text">Playstore</span>
          
        </button>
        <button className="appstore">
          <img src={appStoreLogo} alt="App Store" className="store-logo" />
          <span className="text">App store</span>
        </button>
      </div>
      <section className="about">
        <h2>About Us</h2>
        <p>Welcome to CricsHub, your ultimate cricket companion! Whether you're a passionate player, a tournament organizer, or a fantasy cricket enthusiast, CricsHub brings everything you need in one place.</p>
        <p>With CricsHub, you can score live matches, create and manage tournaments, track player stats, and enjoy fantasy cricket leagues just like the pros. Our user-friendly platform ensures a seamless experience, making cricket more exciting and engaging for everyone.</p>
        <p>Join CricsHub today and take your cricketing journey to the next level!</p>
      </section>
      <section className="terms">
        <h2>Terms & Conditions</h2>
        <p>Welcome to CricsHub! By using our app, you agree to the following Terms & Conditions. Please read them carefully.</p>
        <ol>
          <li>Acceptance of Terms
            <ul>
              <li>By accessing or using CricsHub, you agree to follow these terms. If you do not agree, please do not use the app.</li>
            </ul>
          </li>
          <li>User Accounts
            <ul>
              <li>You must provide accurate information when creating an account.</li>
              <li>You are responsible for maintaining the security of your account.</li>
              <li>We may suspend or terminate accounts for violations of our policies.</li>
            </ul>
          </li>
          <li>Use of Services
            <ul>
              <li>CricsHub allows users to score matches, manage tournaments, track player stats, and play fantasy cricket.</li>
              <li>Users must not misuse or manipulate the platform, including cheating in fantasy leagues.</li>
            </ul>
          </li>
          <li>Fair Play & Conduct
            <ul>
              <li>Abusive, offensive, or harmful content is not allowed.</li>
              <li>Any fraudulent activity will result in account suspension.</li>
            </ul>
          </li>
          <li>Payments & Transactions
            <ul>
              <li>If the app includes paid features, users must follow the payment guidelines.</li>
              <li>No refunds will be issued for completed transactions unless required by law.</li>
            </ul>
          </li>
          <li>Privacy & Data Usage
            <ul>
              <li>We collect and store necessary user data as per our Privacy Policy.</li>
              <li>We do not sell or share user data with third parties for marketing purposes.</li>
            </ul>
          </li>
          <li>Liability & Disclaimer
            <ul>
              <li>CricsHub is not responsible for technical failures, data loss, or third-party service issues.</li>
              <li>We do not guarantee winnings in fantasy leagues; outcomes are based on player performances.</li>
            </ul>
          </li>
          <li>Changes to Terms
            <ul>
              <li>We may update these Terms & Conditions at any time. Continued use of CricsHub means you accept the latest terms.</li>
              <li>For any queries, contact us at support@cricshub.com.</li>
            </ul>
          </li>
        </ol>
        <p>By using CricsHub, you agree to these terms and enjoy your cricketing experience with us! 🚀</p>
      </section>
    </div>
  );
}

export default Home;
