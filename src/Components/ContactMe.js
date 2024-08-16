import React, { useState } from 'react'

export default function ContactMe() {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    };

    return (
        <div>


            <section id="contact" style={styles.contact}>
                <h2>Contact Me</h2><br /><br /><br />
                <form style={styles.form}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        style={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        style={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        style={styles.textarea}
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <br />
                    <button type="submit" style={styles.button} onClick={handleClick}>Send</button>
                </form>

            </section>

        </div>
    )
}



const styles = {
    contact: {
        padding: '50px 0',
        textAlign: 'center'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        maxWidth: '400px',
        margin: '0 auto'
    },
    input: {
        padding: '10px',
        width: '100%'
    },
    textarea: {
        padding: '10px',
        width: '100%',
        height: '100px'
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
    },
    socials: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
    },
    socialIcon: {
        width: '40px',
        height: '40px'
    }
};