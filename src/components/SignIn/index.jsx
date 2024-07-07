import Header from './sections/Header';
import SignInSection from './sections/SignIn';
import PhoneNumberInput from './sections/PhoneNumberInput';
import EnhancedNavbar from '../../molecules/EnhancedNavbar';
import RatingSection from './sections/Rating';
import styles from './SignIn.module.scss';

const SignIn = () => {
  return (
    <div className={styles.SignInContainer}>
      <EnhancedNavbar />
      <Header />
      <SignInSection />
      <PhoneNumberInput />
      <RatingSection />
    </div>
  );
}
 
export default SignIn;