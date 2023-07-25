import React, { useState } from 'react';

const EmailSenderForm = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSendEmail = () => {
    // Implement your email sending logic here
    // For demonstration purposes, you can log the values to the console
    console.log('Recipient:', recipient);
    console.log('Subject:', subject);
    console.log('Body:', body);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleSendEmail}>Send</button>
    </div>
  );
};

export default EmailSenderForm;
