export interface GigFilterParams {
  search?: string;
  category?: string;
  location_type?: string;
  budget_type?: string;
  sort?: string;
}

export function hasActiveGigFilters(params: GigFilterParams, tags: string[]): boolean {
  return (
    tags.length > 0 ||
    Boolean(
      params.search ||
        params.category ||
        params.location_type ||
        params.budget_type ||
        (params.sort && params.sort !== "newest")
    )
  );
}
