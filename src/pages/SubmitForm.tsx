import { useState, type ChangeEvent, type FormEvent } from "react";

/* ================= TYPES ================= */

type FormFields = "name" | "email" | "mobile";

interface FormData {
  name: string;
  email: string;
  mobile: string;
}

type Errors = Partial<Record<FormFields, string>>;

/* ================= CONSTANTS ================= */

const initialState: FormData = {
  name: "",
  email: "",
  mobile: ""
};

/* ================= COMPONENT ================= */

const SubmitForm = () => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ================= HANDLERS ================= */

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // remove error while typing
    if (errors[name as FormFields]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  /* ================= VALIDATION ================= */

  const validate = (data: FormData): Errors => {
    const newErrors: Errors = {};

    if (!data.name.trim())
      newErrors.name = "Name is required";

    if (!data.email.trim())
      newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(data.email))
      newErrors.email = "Invalid email format";

    if (!data.mobile.trim())
      newErrors.mobile = "Mobile is required";
    else if (!/^\d{10}$/.test(data.mobile))
      newErrors.mobile = "Must be 10 digits";

    return newErrors;
  };

  /* ================= SUBMIT ================= */

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // simulate API call
    setTimeout(() => {
      setSubmittedData(formData);
      setFormData(initialState);
      setIsSubmitting(false);
      console.log("Submitted JSON →", JSON.stringify(formData, null, 2));
    }, 600);
  };

  /* ================= RENDER ================= */

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 to-purple-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">

        <h2 className="text-2xl font-bold text-center text-gray-800">
          Interview Level Form
        </h2>

        <form onSubmit={submitHandler} className="space-y-4" noValidate>

          {/* INPUT FIELD COMPONENT */}
          {(["name","email","mobile"] as FormFields[]).map(field => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-600 capitalize">
                {field}
              </label>

              <input
                type={field === "email" ? "email" : field === "mobile" ? "tel" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                aria-invalid={!!errors[field]}
                className={`w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 transition
                ${errors[field]
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-indigo-200"
                }`}
              />

              {errors[field] && (
                <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white py-2 rounded-lg font-semibold transition shadow-md"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* RESULT CARD */}
        {submittedData && (
          <div className="bg-linear-to-br from-indigo-500 to-purple-600 text-white p-5 rounded-xl shadow-lg animate-fade-in">
            <h3 className="text-lg font-semibold mb-2">Submitted Data</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Mobile:</strong> {submittedData.mobile}</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default SubmitForm;

// JSX file

// import { useState } from "react";

// /* ================= CONSTANTS ================= */

// const initialState = {
//   name: "",
//   email: "",
//   mobile: ""
// };

// /* ================= COMPONENT ================= */

// const SubmitForm = () => {
//   const [formData, setFormData] = useState(initialState);
//   const [errors, setErrors] = useState({});
//   const [submittedData, setSubmittedData] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   /* ================= HANDLERS ================= */

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // remove error while typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: "" }));
//     }
//   };

//   /* ================= VALIDATION ================= */

//   const validate = (data) => {
//     const newErrors = {};

//     if (!data.name.trim())
//       newErrors.name = "Name is required";

//     if (!data.email.trim())
//       newErrors.email = "Email is required";
//     else if (!/^\S+@\S+\.\S+$/.test(data.email))
//       newErrors.email = "Invalid email format";

//     if (!data.mobile.trim())
//       newErrors.mobile = "Mobile is required";
//     else if (!/^\d{10}$/.test(data.mobile))
//       newErrors.mobile = "Must be 10 digits";

//     return newErrors;
//   };

//   /* ================= SUBMIT ================= */

//   const submitHandler = (e) => {
//     e.preventDefault();

//     const validationErrors = validate(formData);

//     if (Object.keys(validationErrors).length) {
//       setErrors(validationErrors);
//       return;
//     }

//     setIsSubmitting(true);

//     // simulate API call
//     setTimeout(() => {
//       setSubmittedData(formData);
//       setFormData(initialState);
//       setIsSubmitting(false);

//       console.log("Submitted JSON →", JSON.stringify(formData, null, 2));
//     }, 600);
//   };

//   /* ================= RENDER ================= */

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-6">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">

//         <h2 className="text-2xl font-bold text-center text-gray-800">
//           Interview Level Form
//         </h2>

//         <form onSubmit={submitHandler} className="space-y-4" noValidate>

//           {["name", "email", "mobile"].map(field => (
//             <div key={field}>
//               <label className="block text-sm font-medium text-gray-600 capitalize">
//                 {field}
//               </label>

//               <input
//                 type={field === "email" ? "email" : field === "mobile" ? "tel" : "text"}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleChange}
//                 aria-invalid={!!errors[field]}
//                 className={`w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 transition
//                 ${errors[field]
//                   ? "border-red-500 focus:ring-red-200"
//                   : "border-gray-300 focus:ring-indigo-200"
//                 }`}
//               />

//               {errors[field] && (
//                 <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
//               )}
//             </div>
//           ))}

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white py-2 rounded-lg font-semibold transition shadow-md"
//           >
//             {isSubmitting ? "Submitting..." : "Submit"}
//           </button>
//         </form>

//         {submittedData && (
//           <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-5 rounded-xl shadow-lg">
//             <h3 className="text-lg font-semibold mb-2">Submitted Data</h3>
//             <p><strong>Name:</strong> {submittedData.name}</p>
//             <p><strong>Email:</strong> {submittedData.email}</p>
//             <p><strong>Mobile:</strong> {submittedData.mobile}</p>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default SubmitForm;