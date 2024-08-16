import React from 'react'

export default function Education() {
    return (
        <div>

            <section id="education" style={styles.education}>
                <h2>EDUCATION</h2><br/><br/><br/><br/>
                <div style={styles.educationItems}>
                    <div style={styles.educationItem}>
                        <img src="btsc.png" alt="Bahria Town School" style={styles.image} /><br/><br/>
                        <b>Bahria Town School and College (BTSC)</b>
                        <p>Primary Education</p>
                    </div>
                    <div style={styles.educationItem}>
                        <img src="UGI.PNG" alt="College" style={styles.image} /><br/><br/>
                        <b>Unique Group of Institutions (UGI)</b>
                        <p>Secondary Education</p>
                    </div>
                    <div style={styles.educationItem}>
                        <img src="umt.png" alt="Degree" style={styles.image} /><br/><br/>
                        <b>University of Manament and Technology (UMT)</b>
                        <p>BS Software Engineering (Contd.)</p>
                    </div>
                </div>
            </section>

            <br/><br/><br/><br/>


        </div>
    )
}

const styles = {
    education: { padding: '50px 0', textAlign: 'center' },
    educationItems: { display: 'flex', justifyContent: 'space-around' },
    educationItem: { textAlign: 'center' },
    image: { width: '150px', borderRadius: '8px' },
};
