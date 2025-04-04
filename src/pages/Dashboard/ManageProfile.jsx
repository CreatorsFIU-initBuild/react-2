import { FaChevronDown } from "react-icons/fa";
import CountrySelect from "react-select-country-list";
import moment from "moment-timezone";

const ManageProfile = () => {
  const countryList = CountrySelect();
  console.log(moment.tz.zone(moment.tz.names()[0]));

  return (
    <div className="flex flex-col min-h-screen !p-4">
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-44 w-44 rounded-full object-contain object-center"
          src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
          alt="Profile picture"
        />
        <h1>Hello, John Doe</h1>
        <h2 className="text-gray-800">Here, you can edit your profile</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 !space-y-5 !mt-10 !ml-10">
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
            >
              <option value="" className="text-gray-500" disabled selected>
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
            >
              <option value="" className="text-gray-500" disabled selected>
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
            >
              <option value="" className="text-gray-500" disabled selected>
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
            >
              <option value="" className="text-gray-500" disabled selected>
                -- Choose Time Zone --
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
      </div>
    </div>
  );
};

export default ManageProfile;
