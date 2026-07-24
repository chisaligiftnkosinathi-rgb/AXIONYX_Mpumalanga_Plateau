export type Role = 'Administrator' | 'QualityManager' | 'SeniorAnalyst' | 'Analyst' | 'Technician' | 'Auditor' | 'Observer';

export interface Principal {
  id: string;
  username: string;
  roles: Role[];
  permissions: string[];
}

export interface IIdentityProvider {
  /**
   * Authenticates a user and returns a session token or throws an error.
   */
  authenticate(credentials: Record<string, any>): Promise<string>;
  
  /**
   * Verifies a token and returns the authenticated Principal.
   */
  authorize(token: string): Promise<Principal>;
  
  /**
   * Checks if the principal has the required role.
   */
  hasRole(principal: Principal, role: Role): boolean;
}
