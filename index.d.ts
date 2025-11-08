declare module '@apiverve/tordetect' {
  export interface tordetectOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface tordetectResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class tordetectWrapper {
    constructor(options: tordetectOptions);

    execute(callback: (error: any, data: tordetectResponse | null) => void): Promise<tordetectResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: tordetectResponse | null) => void): Promise<tordetectResponse>;
    execute(query?: Record<string, any>): Promise<tordetectResponse>;
  }
}
