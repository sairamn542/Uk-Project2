import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './book.css';

const validationSchema = Yup.object({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  message: Yup.string().required('Message is required')
});

const BookPage = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('https://example.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }

    setSubmitting(false);
  };

  return (
    <div className="page-container">
      <div className="domestic-container">
        <div className="text-container">
          <h1 style={{ fontSize: '2rem' }}>Contact Us</h1>
          <p>
            If you have any questions, concerns, or queries regarding a custom cleaning job – do not hesitate and contact us via the form.
            <br />
                      </p>
                      <h5>
                      Alternatively, call us on  <a href="tel:+1234567890" style={{ textDecoration: 'none' }}>07943272519</a> to discuss your requirements.
                      </h5>
                      <h5>
          Or, if you prefer, you can WhatsApp Us
      <a style={{textDecoration : 'none'}}
        href="https://wa.me/+447943272519" 
         
        className="mx-3"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-whatsapp" style={{fontSize : '2rem'}}></i>
      </a>
    </h5>
        </div>
        <div className="form-container">
          <Formik
            initialValues={{ firstname: '', lastname: '', email: '', phone: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, isSubmitting, values }) => (
              <Form className="form">
                <p className="title" style={{ color: '#005f8d' }}>Enter Details</p>
                <div className="grid-container">
                  <label>
                    <Field name="firstname" type="text" placeholder="Firstname" className="form-control" />
                    <ErrorMessage name="firstname" component="div" className="error-message" />
                  </label>
                  <label>
                    <Field name="lastname" type="text" placeholder="Lastname" className="form-control" />
                    <ErrorMessage name="lastname" component="div" className="error-message" />
                  </label>
                  <label className="email-label">
                    <Field name="email" type="email" placeholder="Email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="error-message" />
                  </label>
                  <label className="phone-label w-100">
                    <PhoneInput
                      country={'gb'}
                      value={values.phone}
                      onChange={phone => setFieldValue('phone', phone)}
                      inputStyle={{ width: '100%' }}
                      placeholder="Phone number"
                    />
                    <ErrorMessage name="phone" component="div" className="error-message" />
                  </label>
                  <label className="message-label">
                    <Field as="textarea" name="message" placeholder="Comment or message" className="form-control textarea" />
                    <ErrorMessage name="message" component="div" className="error-message" />
                  </label>
                </div>
                <button type="submit" className="submit" disabled={isSubmitting}>Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <iframe
        title="Google Map Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.693486297093!2d-1.9007031841624958!3d52.48609267980867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc98a9fcba01%3A0x11c1ad2f7c9bda98!2sBirmingham!5e0!3m2!1sen!2suk!4v1693894958580!5m2!1sen!2suk"
        className="location-iframe"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default BookPage;
