import React from 'react'

export default function Navbar() {
    return (

        <div>
            <nav style={styles.navbar}>
                <div style={styles.left}>
                    <img src="g1.png" alt="Ghosia" style={styles.image} />
                    <div style={styles.branding}>
                        <h1 style={styles.brand}>GHOSIA JAVED</h1>
                        <p style={styles.subtitle}>SOFTWARE ENGINEER</p>
                    </div>
                </div>
                <div style={styles.right}>
                    <ul style={styles.navLinks}>
                        <li><a href="#education" style={styles.link}>EDUCATION</a></li>
                        <li><a href="#skills" style={styles.link}>SKILLS</a></li>
                        {/* <li><a href="#about" style={styles.link}>ABOUT</a></li> */}
                        <li><a href="#contact" style={styles.link}>CONTACT</a></li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}


const styles = {
    navbar: {
        padding: '12px',
        backgroundColor: '#f7efe5', // Beige background
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    left: {
        display: 'flex',
        alignItems: 'center'
    },
    branding: {
        marginLeft: '15px'
    },
    brand: {
        fontSize: '30px',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: '14px',
        marginTop: '5px',
        fontWeight: 'normal',
        color: 'black', // Darker shade for subtitle
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '150px', // Adjust gap for spacing between links
    },
    link: {
        color: 'black', // Matching theme color
        textDecoration: 'none', // Remove underline
        fontSize: '15px',
        fontWeight: 'bold',
    },
    image: {
        width: '100px',
        height: '100px',
    },

}