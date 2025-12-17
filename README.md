🚀 Features Overview

User authentication (Login / Register / Logout)

Report lost and found items with images

Browse lost and found items

Item detail view

User dashboard (My Posts)

Admin dashboard with protected routes

Role-based access control (Admin / User)

Responsive, professional UI

Reusable components and custom hooks

🏠 Homepage (HomePage.jsx)

The homepage was designed as a real product landing page, not a demo screen.

Sections Included:

Hero Section

Clear headline and value proposition

Primary call-to-action buttons

How It Works

Step-by-step flow:

Report

Match

Reunite

Trust Statistics

Items reunited

Active users

Cities covered

Success Stories

Carousel (Swiper.js)

Emotional user stories with images

Browse Items

Direct navigation to Lost & Found listings

Final Call-to-Action

Encourages users to report lost items

Why this matters:
The homepage clearly explains the product, builds trust, and guides users through the platform.

🧭 Navigation (NavBar.jsx)

Displays Login / Register for guests

Displays username and Logout for authenticated users

Fully integrated with global authentication state (AuthContext)

Clean and responsive design

🦶 Footer (Footer.jsx)

A global footer added to all pages containing:

Brand description

Quick navigation links

Support and legal placeholders

Copyright information

Purpose:
Makes the application feel complete and production-ready.

🔐 Authentication
Login (LoginForm.jsx)

Email & password authentication

Loading and error handling

Redirects user to intended page after login

Register (RegisterForm.jsx)

New user registration

Password confirmation validation

Clean and consistent UI

🌐 Authentication Context (AuthContext.jsx)

Manages global authentication state using React Context API.

Responsibilities:

Store logged-in user

Handle login, register, logout

Provide loading state

Make auth data accessible throughout the app

Benefits:

No prop drilling

Centralized auth logic

Clean integration with routes and UI

🔒 Protected Routing (PrivateRoute.jsx)

A reusable route guard that:

Blocks unauthenticated users

Redirects to login when required

Supports admin-only routes

Preserves intended route after login

Implements Role-Based Access Control (RBAC).

📦 Item Management
Lost Items (LostItemsPage.jsx)
Found Items (FoundItemsPage.jsx)

Fetch and display items using a shared hook

Loading and empty states

Grid-based responsive layout

Navigation to item detail pages

📄 Item Detail (ItemDetailPage.jsx)

Displays complete item information:

Images

Description

Location

Date (Lost / Found)

Contact details

Item status

Designed for future extension (e.g., “Claim Item”).

📝 Report Item Pages
Report Lost (ReportLostPage.jsx)
Report Found (ReportFoundPage.jsx)

Structured, user-friendly forms

Image upload with preview

Error and loading handling

Uses service layer for API calls

👤 My Posts (MyPostPage.jsx)

Displays items posted by the logged-in user

Reuses shared item components

Handles empty and loading states

Ready for edit / delete functionality

♻️ Reusable Components
ItemCard.jsx

Displays item summary (image, title, description, metadata)

ItemList.jsx

Grid layout for items

Handles empty state

Reused across multiple pages

UploadImage.jsx

Image upload with preview

Supports multiple files

Clean UX for forms

🪝 Custom Hook (useItems.js)

A reusable hook that centralizes item fetching logic.

Handles:

Loading state

Error state

Fetching items by type (lost / found / my)

Why it’s important:

Keeps page components clean

Avoids duplicate logic

Easy to extend (pagination, filters)

🔌 Service Layer
authService.js

Login

Register

Backend authentication calls

itemService.js

Create item

Fetch items

Fetch item by ID

Benefit:
Separates API logic from UI, making the app easier to maintain and scale.

🛠 Admin Panel
Admin Dashboard (AdminDashboard.jsx)

Admin navigation

Nested routing

All Items (AllItemsPage.jsx)

View all item posts

Ready for moderation actions

User Management (UserManagementPage.jsx)

View all users

Ready for role & status management

Why this stands out:
Many projects skip admin features—this demonstrates full product thinking.

🧩 App Root (App.jsx)

Global layout (NavBar → Content → Footer)

Public routes

Protected user routes

Admin-only routes

Fallback routing

Ensures clean navigation and scalability.

🧠 Architecture Highlights

Context API for global state

Custom hooks for business logic

Service layer for API calls

Reusable UI components

Role-based protected routing

Clean folder structure

📌 Tech Stack

Frontend: React, React Router

Styling: Tailwind CSS

State Management: React Context API

UI Components: Custom reusable components

Carousel: Swiper.js