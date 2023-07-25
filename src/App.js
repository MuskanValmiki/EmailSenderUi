import * as React from 'react';
import './App.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [email,setEmail]=useState('')
  const [massage,setMassage]=useState('')
  const [emailData,setEmailData]=useState(null)

  const handleSendEmail = () => {
    const emailDetails = {
      email,
      massage,
    };
    setEmailData(emailDetails);
  };

  return (
    <div className="App">
      <h1 className="page__title">Contact Us</h1>
      <form className="contact__form">
        <label htmlFor="emailFrom">Email:</label>
        <input type="email" name="email_from" id="emailFrom" className="email__from" placeholder="person@example.com" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" className="message__box" onChange={(e) => setMassage(e.target.value)} value={massage}></textarea>
        <Button variant="contained" endIcon={<SendIcon />} className="submit__btn" style={{marginTop: "5px"}} onClick={handleSendEmail}>
        Send
      </Button>
      {emailData && (
        <div>
          <h2>Email Details</h2>
          <p>email: {emailData.email}</p>
          <p>massage: {emailData.massage}</p>
        </div>
      )}
      </form>
    </div>
  );
}

export default App;