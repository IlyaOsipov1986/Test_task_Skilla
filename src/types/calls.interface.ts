export interface ICallsParams {
  date_start?: string;
  date_end?: string;
  in_out?: 0 | 1 | "all";
  limit?: number;
  sort_by?: "date" | "duration";
}

export interface ICallsResponse {
  total_rows: number;
  results: ICallsData[];
}

export interface ICallsData {
  id: number;
  date: string;
  date_notime: string;
  in_out: number;
  person_avatar: string;
  record: string;
  source: string;
  time: number;
  from_number: string;
  to_number: string;
}