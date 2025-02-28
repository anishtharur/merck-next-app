# Merck Drug Candidate Management Application Documentation

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)
![Jest](https://img.shields.io/badge/Jest-29-C21325)

## Table of Contents

- [Overview](#overview)
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

# Run production server
npm start

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

#### SearchBar (`src/components/SearchBar.tsx`)

- Real-time search functionality
- Loading state indicators
- Keyboard navigation support

#### DrugCard (`src/components/DrugCard.tsx`)

- Displays drug summary information
- Status badge integration
- Click-through to detailed view

#### StatusBadge (`src/components/StatusBadge.tsx`)

- Visual indicators for drug status
- Color-coded states:
  - In Development (Blue)
  - Approved (Green)
  - Discontinued (Red)

#### DrugList (`src/components/DrugList.tsx`)

- Grid layout for drug cards
- Lazy loading support
- Responsive design

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

1. Dynamic imports for large components
2. Lazy loading of drug list
3. Optimized animations
4. Efficient state management
5. Responsive image loading

## Best Practices

1. TypeScript for type safety
2. Semantic HTML structure
3. Accessible UI components
4. Consistent error handling
5. Responsive design patterns
6. Clean code architecture
