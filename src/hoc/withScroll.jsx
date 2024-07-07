/* eslint-disable react/display-name */
import { useState, useEffect } from 'react';

const withScroll = (WrappedComponent) => {
  return (props) => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return <WrappedComponent {...props} scrolled={scrolled} />;
  };
};

export default withScroll;
