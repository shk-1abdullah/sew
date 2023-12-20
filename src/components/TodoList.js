// ContactApp.js
import React, { useState } from 'react';
import './App.css'; // Assuming your CSS file is named ContactApp.css

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);
  const [newContactName, setNewContactName] = useState('');
  const [newContactNumber, setNewContactNumber] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editedContactName, setEditedContactName] = useState('');
  const [editedContactNumber, setEditedContactNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newContactName || !newContactNumber) return;

    const newContacts = [...contacts, { name: newContactName, number: newContactNumber }];
    setContacts(newContacts);
    setNewContactName('');
    setNewContactNumber('');
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedContactName(contacts[index].name);
    setEditedContactNumber(contacts[index].number);
  };

  const handleSave = () => {
    const updatedContacts = [...contacts];
    updatedContacts[editIndex] = {
      name: editedContactName,
      number: editedContactNumber,
    };
    setContacts(updatedContacts);
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    setEditIndex(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Contact Name"
          value={newContactName}
          onChange={(e) => setNewContactName(e.target.value)}
          
          />
          
        
        <input  
        
          type="number"
          placeholder="Contact Number"
          value={newContactNumber}
          onChange={(e) => setNewContactNumber(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {contacts.map((contact, index) => (
        <div className="contact-table" key={index}>
          <div className="serial-number">{index + 1}.</div>
          {editIndex === index ? (
            <div className="contact-details">
              <input
                type="text"
                value={editedContactName}
                onChange={(e) => setEditedContactName(e.target.value)}
               
                />
                
              <input 
                type="text"
                value={editedContactNumber}
                onChange={(e) => setEditedContactNumber(e.target.value)}
              />
              <button onClick={handleSave} className='save'
              >Save</button>
              <button onClick={() => handleDelete(index)} className="delete-button">
                Delete
              </button>
            </div>
          ) : (
            <div className="contact-details" onDoubleClick={() => handleEdit(index)}>
              <span>{contact.name}</span>
              <span>{contact.number}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactApp;