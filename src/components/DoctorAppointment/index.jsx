import styles from './DoctorAppointment.module.scss';

const DoctorAppointment = () => {
  return (
    <div className={styles.doctorAppointmentSection}>
      <div className={styles.doctor}>
        <img src="https://static.pocketpills.com/webapp/rebrand/landing/icon-rx.webp" alt="Doctor's Appointment" />
        <h2>{`Doctor's appointment coming up?`}</h2>
        <p>Ask your clinic to fax your new prescriptions to Pocketpills!</p>
        <p className={styles.faxNumber}>Fax: 1-855-950-7226</p>
      </div>
    </div>
  );
};

export default DoctorAppointment;
