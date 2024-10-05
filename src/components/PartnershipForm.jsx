import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logoBlack from "../assets/logo-black.png";

const PartnershipForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    phone: Yup.string().required("رقم الهاتف مطلوب"),
    email: Yup.string()
      .email("يجب أن يكون بريدًا إلكترونيًا صالحًا")
      .required("البريد الإلكتروني مطلوب"),
    linkedin: Yup.string()
      .url("يجب أن يكون رابطًا صالحًا")
      .required("لينكد إن مطلوب"),
  });

  // Form submission handler
  const handleSubmit = (values) => {
    console.log(values);
    // You can handle form submission here (e.g., API request)
  };

  return (
    <div
      className=" max-w-lg mx-auto bg-[#EDF4FF] shadow-lg rounded-lg p-6"
      dir="rtl"
    >
      <img src={logoBlack} alt="" />
      <h2 className="text-2xl text-right text-blue-900 mb-4">كن شريكك</h2>
      <p className="text-right text-gray-600 mb-6">
        من فضلك أدخل جميع البيانات المطلوبة بشكل صحيح للتواصل معك
      </p>

      <Formik
        initialValues={{ name: "", phone: "", email: "", linkedin: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-right mb-1 text-gray-700"
              >
                الاسم رباعي
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="الاسم رباعي"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1 text-right"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-right mb-1 text-gray-700"
              >
                رقم الهاتف
              </label>
              <Field
                type="tel"
                id="phone"
                name="phone"
                placeholder="رقم الهاتف"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm mt-1 text-right"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-right mb-1 text-gray-700"
              >
                البريد الإلكتروني
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="البريد الإلكتروني"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1 text-right"
              />
            </div>

            {/* LinkedIn Field */}
            <div>
              <label
                htmlFor="linkedin"
                className="block text-right mb-1 text-gray-700"
              >
                الملف الشخصي (LINKEDIN)
              </label>
              <Field
                type="url"
                id="linkedin"
                name="linkedin"
                placeholder="رابط لينكد إن"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="linkedin"
                component="div"
                className="text-red-500 text-sm mt-1 text-right"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              إرسال
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PartnershipForm;
