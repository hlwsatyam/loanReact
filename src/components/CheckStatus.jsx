import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../helpers";
import { toast } from "react-toastify";
import { TEInput, TERipple } from "tw-elements-react";
export const CheckStatus = () => {
  const [showForm, setShowForm] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = (formType) => {
    setShowForm(formType);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const role = showForm;

    try {
      const res = await axios.post(`${backendUrl}/api/login`, {
        email,
        password,
        role,
      });

      if (res.status === 200) {
        if (res.data.role === "admin") {
          localStorage.setItem("adminLogged", "true");
          window.location.href = "/admin-dashboard";
        }
        if (res.data.role === "customer") {
          localStorage.setItem("cutomerLogged", email);
          window.location.href = "/customer-dashboard";
        }
        if (res.data.role === "excutive") {
          localStorage.setItem("excutiveLogged", res.data.id);
          window.location.href = "/excutive-dashboard";
        }
      } else {
        return toast.error(
          res?.data.message || "Something went wrong, Please try again later",
          {
            position: "top-left",
            autoClose: 20000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          },
        );
      }
      setError("");
    } catch (err) {
      return toast.error(
        err.message || "Something went wrong, Please try again later",
        {
          position: "top-left",
          autoClose: 20000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        },
      );
    }
  };

  return (
    <section className="min-h-screen bg-neutral-200 dark:bg-neutral-700">
      <div className="container m-auto h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are Providing Leads
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p className="mb-4">Please login to your account</p>
                      {/* <!--Username input--> */}
                      <input
                        className="w-full rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Mobile Or Email"
                        style={{
                          background:
                            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                        }}
                      />

                      <input
                        className="my-4 w-full rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                        type="password"
                        name="password"
                        style={{
                          background:
                            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                        }}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="*********"
                      />

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]  "
                            type="button"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                            onClick={handleSubmit}
                          >
                            Log in
                          </button>
                      
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      💼 Get Access to High-Quality Loan Leads Today! 💼
                    </h4>
                    <p className="text-sm">
                      Looking to expand your loan business with high-quality
                      leads? We provide verified and targeted loan leads that
                      are guaranteed to help you connect with serious borrowers.
                      Our leads are thoroughly vetted to ensure they meet your
                      criteria, giving you a higher chance of conversions and
                      loan approvals. Whether you're a financial institution or
                      an independent loan provider, partnering with us will help
                      you streamline your process and achieve better results.
                      Don’t miss out on the opportunity to grow your business
                      with reliable loan leads. Contact us today to find out how
                      we can support your success!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
