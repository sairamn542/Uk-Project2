import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../BookPage/book.css';

// Validation schema using Yup
const validationSchema = Yup.object({
  fullname: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  postalCode: Yup.string().required('Postal code is required'),
  enquiryType: Yup.string().required('Enquiry type is required'),
  message: Yup.string().required('Additional information is required')
});

const BookCleaner = () => {
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
      // Optionally show a success message or redirect user
    } catch (error) {
      console.error('Error:', error);
      // Optionally show an error message
    }

    setSubmitting(false);
  };

  return (
    <div className="page-container">
      <div className="domestic-container">
        <div className="text-container">
          <h2 style={{ color: '#005f8d' }}>Book Our Cleaning Services Now!</h2>
          <p>
            Please use the form below to enter details about your property and receive a quote for cleaning services. 
            We will get back to you within one hour Monday to Saturday from 9 am to 6 pm.
          </p>
          <h5>Having trouble with the form? You can also call us on <a href="tel:+447943272519" style={{textDecoration : 'none'}}>07943272519</a> to discuss your cleaning needs.</h5>
          <h5>
          Or, if you prefer, you can
      <a style={{textDecoration : 'none'}}
        href="https://wa.me/+447943272519" 
         
        className="mx-3"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-whatsapp"></i> us at 07943 272 519
      </a>
    </h5>
        </div>
        <div className="form-container">
          <Formik
            initialValues={{ fullname: '', email: '', phone: '', postalCode: '', enquiryType: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, isSubmitting, values }) => (
              <Form className="form">
                <p className="title" style={{ color: '#005f8d' }}>Enter Details</p>
                <div className="grid-container">
                  <label>
                    <Field name="fullname" type="text" placeholder="Full Name" className="form-control" />
                    <ErrorMessage name="fullname" component="div" className="error-message" />
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
                  <label className="email-label">
                    <Field name="email" type="email" placeholder="Email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="error-message" />
                  </label>
                  <label>
                    <Field name="postalCode" type="text" placeholder="Postal Code" className="form-control" />
                    <ErrorMessage name="postalCode" component="div" className="error-message" />
                  </label>
                  <label className="select-label">
                    <Field as="select" name="enquiryType" className="form-control">
                      <option value="">Select Enquiry Type</option>
                      <option value="general">General Enquiry</option>
                      <option value="booking">Booking Enquiry</option>
                      <option value="quote">Request a Quote</option>
                    </Field>
                    <ErrorMessage name="enquiryType" component="div" className="error-message" />
                  </label>
                  <label className="message-label">
                    <Field as="textarea" name="message" placeholder="Additional Information" className="form-control textarea" />
                    <ErrorMessage name="message" component="div" className="error-message" />
                  </label>
                </div>
                <button type="submit" className="submit" disabled={isSubmitting}>Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default BookCleaner;
