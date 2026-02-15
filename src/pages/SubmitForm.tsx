import { useState, type ChangeEvent, type FormEvent } from "react";

// types
interface FormData {
  name: string;
  email: string;
  mobile: string;
}

interface Errors {
  name?: string;
  email?: string;
  mobile?: string;
}

const SubmitForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: ""
  });

  const [errors, setErrors] = useState<Errors>({});
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  // handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // validation
  const validate = (): Errors => {
    let newErrors: Errors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10 digit number";
    }

    return newErrors;
  };

  // submit handler
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmittedData(formData);

    console.log(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 to-purple-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">

        <h2 className="text-2xl font-bold text-center text-gray-800">
          User Form
        </h2>

        <form onSubmit={submitHandler} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 transition
              ${errors.name ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-indigo-200"}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 transition
              ${errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-indigo-200"}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={`w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 transition
              ${errors.mobile ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-indigo-200"}`}
            />
            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition duration-200 shadow-md"
          >
            Submit
          </button>
        </form>

        {/* Card */}
        {submittedData && (
          <div className="bg-linear-to-br from-indigo-500 to-purple-600 text-white p-5 rounded-xl shadow-lg">
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