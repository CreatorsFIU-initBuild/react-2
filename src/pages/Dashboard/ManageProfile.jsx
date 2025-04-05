import { FaChevronDown } from "react-icons/fa";
import CountrySelect from "react-select-country-list";
import { useTimezoneSelect, allTimezones } from "react-timezone-select";
import { Formik } from "formik";
import * as Yup from "yup";

const ManageProfile = () => {
  const countryList = CountrySelect();
  const { options, parseTimezone } = useTimezoneSelect({
    allTimezones,
    labelStyle: "original",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const validationSchema = Yup.object().shape({
    full_name: Yup.string()
      .min(2, "Full name must be 2-100 characters")
      .max(100, "Full name must be 2-100 characters")
      .required("Full name is required"),
    phone_number: Yup.string().matches(
      /^\(\d{3}\) \d{3}-\d{4}$/,
      "Phone number must be in the format (xxx) xxx-xxxx"
    ),
    gender: Yup.string()
      .notOneOf([""], "Please select a valid option")
      .required("Please select a valid option"),
    country: Yup.string()
      .notOneOf([""], "Please select a valid option")
      .required("Please select a valid option"),
    language: Yup.string()
      .notOneOf([""], "Please select a valid option")
      .required("Please select a valid option"),
    time_zone: Yup.string()
      .notOneOf([""], "Please select a valid option")
      .required("Please select a valid option"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    default_payment: Yup.string()
      .notOneOf([""], "Please select a valid option")
      .required("Please select a valid option"),
  });

  const mockData = {
    fullName: "John Doe",
    phoneNumber: "(123) 456-7890",
    gender: "female",
    country: "US",
    timeZone: "America/Detroit",
    email: "john.doe123@gmail.com",
    paymentMethods: [
      {
        name: "Visa",
        lastFourDigits: "1234",
        expirationDate: "12/25",
      },
      {
        name: "MasterCard",
        lastFourDigits: "5678",
        expirationDate: "11/24",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen !p-4">
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-44 w-44 rounded-full object-contain object-center"
          src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
          alt="Profile picture"
        />
        <p className="text-blue-600 hover:underline text-xs cursor-pointer">
          Change profile picture
        </p>
        <h1>Hello, John Doe</h1>
        <h2 className="text-gray-800">Here, you can edit your profile</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 !space-y-5 !mt-10 !ml-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="full_name">Full Name</label>
            <input
              type="text"
              name="full_name"
              id="full_name"
              className="w-full !px-5 !py-3 rounded-lg shadow-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              defaultValue={mockData.fullName}
              placeholder="Ex: John Doe"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              className="w-full !px-5 !py-3 rounded-lg shadow-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              defaultValue={mockData.phoneNumber}
              placeholder="(xxx) xxx-xxxx"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="relative w-full">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                className="w-full appearance-none !pr-10 !pl-5 !py-3 rounded-lg shadow-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                defaultValue={mockData.gender}
              >
                <option value="" className="text-gray-500">
                  -- Select gender --
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 transform -!translate-y-1/2">
                <FaChevronDown className="text-gray-500" size={20} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="relative w-full">
              <label htmlFor="country">Country</label>
              <select
                name="country"
                id="country"
                className="w-full appearance-none !pr-10 !pl-5 !py-3 rounded-lg shadow-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                defaultValue={mockData.country}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              >
                <option value="" className="text-gray-500">
                  -- Select country of residence --
                </option>
                {countryList.getData().map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 transform -!translate-y-1/2">
                <FaChevronDown className="text-gray-500" size={20} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="relative w-full">
              <label htmlFor="language">Language</label>
              <select
                name="language"
                id="language"
                className="w-full appearance-none !pr-10 !pl-5 !py-3 rounded-lg shadow-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                defaultValue="-- Preferred Language --"
              >
                <option value="" className="text-gray-500">
                  -- Preferred Language --
                </option>
                {countryList.getData().map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 transform -!translate-y-1/2">
                <FaChevronDown className="text-gray-500" size={20} />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative w-full">
              <label htmlFor="time_zone">Time Zone</label>
              <select
                name="time_zone"
                id="time_zone"
                className="w-full appearance-none !pr-10 !pl-5 !py-3 rounded-lg shadow-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                defaultValue={mockData.timeZone}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              >
                <option value="" className="text-gray-500">
                  -- Choose Time Zone --
                </option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 transform -!translate-y-1/2">
                <FaChevronDown className="text-gray-500" size={20} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full !px-5 !py-3 rounded-lg shadow-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              defaultValue={mockData.email}
              placeholder="example@example.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="relative w-full">
              <label htmlFor="default_payment">Default Payment Method</label>
              <select
                name="default_payment"
                id="default_payment"
                className="w-full appearance-none !pr-10 !pl-5 !py-3 rounded-lg shadow-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                defaultValue="-- Choose default payment method --"
              >
                <option value="" className="text-gray-500">
                  -- Choose default payment method --
                </option>
                {mockData.paymentMethods.map((card, i) => (
                  <option key={i} value={card.lastFourDigits}>
                    {card.name} ending in {card.lastFourDigits} (exp.{" "}
                    {card.expirationDate})
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 transform -!translate-y-1/2">
                <FaChevronDown className="text-gray-500" size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full items-center justify-center !mt-5">
          <button
            type="submit"
            className="text-white !bg-[#0d6efd] hover:!bg-[#0b5ed7] !py-3 !px-20 cursor-pointer"
          >
            Submit
          </button>
          <span className="font-bold italic text-xs">
            Changes must be submitted to be saved
          </span>
        </div>
      </form>
    </div>
  );
};

export default ManageProfile;
