// cypress/support/types.ts
export interface ServiceData {
  serviceName: string;
  tags?: string;
  url?: string;
  protocol?: string;
  host?: string;
  advancedFields: {
    retries?: number;
    timeout?: number;
  };
}

export interface RouteData {
  routeName: string;
  tags?: string;
  serviceName?: string;
  paths: string;
}

export interface ServiceFilterOptions {
  name?: string;
  enabled?: boolean;
  protocol?: string;
  host?: string;
  port?: number;
  path?: string;
}