<div align="center">
<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/c3084aa4-b7df-42bc-b216-39184582a914">
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/f9b146d5-feec-41b5-b495-6d17a601fee1">
  <img alt="Header" height="80" >
</picture>
</div>

<img src="https://github.com/user-attachments/assets/d37a62f7-650a-4886-81c9-d3809d3ddeed" width="100%" height="2px"/>
<p/>

A React-based phone number generator that allows you to create random phone numbers based on selected country codes. You can customize the generated numbers with or without the plus symbol, country prefix, and comma-separated format.

Live Demo: https://generator-phone-number.vercel.app/

<img src="https://github.com/user-attachments/assets/542bcdbd-290f-45f6-8ba5-409b009f3e36" width="550"/>

</br></br>

## 🚀【 Features 】

- **Bulk Generation**: Generate a large number of random phone numbers at once (up to 9999 numbers).
- **Accurate Country and Operator Codes**: Utilize accurate country codes and operator/region codes for each supported country.
- **Customizable Text Style**:
  - **Plus Symbol**: Choose whether to include the plus symbol (+) at the beginning of the phone number.
  - **Country Prefix**: Optionally include the country prefix code.
  - **Separation Style**: Separate the generated numbers by new lines or commas.
- **Unlimited Generation**: Generate as many phone numbers as you need without any limits.

</br>

## 🌍【 Available Countries 】

| Country     | Code | Prefix | Region/Operator Codes   |
| ----------- | ---- | ------ | ----------------------- |
| Indonesia   | ID   | +62    | 811, 821, 858, 832, ... |
| USA         | US   | +1     | 201, 202, 203, 205, ... |
| UK          | GB   | +44    | 7, ...                  |
| China       | CN   | +86    | 130, 131, 132, 133, ... |
| India       | IN   | +91    | 93, 94, 73, 75, 81, ... |
| Malaysia    | MY   | +60    | 10, 11, 12, 13, 19, ... |
| Brazil      | BR   | +55    | 11, 12, 13, 19, 99, ... |
| Germany     | DE   | +49    | 150, 151, 152, 179, ... |
| France      | FR   | +33    | 1, 2, 3, 4, 5, 6, 7 ... |
| Japan       | JP   | +81    | 70, 80, 90, ...         |
| Singapore   | SG   | +65    | No code by default      |
| Philippines | PH   | +63    | 917, 918, 920, 930, ... |

</br>

## 🛠️【 Installation 】

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/SirGhazian/phone-number-generator.git
   cd phone-number-generator

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

</br>

## 🖥️【 Usage 】

1. Open the application in your browser.
2. Select a country code from the dropdown menu.
3. Set the total number of phone numbers to generate (up to 9999).
4. Toggle the options to include the plus symbol, country prefix, or comma separation.
5. Click the "Generate" button to create the phone numbers.
6. Copy the generated numbers using the "Copy" button.

</br>

## 📂【 Project Structure 】

    .
    ├── src/
    │   ├── components/
    │   │   └── creditsFooter.tsx
    │   │   └── headerLogo.tsx
    │   │   └── mainGenerator.tsx       # Main generator and all of the functions
    │   │   └── themeController.tsx
    │   ├── data/
    │   │   └── countryCode.ts          # Data file containing country codes and prefixes
    │   ├── App.tsx                     # Main application component

</br>

## 🤝【 Contributing 】

Contributions are welcome! Please fork this repository and submit a pull request for any feature additions, country code, bug fixes, or improvements.
