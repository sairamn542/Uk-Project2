import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Cleaning from './Components/Cleaning';
import CommonContent from './Components/CommonContent';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Section from './Components/Section';
import CarpetCleaning from './Components/CarpetCleaning/CarpetCleaning';
import DomesticCleaning from './Components/DomesticCleaning.jsx/DomesticCleaning';
import CommercialCleaning from './Components/CommercialCleaning/CommercialCleaning';
import EndOfTenancy from './Components/EndOfTenancyCleaning/EndOfTenancy';
import BookPage from './Components/BookPage/BookPage';
import BookCleaner from './Components/BookCleaner/BookCleaner';
import DomesticWithCommercial from './Components/DomesticWithCommercial';
import './App.css';
import Home from './Components/Home';

function MainApp() {
  const location = useLocation();

  const headingMap = {
    '/carpet-cleaning': 'Why choose us for your carpet cleaning needs?',
    '/domestic-cleaning': 'Why choose us for your domestic cleaning needs?',
    '/commercial-cleaning': 'Why choose us for your commercial cleaning needs?',
    '/end-of-tenancy-cleaning': 'Why choose us for your end of tenancy cleaning needs?',
  };

  const currentHeading = headingMap[location.pathname] || 'Why choose Forefront All Cleaning?';

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Section />
            <Cleaning />
            <CommonContent heading={currentHeading} />
            <DomesticWithCommercial />
          </>
        } />

        <Route path="/carpet-cleaning" element={
          <>
            <CarpetCleaning />
            <CommonContent heading={currentHeading} />
            <Faq />
          </>
        } />
        <Route path="/commercial-cleaning" element={
          <>
            <CommercialCleaning />
            <CommonContent heading={currentHeading} />
            <Faq />
          </>
        } />
        <Route path="/domestic-cleaning" element={
          <>
            <DomesticCleaning />
            <CommonContent heading={currentHeading} />
            <Faq />
          </>
        } />
        <Route path="/end-of-tenancy-cleaning" element={
          <>
            <EndOfTenancy />
            <CommonContent heading={currentHeading} />
            <Faq />
          </>
        } />
        <Route path="/book-page" element={<BookPage />} />
        <Route path="/book-cleaner" element={<BookCleaner />} />
      </Routes>
      
      {location.pathname !== "/" && <Home />}

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

export default App;
