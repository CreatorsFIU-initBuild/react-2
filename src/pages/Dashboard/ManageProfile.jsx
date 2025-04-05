import { FaChevronDown } from "react-icons/fa";
import CountrySelect from "react-select-country-list";
import { useTimezoneSelect, allTimezones } from "react-timezone-select";

const ManageProfile = () => {
  const countryList = CountrySelect();
  const { options, parseTimezone } = useTimezoneSelect({
    allTimezones,
    labelStyle: "original",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 !space-y-5 !mt-10 !ml-10"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            name="full_name"
            id="full_name"
            className="w-full !px-5 !py-3 rounded-lg shadow-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
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
              defaultValue="-- Select gender --"
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
              defaultValue="-- Select country of residence --"
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
              defaultValue="-- Choose Time Zone --"
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
      </form>
    </div>
  );
};

export default ManageProfile;
