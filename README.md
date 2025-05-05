About This App:

This Loan Calculator App is a modern, single-page web application built using React JS and Material UI. It allows users to calculate loan EMIS (Equated Monthly Installments), view a detailed amortization schedule, and see real-time currency conversions of their EMI using live exchange rates.

Instructions for Candidates
Please follow these instructions to complete and submit your project:
•	Push the entire project to a public GitHub repository.
•	Make sure to commit regularly with clear messages after completing each feature.
•	Use the provided EMI formula to perform calculations.
•	Use Context API for global state management (e.g. theme, currency).
•	Create custom React hooks for reusable logic (e.g. EMI calculation, fetching exchange rates).
•	Integrate the ExchangeRate API for live currency conversion.
•	Ensure the app is fully responsive on all screen sizes.
•	Implement both light and dark modes using Material UI's theming system.
•	Add a 404 Not Found page for unmatched routes.
•	Handle runtime errors gracefully by showing an Error Page.
•	Once deployed, add the live deployment link in the About section of your GitHub repo.
•	Deploy the project on any platform (e.g. Vercel, Netlify, GitHub Pages).
e Your final GitHub repository should include a live demo link, and your code should be readable, modular, and well-structured.

  Features
•	Loan EMI calculation using standard financial formulas
•	Dynamic amortization schedule table with monthly breakdown
•	Real-time currency conversion of EMI using a live exchange rate API
•	Paginated exchange rate table for 160+ currencies
•	Dark/Light mode toggle for a customizable experience
•	Collapsible header navigation on mobile screens
•	Fully responsive UI built with Material UI

Technologies Used
•	React (Hooks, Routing, Context API)
•	Material UI for styling and responsive components
•	Axios for API calls
•	Exchange Rate API for real-time currency conversion

EMI Formula Used
The EMI (Equated Monthly Installment) is calculated using the standard formula:
EMI	[P x R x (1+R)N] / [(1+R)N	1] Where:
•	P = Principal loan amount
•	R = Monthly interest rate (annual rate / 12 / 100)
•	N = Loan duration in months
Currency Conversion API
This app integrates with the free tier of the ExchangeRate-APl to fetch live exchange rates.

API Endpoint Example:
https://v6.exchangerate-api.com/v6/YOUR API KEY/1atest/USD
You must register and obtain a free API key to use this endpoint. Then, replace YOUR API KEY in the app code with your actual key.

Purpose of This App
This project is designed to assess a candidate's React development skills, including:
•	React fundamentals (state, props, hooks)
•	Component structure and code reusability
•	Third-party API integration and live data rendering
•	Working with tables, lists, and pagination
•	Theme customization (dark/light mode toggle)
•	Error handling and graceful UI fallbacks
•	Responsive design and collapsible mobile header navigation (In Mobile view)
For any currency conversion feature to work, make sure the API key is valid and the network allows external API calls.
