import React, { useState } from 'react';
import './navbar.scss';
import { HashLink as Link } from 'react-router-hash-link'; // If you're using React Router
import { BiUser } from 'react-icons/bi'; // Import the user profile icon from Bootstrap Icons

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    console.log('Requesting account....');

    if (window.ethereum) {
      console.log('MetaMask detected.');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
        console.log('Wallet connected:', accounts);
      } catch (error) {
        console.error('Error connecting wallet:', error.message);
      }
    } else {
      console.log('MetaMask not detected.');
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <span className="navbar-brand">Title</span>
        <div className={`navbar-menu collapse navbar-collapse${toggleMenu ? ' show' : ''}`} id="navbarNav">
          <div className="navbar-nav">
            <Link to="#top" className="nav-link">Latest Articles</Link>
            <Link to="#all" className="nav-link">All Articles</Link>
          </div>
        </div>
        <div className="navbar-right">
          {walletAddress ? (
            <div className=' align-items-center d-flex'>
            <button type="button" className="btn btn-light me-3" >write</button>
            <i class="bi bi-person-circle text-white" style={{ fontSize: '24px' }}> </i>

            </div>
          ) : (
            <button type="button" className="btn btn-outline-danger" onClick={requestAccount}>Connect</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
