import React from 'react'

export default function HeroPortion() {
    return (
        <div>

            <section id="hero" style={styles.hero}>
                <div style={styles.left}>
                    <h2>Hello! I'm Ghosia</h2>
                    <p>I'm a passionate software engineering student eager to explore the dynamic world of
                        technology. With a strong foundation in MERN stack development and a keen interest in
                        data science, machine learning, and networking, I'm constantly seeking new challenges and
                        opportunities to expand my skillset.

                        Driven by curiosity and a desire to create impactful solutions, I'm dedicated to mastering
                        my craft and finding my niche within the tech industry. This website is a reflection of my
                        journey as I experiment with different technologies and work towards building a fulfilling
                        career.

                        A strong collaborator with a passion for teamwork, I thrive in dynamic environments where
                        diverse perspectives converge. I excel at building rapport with colleagues, fostering open
                        communication, and driving projects towards successful outcomes. My ability to understand
                        and adapt to different working styles allows me to contribute meaningfully to any team.
                    </p>
                </div>
                <div style={styles.right}>
                    <img src="ghosia.png" alt="Ghosia Javed" style={styles.image} />
                </div>
            </section>

        </div>
    )
}


const styles = {
    hero: {
        display: 'flex',
        padding: '50px',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#f7efe5', // Light earthy tone background
        color: 'black' // Darker earthy tone for text
    },
    left: {
        maxWidth: '40%',
        fontSize:'17px'
    },
    right: {
        maxWidth: '70%',
        display: 'flex',
        justifyContent: 'center'
    },
    image: {
        width: '510px',
        height: '550px', // Keep the image square
    },
};
