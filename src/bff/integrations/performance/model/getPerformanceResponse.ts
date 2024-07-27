export interface PerformanceResponseType {
  data: {
    total: number;
    status: [obj: ObjPerformanceType];
  };
}

export interface ObjPerformanceType {
  id: string;
  description: string;
  total: number;
}
