import { IIdentityProvider, Principal, Role } from './IIdentityProvider';

export class LocalJWTProvider implements IIdentityProvider {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  async authenticate(credentials: Record<string, any>): Promise<string> {
    // Note: In production this verifies against PostgreSQL
    if (credentials.username === 'admin' && credentials.password === 'axionyx') {
      return 'dummy.jwt.token';
    }
    throw new Error('Authentication Failed');
  }

  async authorize(token: string): Promise<Principal> {
    // Note: In production this decodes and validates the JWT signature
    if (token === 'dummy.jwt.token') {
      return {
        id: 'user_01',
        username: 'admin',
        roles: ['Administrator'],
        permissions: ['*']
      };
    }
    throw new Error('Unauthorized');
  }

  hasRole(principal: Principal, role: Role): boolean {
    return principal.roles.includes(role) || principal.roles.includes('Administrator');
  }
}
