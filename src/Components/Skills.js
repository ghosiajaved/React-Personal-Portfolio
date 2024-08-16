import React from 'react'

export default function Skills() {

    const skills = [
        {
            image: 'ml.png',
            title: 'Machine Learning',
            description: 'Proficient in developing intelligent systems through algorithms and statistical models.',
        },
        {
            image: 'mern.png',
            title: 'MERN Stack',
            description: 'Skilled in building dynamic web applications using MongoDB, Express.js, React, and Node.js.',
        },
        {
            image: 'network.png',
            title: 'Computer Networking',
            description: 'Expertise in designing and implementing robust network infrastructures.',
        },
    ];

    return (
        <div>

            <section id="skills">
                <br /><br />
                <h2>SKILLS</h2><br /><br /><br />
                <div style={styles.skillsContainer}>
                    {skills.map((skill, index) => (
                        <div key={index} style={styles.skillCard}>
                            <img src={skill.image} alt={skill.title} style={styles.skillImage} />
                            <h3 style={styles.skillTitle}>{skill.title}</h3>
                            <p style={styles.skillDescription}>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <br/><br/><br/><br/><br/>

        </div>
    )
}


const styles = {
    skillsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    skillCard: {
        backgroundColor: '#f7efe5', // Light beige background for the card
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '15px',
        width: '30%',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    skillImage: {
        width: '100%',
        height: '65%',
        borderRadius: '8px',
    },
    skillTitle: {
        marginTop: '10px',
        fontSize: '20px',
        color: '#2F4F4F', // Darker shade of green
    },
    skillDescription: {
        marginTop: '10px',
        fontSize: '14px',
        color: 'black',
    },
};