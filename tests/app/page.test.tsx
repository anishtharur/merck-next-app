import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Index from "../../src/app/page";

// Mock the useDrugSearch hook
const mockSetQuery = jest.fn();
const mockSearchResults = [
  { id: 1, name: "Drug A", phase: "Phase 1" },
  { id: 2, name: "Drug B", phase: "Phase 2" },
];

jest.mock("@/hooks/useDrugSearch", () => ({
  useDrugSearch: () => ({
    query: "",
    setQuery: mockSetQuery,
    isSearching: false,
    searchResults: mockSearchResults,
    isInitialLoading: false,
    statusFilter: "",
    setStatusFilter: jest.fn(),
    phaseFilter: "",
    setPhaseFilter: jest.fn(),
  }),
}));

// Mock the DrugList component
jest.mock("@/components/DrugList", () => {
  return function MockDrugList({
    drugs,
  }: {
    drugs: Array<{ id: number; name: string }>;
  }) {
    return (
      <div>
        {drugs.map((drug) => (
          <div key={drug.id} role="listitem">
            {drug.name}
          </div>
        ))}
      </div>
    );
  };
});

describe("Index Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders page title", async () => {
    render(<Index />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent?.replace(/\s+/g, " ").trim()).toBe(
      "Merck Group CandidateDatabase"
    );
  });

  it("renders search input", async () => {
    render(<Index />);
    const searchInput = screen.getByPlaceholderText(/search drug candidates/i);
    expect(searchInput).toBeInTheDocument();
  });

  it("renders drug cards when search results are available", async () => {
    render(<Index />);
    await waitFor(() => {
      const drugCards = screen.getAllByRole("listitem");
      expect(drugCards).toHaveLength(2);
      expect(screen.getByText("Drug A")).toBeInTheDocument();
      expect(screen.getByText("Drug B")).toBeInTheDocument();
    });
  });

  it("updates query when typing in search input", async () => {
    render(<Index />);
    const searchInput = screen.getByPlaceholderText(/search drug candidates/i);
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(mockSetQuery).toHaveBeenCalledWith("test");
  });

  it("renders filter options", () => {
    render(<Index />);
    expect(screen.getByText("All Statuses")).toBeInTheDocument();
    expect(screen.getByText("All Phases")).toBeInTheDocument();
  });
});
