# Merck Drug Candidate Management Application Documentation

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)
![Jest](https://img.shields.io/badge/Jest-29-C21325)
[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://merck-next-app.vercel.app/)

## Table of Contents

- [Overview](#overview)
- [Demo](#demo)
- [Technical Stack](#technical-stack)
- [Installation](#installation)
- [Core Features](#core-features)
  - [Home Page](#1-home-page-srcapppagetsx)
  - [Drug Detail Page](#2-drug-detail-page-srcappdrugidpagetsx)
  - [Components](#3-components)
  - [Data Management](#4-data-management)
- [User Interface Features](#user-interface-features)
- [Development Information Display](#development-information-display)
- [Search and Filtering](#search-and-filtering)
- [Performance Optimizations](#performance-optimizations)
- [Best Practices](#best-practices)

## Overview

The Merck Drug Candidate Management Application is a modern web application built with Next.js that provides a comprehensive interface for exploring and managing drug candidates in various stages of development. The application features a responsive design with dark mode support and smooth animations.

## Demo

Visit the live application: [Merck Drug Candidate Management](https://merck-next-app.vercel.app/)

The application is deployed on Vercel and showcases:

- Real-time search and filtering of drug candidates
- Detailed information about each drug
- Responsive design with dark mode support
- Smooth animations and transitions

## Installation

```bash
# Clone the repository
git clone https://github.com/anishtharur/merck-next-app.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Technical Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest
- **State Management**: React Hooks
- **Build Tool**: SWC

## Core Features

### 1. Home Page (`src/app/page.tsx`)

The main landing page provides:

- Search functionality for drug candidates
- Advanced filtering options:
  - Status filter (All, In Development, Approved, Discontinued)
  - Phase filter (All, Phase 1, Phase 2, Phase 3)
- Responsive grid layout for drug cards
- Loading states with skeleton animations
- Dark mode support

### 2. Drug Detail Page (`src/app/drug/[id]/page.tsx`)

Individual drug pages featuring:

- Comprehensive drug information
- Development status tracking
- Side effects listing
- Development phase progress
- Last updated information
- FDA approval status (when applicable)
- Responsive two-column layout on larger screens

### 3. Components

#### Header (`src/components/Header.tsx`)

- Main page header with title and description
- Memoized for performance
- Smooth fade-in animation

#### SearchBar (`src/components/SearchBar.tsx`)

- Real-time search functionality
- Loading state indicators
- Keyboard navigation support

#### DrugCard (`src/components/DrugCard.tsx`)

- Displays drug summary information
- Status badge integration
- Click-through to detailed view
- Memoized for performance optimization

#### StatusBadge (`src/components/StatusBadge.tsx`)

- Visual indicators for drug status
- Color-coded states:
  - In Development (Blue)
  - Approved (Green)
  - Discontinued (Red)

#### DrugList (`src/components/DrugList.tsx`)

- Grid layout for drug cards
- Responsive design
- Virtualized scrolling for large lists

#### LoadingSkeleton (`src/components/LoadingSkeleton.tsx`)

- Reusable loading state component
- Smooth pulse animations
- Responsive grid layout
- Memoized for consistent performance

#### FilterSelect (`src/components/FilterSelect.tsx`)

- Reusable filter dropdown component
- Accessible form controls with ARIA labels
- Dark mode support
- Memoized to prevent unnecessary rerenders

#### ThemeToggle (`src/components/ThemeToggle.tsx`)

- Dark/Light mode switching
- System preference detection
- Persistent theme selection

### 4. Data Management

#### Drug Search Hook (`src/hooks/useDrugSearch.ts`)

- Real-time search functionality
- Filter management
- Loading state handling

#### Types (`src/lib/types.ts`)

Core type definitions including:

```typescript
interface DrugCandidate {
  id: string;
  name: string;
  status: "In Development" | "Approved" | "Discontinued";
  developmentPhase?: number;
  description: string;
  mechanismOfAction: string;
  sideEffects: string[];
  lastUpdated: string;
}
```

## User Interface Features

### 1. Navigation

- Breadcrumb navigation
- Back button functionality
- Smooth transitions between pages

### 2. Status Visualization

- Color-coded status badges
- Progress bars for development phases
- Visual indicators for FDA approval

### 3. Responsive Design

- Mobile-first approach
- Grid layouts that adapt to screen size
- Optimized typography for readability

### 4. Loading States

- Skeleton loading animations
- Smooth fade-in transitions
- Loading indicators for async operations

### 5. Dark Mode

- System preference detection
- Manual toggle option
- Consistent styling across modes

## Development Information Display

### Status Types

1. **In Development**

   - Shows current phase (1-4)
   - Progress bar visualization
   - Last updated date

2. **Approved**

   - FDA approval badge
   - Availability information
   - Approval date

3. **Discontinued**
   - Discontinuation notice
   - Reason for halting development
   - Last active date

## Search and Filtering

### Search Capabilities

- Real-time search results
- Search across multiple fields:
  - Drug names
  - Descriptions
  - Mechanism of action

### Filter Options

1. **Status Filter**

   - All Statuses
   - In Development
   - Approved
   - Discontinued

2. **Phase Filter**
   - All Phases
   - Phase 1
   - Phase 2
   - Phase 3

## Performance Optimizations

1. **Component Optimizations**

   - Extensive use of `React.memo` for pure components
   - Proper component display names for debugging
   - Strategic component splitting for better code organization
   - Debounced event handlers for resize and scroll events

2. **Loading Optimizations**

   - Dynamic imports for large components
   - SSR disabled for interactive components
   - Optimized loading skeleton components
   - Smooth loading state transitions
   - Progressive loading with animation delays

3. **List Virtualization**

   - Windowed rendering for `DrugList` component
   - Only renders items currently in viewport
   - Configurable overscan for smooth scrolling
   - Dynamic row height calculations based on screen size
   - Memory efficient handling of large datasets
   - Responsive grid adaptation with virtualization
   - Debounced scroll handling with requestAnimationFrame

4. **State Management**

   - Efficient use of `useMemo` for computed values
   - Memoized filter options and callbacks
   - Optimized conditional rendering
   - Controlled component updates with proper dependency arrays

5. **UI Performance**

   - Optimized animations with will-change
   - Responsive image loading
   - Efficient grid layouts
   - Smooth dark mode transitions
   - Custom scrollbar optimization
   - Staggered animations for list items
   - Hardware-accelerated transitions

6. **CSS Optimizations**

   - Tailwind JIT compilation for minimal CSS
   - Custom utility classes for performance
   - Efficient use of CSS transforms
   - Optimized dark mode transitions
   - GPU-accelerated animations
   - Reduced paint operations with opacity/transform
   - Custom scrollbar styling for better performance

7. **Code Splitting**
   - Dynamic import of the `DrugList` component for better initial page load
   - Component architecture split into logical, reusable pieces:
     - `Header`: Page header component
     - `LoadingSkeleton`: Loading state component
     - `DrugCard`: Individual drug card component
     - `StatusBadge`: Status indicator component
     - `FilterSelect`: Reusable filter component
     - `ThemeToggle`: Theme switching component
   - Each component is focused on a single responsibility
   - Components are organized by feature and functionality

## Best Practices

1. TypeScript for type safety
2. Semantic HTML structure
3. Accessible UI components
4. Consistent error handling
5. Responsive design patterns
6. Clean code architecture
