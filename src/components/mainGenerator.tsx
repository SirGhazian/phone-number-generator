import { useState, useEffect } from "react";
import HeaderLogo from "./headerLogo";
import { countryCode } from "../data/countryCode";

export default function MainGenerator() {
  let [isCopied, setIsCopied] = useState(false);
  let [totalNum, setTotalNum] = useState("1");
  let [countrySelect, setCountrySelect] = useState("ID");
  let [numberList, setNumberList] = useState<string[]>([]);

  let [content, setContent] = useState("");
  let [withOption, setWithOption] = useState({
    withPlus: true,
    withPrefix: true,
    withComma: false,
  });

  function changeCountry(country: keyof typeof countryCode) {
    if (country in countryCode) {
      setCountrySelect(country);
    }
  }

  function generateNumber() {
    // Change copy button to default
    setIsCopied(false);

    if (countrySelect in countryCode) {
      let tmpNumberList = [];

      // Prevent overload each click
      setNumberList([""]);

      // Get country suffix/country code (ex: 1)
      let tmpSuffix = countryCode[countrySelect as keyof typeof countryCode].suffix;

      // Get country prefix/region/operator code (ex: 213)
      let tmpPrefix = countryCode[countrySelect as keyof typeof countryCode].prefix;

      // Get country total length number (ex: 10 in total with prefix and suffix)
      let tmpLength = countryCode[countrySelect as keyof typeof countryCode].length;

      // Total of last digit without prefix and suffix
      // This variable will be use in random for loop
      let lastDigits = tmpLength - tmpPrefix.length - tmpSuffix[0].length;

      for (let j = 0; j < Number(totalNum); j++) {
        // Generate new phone number
        // With base of prefix/country code
        let newNumber = "";
        // Variable for random index suffix/region code
        let suffixIndex = Math.floor(Math.random() * tmpSuffix.length);

        // Combine prefix and random suffix (ex: 1 812)
        newNumber += tmpSuffix[suffixIndex];

        // Generate random in total of remaining last digits
        for (let i = 0; i < lastDigits; i++) {
          let addNumber = Math.floor(Math.random() * 10);

          // Add each number to tmpNumber
          newNumber += addNumber;
        }

        tmpNumberList.push(newNumber);
        console.log(tmpNumberList);
      }

      setNumberList(tmpNumberList);
    }
  }

  useEffect(() => {
    contentFill();
    setIsCopied(false);
  }, [numberList, withOption]);

  function contentFill() {
    const formatNumber = (num: string) => {
      let formattedNumber = num;

      if (withOption.withPrefix) {
        const prefix = countryCode[countrySelect as keyof typeof countryCode].prefix;
        formattedNumber = prefix + formattedNumber;
      }

      if (withOption.withPlus) {
        formattedNumber = `+${formattedNumber}`;
      }

      return formattedNumber;
    };

    const separator = withOption.withComma ? ", " : "\n";
    const formattedList = numberList.map(formatNumber);

    setContent(formattedList.join(separator));
  }

  function copyText() {
    // Copy text
    navigator.clipboard.writeText(content);

    // Change Copy Button Color
    setIsCopied(true);
  }

  return (
    <>
      <div className="sm:w-full md:w-[40rem]">
        <div className="py-9 sm:px-5 md:px-24 mx-4 rounded-xl flex flex-col items-center justify-center bg-base-200 border-b-2 border-secondary">
          <div className="w-10 h-auto m-2">
            <HeaderLogo />
          </div>

          <p className="mb-6 font-semibold text-secondary">Phone Number Generator</p>

          {/* ----- SECTION TEXT AREA ----- */}
          <div className="flex sm:flex-col md:flex-row justify-between w-full h-auto mb-12">
            <textarea
              className="textarea textarea-secondary sm:h-24 md:h-40 w-full mr-3"
              placeholder="Phone Number List Goes Here"
              value={content}
              readOnly
            ></textarea>

            {/* --- BUTTON COPY --- */}
            <button
              // If no password, disable copy
              onClick={() => copyText()}
              className={`btn sm:mt-2 md:mt-0 btn-secondary ${isCopied ? "btn-outline" : ""}`}
            >
              <i className="fa-solid fa-copy" />
              <div className="mr-1 md:hidden">Copy</div>
            </button>
            {/* --- BUTTON COPY --- */}
          </div>
          {/* ----- SECTION TEXT AREA ----- */}

          {/* ---- SECTION SELECT ---- */}
          <div className="flex flex-row justify-between mb-4">
            <select
              className="select select-secondary w-2/4 max-w-xs emoji-font"
              value={countrySelect}
              onChange={(e) => changeCountry(e.target.value as keyof typeof countryCode)}
            >
              <option value="ID">🇮🇩 ID / +62</option>
              <option value="US">🇺🇸 US / +1</option>
              <option value="GB">🇬🇧 UK / +44</option>
              <option value="CN">🇨🇳 CN / +86</option>
              <option value="IN">🇮🇳 IN / +91</option>
              <option value="MY">🇲🇾 MY / +60</option>
              <option value="BR">🇧🇷 BR / +55</option>
              <option value="DE">🇩🇪 DE / +49</option>
              <option value="FR">🇫🇷 FR / +33</option>
              <option value="JP">🇯🇵 JP / +81</option>
              <option value="SG">🇸🇬 SG / +65</option>
              <option value="PH">🇵🇭 PH / +63</option>
            </select>

            <div className="flex flex-row items-center w-2/4">
              <p className="mx-5">Total:</p>

              <input
                type="text"
                placeholder="Total"
                value={totalNum}
                onChange={(e) => {
                  const newValue = e.target.value;

                  // Prevent non-numeric and limit to 4 digits
                  if (/^\d*$/.test(newValue) && newValue.length <= 4) {
                    setTotalNum(newValue);
                  }
                }}
                className="input input-bordered input-secondary w-full max-w-xs"
              />
            </div>
          </div>
          {/* ---- SECTION SELECT ---- */}

          {/* ---- SECTION TOGGLE ---- */}
          <div className="w-full mb-4">
            <label className="label cursor-pointer">
              <span className="label-text mr-4">{`Plus Symbol (+)`}</span>
              <input
                type="checkbox"
                className="toggle toggle-secondary"
                checked={withOption.withPlus}
                onChange={() =>
                  setWithOption({
                    ...withOption,
                    withPlus: !withOption.withPlus,
                  })
                }
              />
            </label>

            <label className="label cursor-pointer">
              <span className="label-text mr-4">Country Prefix Code</span>
              <input
                type="checkbox"
                className="toggle toggle-secondary"
                checked={withOption.withPrefix}
                onChange={() =>
                  setWithOption({
                    ...withOption,
                    withPrefix: !withOption.withPrefix,
                  })
                }
              />
            </label>

            <label className="label cursor-pointer w-full">
              <span className="label-text mr-4">Separate by Comma</span>
              <input
                type="checkbox"
                className="toggle toggle-secondary"
                checked={withOption.withComma}
                onChange={() =>
                  setWithOption({
                    ...withOption,
                    withComma: !withOption.withComma,
                  })
                }
              />
            </label>
          </div>
          {/* ---- SECTION TOGGLE ---- */}

          {/* ------ BUTTON GENERATE ------ */}
          <button onClick={() => generateNumber()} disabled={totalNum == "0" || totalNum == "" ? true : false} className="btn btn-secondary w-full">
            <i className="fa-solid fa-arrows-rotate translate-y-[1.5px] mr-1" />
            <span>Generate</span>
          </button>
        </div>
      </div>
    </>
  );
}
