declare module '@apiverve/tordetect' {
  export interface tordetectOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface tordetectResponse {
    status: string;
    error: string | null;
    data: TorNodeDetectorData;
    code?: number;
  }


  interface TorNodeDetectorData {
      ipAddress: string;
      isTor:     boolean;
      ipDetails: IPDetails;
      parsed:    boolean;
  }
  
  interface IPDetails {
      range:    number[];
      country:  string;
      region:   string;
      timezone: string;
  }

  export default class tordetectWrapper {
    constructor(options: tordetectOptions);

    execute(callback: (error: any, data: tordetectResponse | null) => void): Promise<tordetectResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: tordetectResponse | null) => void): Promise<tordetectResponse>;
    execute(query?: Record<string, any>): Promise<tordetectResponse>;
  }
}
