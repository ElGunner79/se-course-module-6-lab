import React, { useState } from 'react';

const AddCatForm = ({ addCat }) => {
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && latinName && image) {
            const newCat = {
                name,
                latinName,
                image,
            };
            addCat(newCat);
            setName('');
            setLatinName('');
            setImage('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
                <label style={{ marginBottom: '0.5rem' }}>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ display: 'block', width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                </label>
            </div>
            <div style={{ marginBottom: '1rem' }}>
                <label style={{ marginBottom: '0.5rem' }}>
                    Latin Name:
                    <input type="text" value={latinName} onChange={(e) => setLatinName(e.target.value)} style={{ display: 'block', width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                </label>
            </div>
            <div style={{ marginBottom: '1rem' }}>
                <label style={{ marginBottom: '0.5rem' }}>
                    Image URL:
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} style={{ display: 'block', width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                </label>
            </div>
            <div>
                <button type="submit">Add Cat</button>
            </div>
        </form>
    );
};

export default AddCatForm;