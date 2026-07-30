export interface BusinessEntity {
  entityId: string;
  role: 'PROVIDER' | 'CLIENT' | 'VENDOR' | 'PARTNER';
  legalName: string;
  registrationNumber: string;
  serviceMethod: 'ISP_5G_ROUTER' | 'ISP_FIBER' | 'ISP_WIRELESS' | 'ISP_LTE' | 'NONE';
  bankingDetails?: {
    bankName: string;
    branchName: string;
    branchCode: string;
    accountName: string;
    accountNumber: string;
    swiftAddress: string;
  };
}

/**
 * In-memory mock registry for ISP Operations.
 * Demonstrates AXIONYX tracking clients and routing billing via a central Provider.
 */
export class BusinessEntityRegistry {
  private entities: Map<string, BusinessEntity> = new Map();

  constructor() {
    this.seedRegistry();
  }

  private seedRegistry() {
    // 1. The Root ISP Provider (Global IT and Business Solutions Pty Ltd)
    this.entities.set('isp_root_01', {
      entityId: 'isp_root_01',
      role: 'PROVIDER',
      legalName: 'Global IT and Business Solutions Pty Ltd',
      registrationNumber: '2021/999569/07',
      serviceMethod: 'NONE',
      bankingDetails: {
        bankName: 'Mercantile Bank',
        branchName: 'Witbank',
        branchCode: '450105',
        accountName: 'Global IT and Business Solutions Pty Ltd',
        accountNumber: '1051030382',
        swiftAddress: 'CABLZAJJ'
      }
    });

    // 2. Sample ISP Clients mapped to connectivity methods
    this.entities.set('client_001', {
      entityId: 'client_001',
      role: 'CLIENT',
      legalName: 'Acme Logistics South Africa',
      registrationNumber: '2019/123456/07',
      serviceMethod: 'ISP_5G_ROUTER'
    });

    this.entities.set('client_002', {
      entityId: 'client_002',
      role: 'CLIENT',
      legalName: 'Carolina Coal Processing',
      registrationNumber: '2015/654321/07',
      serviceMethod: 'ISP_FIBER'
    });

    this.entities.set('client_003', {
      entityId: 'client_003',
      role: 'CLIENT',
      legalName: 'Mpumalanga Rural Ops',
      registrationNumber: '2022/987654/07',
      serviceMethod: 'ISP_WIRELESS'
    });
  }

  public getEntity(id: string): BusinessEntity | undefined {
    return this.entities.get(id);
  }

  public getAllEntities(): BusinessEntity[] {
    return Array.from(this.entities.values());
  }

  public getClients(): BusinessEntity[] {
    return this.getAllEntities().filter(e => e.role === 'CLIENT');
  }

  public getProvider(): BusinessEntity | undefined {
    return this.getAllEntities().find(e => e.role === 'PROVIDER');
  }
}

// Singleton export for use across the platform
export const EntityRegistry = new BusinessEntityRegistry();
