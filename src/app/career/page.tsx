"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Career = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSubmitStatus({ type: null, message: "" });

    try {
      await emailjs.sendForm(
        "service_brq72gk",
        "template_xsnk10l",
        formRef.current,
        "vUCuYt6JvPJgr-4Mj"
      );

      setSubmitStatus({
        type: "success",
        message: "Your application has been submitted successfully!",
      });
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to submit application. Please try again.",
      });
    }
  };

  return (
    <>
      <Breadcrumb
        pageName="Career Opportunities"
        description="Join our team and grow with us. Apply for our internship program today."
      />

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-dark md:p-10">
              <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
                Internship Application
              </h2>

              {submitStatus.type && (
                <div
                  className={`mb-6 rounded-lg p-4 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 dark:bg-green-900/10 dark:text-green-200"
                      : "bg-red-50 text-red-800 dark:bg-red-900/10 dark:text-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2.5 block text-black dark:text-white">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-2.5 block text-black dark:text-white">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2.5 block text-black dark:text-white">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="user_phone"
                      required
                      placeholder="Enter your phone number"
                      className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-2.5 block text-black dark:text-white">
                      University/College <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="user_university"
                      required
                      placeholder="Enter your university/college name"
                      className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2.5 block text-black dark:text-white">
                    Field of Study <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="user_field"
                    required
                    placeholder="Enter your field of study"
                    className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2.5 block text-black dark:text-white">
                    Expected Graduation Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="user_graduation"
                    required
                    className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2.5 block text-black dark:text-white">
                    Why do you want to intern with us? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="user_message"
                    required
                    placeholder="Tell us why you're interested in interning with us"
                    rows={4}
                    className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <div>
                  <label className="mb-2.5 block text-black dark:text-white">
                    Resume/CV <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    name="user_resume"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary px-8 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-signUp"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career; 