export interface BusinessEntity {
  entityId: string;
  parentEntityId?: string;
  seedEntityId?: string;
  role: 'MOTHER_COMPANY' | 'SUBSIDIARY' | 'CLIENT' | 'VENDOR' | 'PARTNER' | 'INCUBATOR';
  legalName: string;
  registrationNumber: string;
  servicesOffered?: string[];
  complianceStandards?: string[];
  isProtectedAsset: boolean;
  paymentRouting: 'ROUTE_TO_MOTHER' | 'DIRECT_COLLECTION';
  shippingLogic?: {
    engineId: string;
    enabled: boolean;
  };
  declaredAssets: string[];
  serviceMethod: 'ISP_5G_ROUTER' | 'ISP_FIBER' | 'ISP_WIRELESS' | 'ISP_LTE' | 'NONE';
  contactDetails?: {
    clientCare: string;
    officePhone: string;
    email: string;
    website: string;
    physicalAddress: string;
    postalAddress: string;
  };
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
 * In-memory mock registry for Commercial Operations.
 * Demonstrates AXIONYX tracking a global holding company network.
 */
export class BusinessEntityRegistry {
  private entities: Map<string, BusinessEntity> = new Map();

  constructor() {
    this.seedRegistry();
  }

  private seedRegistry() {
    // 1. The Root Mother Company (Global IT and Business Solutions Pty Ltd)
    this.entities.set('global_holdings_root', {
      entityId: 'global_holdings_root',
      role: 'MOTHER_COMPANY',
      legalName: 'Global IT and Business Solutions Pty Ltd',
      registrationNumber: '2021/999569/07',
      servicesOffered: ['REINSURANCE', 'ISP_INFRASTRUCTURE_MANAGEMENT'],
      complianceStandards: ['ROOT_SYSTEM', 'ISO_27001'],
      isProtectedAsset: true,
      paymentRouting: 'DIRECT_COLLECTION', // Root collects payments
      declaredAssets: ['Global IT Datacenter (Witbank)', 'Network Core Switch A1'],
      serviceMethod: 'NONE',
      contactDetails: {
        clientCare: '0860 30 92 50',
        officePhone: '+27 11 302 0300',
        email: 'BusinessBanking@mercantile.co.za',
        website: 'mercantile.co.za',
        physicalAddress: '142 West Street, Sandton, 2196',
        postalAddress: 'PO Box 782699, Sandton, 2146'
      },
      bankingDetails: {
        bankName: 'Mercantile Bank',
        branchName: 'Witbank',
        branchCode: '450105',
        accountName: 'Global IT and Business Solutions Pty Ltd',
        accountNumber: '1051030382',
        swiftAddress: 'CABLZAJJ'
      }
    });

    // 2. Subsidiary: A Global Network Company
    this.entities.set('gnc_subsidiary_01', {
      entityId: 'gnc_subsidiary_01',
      parentEntityId: 'global_holdings_root',
      role: 'SUBSIDIARY',
      legalName: 'Global Network Connect (Pty) Ltd',
      registrationNumber: '2023/111222/07',
      servicesOffered: ['ENTERPRISE_FIBER', 'CYBER_INSURANCE'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      shippingLogic: {
        engineId: 'logic_engine_cyber_01',
        enabled: true
      },
      declaredAssets: ['Fiber Backbone Ring (Mpumalanga)', 'Network Operations Vehicle (ND 123-456)'],
      serviceMethod: 'NONE'
    });

    // 3. The Seed: Walala Wasala Stokvel
    this.entities.set('client_stokvel_01', {
      entityId: 'client_stokvel_01',
      role: 'INCUBATOR',
      legalName: 'Walala Wasala Stokvel',
      registrationNumber: '2024/STK/998',
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Stokvel Treasury Account', 'Community Hall (Leased)'],
      serviceMethod: 'ISP_WIRELESS'
    });

    // 4. The Fruit: Imbally (Incubated by the Stokvel)
    this.entities.set('client_imbally_01', {
      entityId: 'client_imbally_01',
      parentEntityId: 'global_holdings_root',
      seedEntityId: 'client_stokvel_01',
      role: 'SUBSIDIARY',
      legalName: 'Imbally',
      registrationNumber: '2025/111999/07',
      servicesOffered: ['SCIENTIFIC_CALIBRATION', 'AGRICULTURAL_ROUTING'],
      complianceStandards: ['ISO_17025'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      shippingLogic: {
        engineId: 'imbally_core_shipping_v1',
        enabled: true
      },
      declaredAssets: ['Agricultural Cold Storage Unit', 'Imbally Transport Fleet'],
      serviceMethod: 'ISP_5G_ROUTER'
    });

    // 5. Accredited Testing Lab: Carolina Coal Processing
    this.entities.set('client_002', {
      entityId: 'client_002',
      role: 'CLIENT',
      legalName: 'Carolina Coal Processing',
      registrationNumber: '2015/654321/07',
      complianceStandards: ['ISO_17025'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Coal Washing Plant B', 'Heavy Duty Conveyor System'],
      serviceMethod: 'ISP_FIBER'
    });

    // 6. Accredited Testing Lab: Mpumalanga Water Quality
    this.entities.set('client_water_01', {
      entityId: 'client_water_01',
      role: 'CLIENT',
      legalName: 'Mpumalanga Water Quality Board',
      registrationNumber: '2018/112233/08',
      complianceStandards: ['ISO_17025', 'SANS_241'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Witbank Dam Testing Facility', 'Mobile River Samplers'],
      serviceMethod: 'ISP_WIRELESS'
    });

    // 7. Accredited Testing Lab: SANBS Blood Bank (Witbank)
    this.entities.set('client_blood_01', {
      entityId: 'client_blood_01',
      role: 'CLIENT',
      legalName: 'Highveld Blood Testing Center',
      registrationNumber: '2020/445566/08',
      complianceStandards: ['ISO_17025', 'WHO_GMP'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Cryogenic Storage Unit A', 'Centrifuge Array'],
      serviceMethod: 'ISP_FIBER'
    });

    // 8. Accredited Testing Lab: Mpumalanga Food Safety Authority
    this.entities.set('client_food_01', {
      entityId: 'client_food_01',
      role: 'CLIENT',
      legalName: 'Mpumalanga Food Safety Authority',
      registrationNumber: '2021/778899/08',
      complianceStandards: ['ISO_17025', 'ISO_22000'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Microbiology Lab', 'Pathogen Detection Equipment'],
      serviceMethod: 'ISP_5G_ROUTER'
    });

    // 9. General Client: Acme Logistics
    this.entities.set('client_001', {
      entityId: 'client_001',
      role: 'CLIENT',
      legalName: 'Acme Logistics South Africa',
      registrationNumber: '2019/123456/07',
      complianceStandards: ['ISO_9001'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Fleet of 50 Suzuki Ertigas', 'Johannesburg Depot'],
      serviceMethod: 'ISP_5G_ROUTER'
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

  public getMotherCompany(): BusinessEntity | undefined {
    return this.getAllEntities().find(e => e.role === 'MOTHER_COMPANY');
  }
  
  public getSubsidiaries(): BusinessEntity[] {
    return this.getAllEntities().filter(e => e.role === 'SUBSIDIARY');
  }
}

// Singleton export for use across the platform
export const EntityRegistry = new BusinessEntityRegistry();
