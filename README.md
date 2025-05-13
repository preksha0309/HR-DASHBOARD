# HR Dashboard

A modular,  HR Dashboard with a React frontend and  mock backend, featuring a Jest tests, TailwindCSS, and robust error handling.

## Features
- **Frontend**: React (JSX) with `useReducer` + Context for state management, TailwindCSS for styling, React Router for navigation, Recharts for visualizations.
- **Backend**:  mock API with simulated delays.
- **Authentication**: Role-based route protection (admin/employee).
- **Error Handling**: Error boundaries for component failures.
- **Loading States**: Spinners and skeleton loaders for UX.
- **Testing**: Jest unit tests for components and API.


## Setup Instructions

### Local Development (Without Docker)
1. **Clone Repository**:
   ```bash
   git clone <repo-url>
   cd hr-dashboard

**Frontend Setup** :
cd frontend
npm install
npx tailwindcss init -p
npm run dev

**Run Tests**:
cd frontend
npm test


**CI/CD Setup (GitHub Actions)** - 

Initialize a new repository (hr-dashboard).
Push code:

git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <repo-url>
git push -u origin main


#### Architecture Explanation - 
# Frontend - 
React 18 with Vite: Fast builds, Hot Module Replacement (HMR).
TailwindCSS: Utility-first CSS for responsive, modern UI.
React Router: Client-side routing (/login, /).
State Management:
useReducer + Context (DashboardContext) for centralized state: companies, tenant, data, user ,loading.

#### Performance Optimizations
Lazy Loading: Dashboard and Login are code-split via React.lazy + Suspense.
React.memo: Used for components that depend on stable props to prevent unnecessary re-renders.
Vite Code Splitting: Automatic chunking for optimal bundle size

#### Testing
Jest + React Testing Library:
Unit tests for CompanySwitcher, LeaveBalance, and api functions.


#### Error Handling and UX - 

Error Boundaries: Catch component errors (Dashboard, EmployeeList, LeaveBalance, AnnouncementsFeed).
Loading States: Spinners for data fetching, skeleton loaders for empty/zero data.
Route Protection: Admin/employee roles restrict access

# Future Improvements - 
1 . State Management
Migrate to Redux Toolkit for better scalability and complex state handling.
Integrate React Query for efficient API caching, background updates, and request deduplication.

2.Backend
Integrate a database (e.g., MongoDB, PostgreSQL) for persistent data storage.

Add backend tests using Jest and Supertest.

Implement JWT-based authentication for secure access control

3.Testing
Increase unit test coverage, especially for core components like Dashboard and Login.

Add end-to-end (E2E) tests using Cypress to validate user flows.

4.Features
Add a Logout UI and functionality.

Implement infinite scrolling in EmployeeList for better performance with large datasets.

Introduce admin-specific routes (e.g., user management, tenant settings).

5.Performance
Optimize TailwindCSS bundle size by enabling purge settings.

Add code-splitting for more routes to improve initial load time



