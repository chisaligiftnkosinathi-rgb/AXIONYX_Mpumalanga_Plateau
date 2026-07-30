export interface PhysicalAsset {
  assetId: string;
  assetType: 'VEHICLE' | 'EQUIPMENT' | 'FACILITY';
  description: string;
  seedOriginId?: string;
  status: 'ACTIVE' | 'IN_MAINTENANCE' | 'FLAGGED';
  telematics?: string[]; // E.g., 'GPS', 'DUAL_DASHCAM', 'LIVE_VIDEO', 'PANIC_BUTTON'
}

export interface BusinessEntity {
  entityId: string;
  parentEntityId?: string;
  seedEntityId?: string;
  soilEntityId?: string; // The fertile ground it was planted in
  role: 'MOTHER_COMPANY' | 'SUBSIDIARY' | 'CLIENT' | 'VENDOR' | 'PARTNER' | 'INCUBATOR' | 'SEED' | 'SOIL';
  legalName: string;
  registrationNumber: string;
  vatNumber?: string;
  servicesOffered?: string[];
  complianceStandards?: string[];
  isProtectedAsset: boolean;
  paymentRouting: 'ROUTE_TO_MOTHER' | 'NONE';
  shippingLogic?: {
    engineId: string;
    enabled: boolean;
  };
  declaredAssets: string[];
  physicalAssets?: PhysicalAsset[];
  costLedger?: {
    fuelCosts: number;
    maintenanceCosts: number;
    foodAndMaterialCosts: number;
    labourCosts: number;
  };
  capitalLedger?: {
    initialInvestment: number;
    unitCost: number;
    totalUnits: number;
    financingSource: string;
  };
  labourGovernance?: {
    shiftsTracked: number;
    minimumWageCompliant: boolean;
    bceaRegulated: boolean;
  };
  laborArchetypes?: string[]; // E.g., 'Phlebotomists', 'Field Samplers', 'Fiber Technicians'
  certifyingSectors?: string[]; // e.g. AGRICULTURE, PULP_AND_PAPER, SHIPPING_LOGISTICS
  serviceMethod: 'ISP_FIBER' | 'ISP_5G_ROUTER' | 'ISP_WIRELESS' | 'ISP_LTE' | 'NONE';
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
    // 1. The Fertile Soil (Root Foundation)
    this.entities.set('global_holdings_root', {
      entityId: 'global_holdings_root',
      role: 'SOIL',
      legalName: 'Global IT and Business Solutions Pty Ltd',
      registrationNumber: '2021/999569/07',
      servicesOffered: ['REINSURANCE', 'ISP_INFRASTRUCTURE_MANAGEMENT'],
      complianceStandards: ['ROOT_SYSTEM', 'ISO_27001', 'ISP_GROWTH_INSURANCE', 'STANDARD_PUBLISHING_AUTHORITY'],
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
      complianceStandards: ['ISP_GROWTH_INSURANCE'],
      laborArchetypes: ['Fiber Optic Technicians', 'Cybersecurity Engineers', 'NOC Analysts'],
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
      complianceStandards: ['STANDARD_PUBLISHING_AUTHORITY'],
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
      complianceStandards: ['ISO_17025', 'STANDARD_PUBLISHING_AUTHORITY'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      shippingLogic: {
        engineId: 'imbally_core_shipping_v1',
        enabled: true
      },
      declaredAssets: ['Agricultural Cold Storage Unit', 'Imbally Transport Fleet'],
      serviceMethod: 'ISP_FIBER'
    });

    // 5. Accredited Testing Lab: Carolina Coal Processing
    this.entities.set('client_002', {
      entityId: 'client_002',
      role: 'CLIENT',
      legalName: 'Carolina Coal Processing',
      registrationNumber: '2015/654321/07',
      complianceStandards: ['ISO_17025', 'MELOKUHLE_SAMPLING_STANDARD'],
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
      complianceStandards: ['ISO_17025', 'SANS_241', 'MELOKUHLE_SAMPLING_STANDARD'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Witbank Dam Testing Facility', 'Mobile River Samplers'],
      serviceMethod: 'ISP_WIRELESS'
    });

    // 7. Accredited Testing Lab: SANBS Blood Bank (Witbank) (Linked to Imbally)
    this.entities.set('client_blood_01', {
      entityId: 'client_blood_01',
      role: 'SUBSIDIARY',
      legalName: 'Highveld Blood Testing Center',
      registrationNumber: '2020/445566/08',
      seedEntityId: 'client_001', // Imbally
      complianceStandards: ['ISO_15189', 'WHO_GMP'],
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
      serviceMethod: 'ISP_FIBER'
    });

    // 9. Accredited Testing Lab: Mpumalanga Geotechnical Services
    this.entities.set('client_soil_01', {
      entityId: 'client_soil_01',
      role: 'CLIENT',
      legalName: 'Mpumalanga Geotechnical Services',
      registrationNumber: '2022/990011/07',
      complianceStandards: ['ISO_17025', 'SANS_3001', 'MELOKUHLE_SAMPLING_STANDARD'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Soil Core Analysis Rig', 'Geospatial Sensor Array'],
      serviceMethod: 'ISP_FIBER'
    });

    // 10. Accredited Medical Lab: Mpumalanga Clinical Pathology
    this.entities.set('client_medical_01', {
      entityId: 'client_medical_01',
      role: 'CLIENT',
      legalName: 'Mpumalanga Clinical Pathology Labs',
      registrationNumber: '2023/554433/07',
      complianceStandards: ['ISO_15189', 'ISO_17025'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Automated Hematology Analyzer', 'BSL-3 Containment Unit'],
      serviceMethod: 'ISP_FIBER'
    });

    // --- AUTOMOTIVE BRAND MAKERS (OEMs) ---
    this.entities.set('oem_suzuki_sa', {
      entityId: 'oem_suzuki_sa',
      role: 'VENDOR', // Automotive Manufacturer
      legalName: 'Suzuki Auto South Africa',
      registrationNumber: '2007/021200/07',
      complianceStandards: ['IATF_16949_AUTOMOTIVE', 'ISO_9001'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Ertiga Assembly Lines', 'National Parts Distribution Centre'],
      serviceMethod: 'ISP_FIBER'
    });

    this.entities.set('oem_toyota_sa', {
      entityId: 'oem_toyota_sa',
      role: 'VENDOR',
      legalName: 'Toyota South Africa Motors',
      registrationNumber: '1961/001358/07',
      complianceStandards: ['IATF_16949_AUTOMOTIVE', 'ISO_14001_ENVIRONMENTAL'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Prospecton Manufacturing Plant', 'Hilux Assembly Line'],
      serviceMethod: 'ISP_FIBER'
    });

    this.entities.set('oem_ford_sa', {
      entityId: 'oem_ford_sa',
      role: 'VENDOR',
      legalName: 'Ford Motor Company of Southern Africa',
      registrationNumber: '1923/000789/07',
      complianceStandards: ['IATF_16949_AUTOMOTIVE', 'ISO_9001'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Silverton Assembly Plant', 'Ranger Production Line'],
      serviceMethod: 'ISP_FIBER'
    });

    // --- FORESTRY & PULP INDUSTRY ---
    const timberFleet: PhysicalAsset[] = [
      { assetId: 'TMB 001 MP', assetType: 'VEHICLE', description: 'Timber Haulage Truck', seedOriginId: 'client_001', status: 'ACTIVE', telematics: ['GPS', 'FATIGUE_MONITOR', 'LIVE_VIDEO'] },
      { assetId: 'TMB 002 MP', assetType: 'VEHICLE', description: 'Timber Haulage Truck', seedOriginId: 'client_001', status: 'ACTIVE', telematics: ['GPS', 'FATIGUE_MONITOR', 'LIVE_VIDEO'] }
    ];

    this.entities.set('vendor_mpumalanga_pulp', {
      entityId: 'vendor_mpumalanga_pulp',
      role: 'VENDOR', // Industrial Manufacturer
      legalName: 'Siphanda Phansi CC',
      registrationNumber: '1936/008963/06',
      seedEntityId: 'client_001', // Linked to Imbally
      complianceStandards: ['FSC_CERTIFIED_FORESTRY', 'ISO_14001_ENVIRONMENTAL', 'ISO_9001', 'MELOKUHLE_SAMPLING_STANDARD'],
      laborArchetypes: ['Forestry Harvesters', 'Heavy Haulage Drivers', 'Pulp Mill Operators'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Ngodwana Pulp Mill', 'Commercial Timber Plantations'],
      physicalAssets: timberFleet,
      serviceMethod: 'ISP_FIBER'
    });

    // 11. The Seed: Walala Wasala
    this.entities.set('seed_walala_wasala', {
      entityId: 'seed_walala_wasala',
      role: 'SEED',
      legalName: 'Walala Wasala Genesis',
      registrationNumber: 'CONCEPTUAL',
      soilEntityId: 'global_holdings_root',
      complianceStandards: ['ROOT_SYSTEM'],
      isProtectedAsset: true,
      paymentRouting: 'NONE',
      declaredAssets: ['The Core Idea'],
      serviceMethod: 'NONE'
    });

    // 11.5. The Root (Growth): iPhande
    this.entities.set('node_iphande', {
      entityId: 'node_iphande',
      role: 'SOIL', // The spreading root system
      legalName: 'iPhande (The Growth)',
      registrationNumber: 'CONCEPTUAL',
      soilEntityId: 'global_holdings_root',
      seedEntityId: 'seed_walala_wasala',
      complianceStandards: ['ROOT_SYSTEM'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['The Growth Network', 'Nutrient Distribution Logic'],
      serviceMethod: 'ISP_FIBER'
    });

    // 11.6. The Uplifting (Branches): Siyaphakamisa
    this.entities.set('node_siyaphakamisa', {
      entityId: 'node_siyaphakamisa',
      role: 'INCUBATOR', // The rising branches/uplifting phase
      legalName: 'Siyaphakamisa (The Upliftment)',
      registrationNumber: 'CONCEPTUAL',
      soilEntityId: 'global_holdings_root',
      seedEntityId: 'node_iphande', // Grows from iPhande
      complianceStandards: ['ROOT_SYSTEM'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['The Canopy Network', 'Upliftment Algorithms'],
      serviceMethod: 'ISP_FIBER'
    });

    // 12. The Plant: Eastvaal Motors (Grown from the Seed)
    const eastvaalFleet: PhysicalAsset[] = [
      { assetId: 'EVL 001 MP', assetType: 'VEHICLE', description: 'Heavy Vehicle Carrier', status: 'ACTIVE', telematics: ['GPS', 'LIVE_VIDEO', 'ASSET_TRACKING'] },
      { assetId: 'EVL 002 MP', assetType: 'VEHICLE', description: 'Dealership Demo (Ertiga)', status: 'ACTIVE', telematics: ['GPS'] },
      { assetId: 'EVL 003 MP', assetType: 'VEHICLE', description: 'Dealership Demo (Ertiga)', status: 'ACTIVE', telematics: ['GPS'] }
    ];

    this.entities.set('vendor_eastvaal_motors', {
      entityId: 'vendor_eastvaal_motors',
      role: 'INCUBATOR',
      legalName: 'Eastvaal Motors',
      registrationNumber: '1968/005218/07',
      vatNumber: '4190102030',
      seedEntityId: 'seed_walala_wasala',
      soilEntityId: 'global_holdings_root',
      complianceStandards: ['ROOT_SYSTEM'], // Automotive infrastructure
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Carolina Dealership', 'Suzuki Ertiga Genesis Fleet'],
      physicalAssets: eastvaalFleet,
      serviceMethod: 'ISP_FIBER'
    });

    // 13. The Seed: Imbally (Self-Contained)
    const imballyFleet: PhysicalAsset[] = Array.from({ length: 50 }).map((_, i) => ({
      assetId: `ERT ${String(i + 1).padStart(3, '0')} MP`,
      assetType: 'VEHICLE',
      description: 'Suzuki Ertiga',
      seedOriginId: 'client_001',
      status: 'ACTIVE',
      telematics: ['GPS', 'DUAL_DASHCAM', 'LIVE_VIDEO', 'PANIC_BUTTON', 'PASSENGER_WIFI']
    }));

    this.entities.set('client_001', {
      entityId: 'client_001',
      role: 'SEED', // Imbally is the seed
      legalName: 'Imbally',
      registrationNumber: '2019/123456/07',
      seedEntityId: 'client_001', // Mapped only to itself
      soilEntityId: 'global_holdings_root',
      complianceStandards: ['ISO_9001', 'IATF_16949_AUTOMOTIVE', 'SANS_10047_ROADWORTHINESS', 'SGS_SERVICE_GOVERNANCE_SELLER', 'BCEA_LABOUR_ACT', 'LRA_COMPLIANT'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Fleet of 50 Suzuki Ertigas', 'Johannesburg Depot'],
      physicalAssets: imballyFleet,
      costLedger: {
        fuelCosts: 1250000.00, // ZAR per month
        maintenanceCosts: 350000.00,
        foodAndMaterialCosts: 180000.00,
        labourCosts: 2450000.00
      },
      capitalLedger: {
        initialInvestment: 13500000.00, // R 270,000 per unit * 50 units
        unitCost: 270000.00,
        totalUnits: 50,
        financingSource: 'SEED_EASTVAAL_MOTORS'
      },
      labourGovernance: {
        shiftsTracked: 1500,
        minimumWageCompliant: true,
        bceaRegulated: true
      },
      serviceMethod: 'ISP_FIBER'
    });

    // 13. Umzamo Analytical Services (Linked to Imbally)
    this.entities.set('lab_umzamo', {
      entityId: 'lab_umzamo',
      role: 'SUBSIDIARY',
      legalName: 'Umzamo Analytical Services',
      registrationNumber: 'PENDING',
      seedEntityId: 'client_001', // Imbally
      complianceStandards: ['ISO_17025'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Coal Testing Laboratory', 'Spectrometer Equipment'],
      serviceMethod: 'ISP_FIBER'
    });

    // 14. SGS (Linked to Imbally)
    const sgsFleet: PhysicalAsset[] = Array.from({ length: 5 }).map((_, i) => ({
      assetId: `SGS ${String(i + 1).padStart(3, '0')} MP`,
      assetType: 'VEHICLE',
      description: 'Mobile Environmental Lab (Toyota Hilux)',
      seedOriginId: 'vendor_eastvaal_motors', // Birthed from the same automotive plant
      status: 'ACTIVE',
      telematics: ['GPS', 'LIVE_VIDEO', 'COLD_CHAIN_MONITOR', 'SATELLITE_UPLINK']
    }));

    this.entities.set('lab_sgs', {
      entityId: 'lab_sgs',
      role: 'SUBSIDIARY',
      legalName: 'SGS South Africa (Pty) Ltd',
      registrationNumber: '1949/032643/07',
      seedEntityId: 'client_001', // Imbally
      complianceStandards: ['ISO_17025', 'ISO_9001', 'MELOKUHLE_SAMPLING_STANDARD'],
      certifyingSectors: ['AGRICULTURE_SOIL_TESTING', 'PULP_AND_PAPER_INSPECTION', 'SHIPPING_LOGISTICS', 'MINING_ANALYSIS'],
      laborArchetypes: ['Environmental Samplers', 'Quality Assurance Auditors', 'Logistics Inspectors'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Mpumalanga Testing Facility', 'Environmental Sampling Fleet'],
      physicalAssets: sgsFleet,
      serviceMethod: 'ISP_FIBER'
    });

    // 14.1 PJS
    this.entities.set('vendor_pjs', {
      entityId: 'vendor_pjs',
      role: 'VENDOR',
      legalName: 'PJS',
      registrationNumber: 'PENDING',
      complianceStandards: ['ISO_9001'],
      isProtectedAsset: false,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['PJS Operations'],
      serviceMethod: 'ISP_FIBER'
    });

    // 14.2 Melokuhle Sampling Services
    this.entities.set('lab_melokuhle', {
      entityId: 'lab_melokuhle',
      role: 'SUBSIDIARY',
      legalName: 'Melokuhle Sampling Services',
      registrationNumber: 'PENDING',
      seedEntityId: 'client_001', // Under Imbally/SGS ecosystem
      certifyingSectors: ['PULP_AND_PAPER_SAMPLING', 'PJS_OPERATIONS_SAMPLING'],
      complianceStandards: ['ISO_17025'],
      laborArchetypes: ['Mobile Field Samplers', 'Soil Analysts', 'Testing Kit Technicians'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Mobile Sampling Fleet', 'Pulp Testing Kits'],
      serviceMethod: 'ISP_FIBER'
    });

    // 14.3 Ampath (Blood Sampling & Pathology)
    this.entities.set('lab_ampath', {
      entityId: 'lab_ampath',
      role: 'VENDOR', // Medical Pathology Vendor
      legalName: 'Ampath Trust',
      registrationNumber: '1999/001234/09',
      complianceStandards: ['ISO_15189'], // Medical laboratory standards
      certifyingSectors: ['CLINICAL_PATHOLOGY', 'BLOOD_SAMPLING', 'MOLECULAR_TESTING'],
      laborArchetypes: ['Phlebotomists', 'Clinical Pathologists', 'Lab Technicians'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Mpumalanga Regional Laboratory', 'Phlebotomy Fleet'],
      serviceMethod: 'ISP_FIBER'
    });

    // 15. The Auto Body Spinoff (Birthed by Global IT)
    this.entities.set('vendor_panelbeater_01', {
      entityId: 'vendor_panelbeater_01',
      role: 'SUBSIDIARY',
      legalName: 'Global Auto Body & Panelbeaters',
      registrationNumber: '2023/112233/07',
      vatNumber: '4460193842',
      seedEntityId: 'global_holdings_root', // Birthed directly by the root
      soilEntityId: 'global_holdings_root',
      complianceStandards: ['SAMBRA_MAJOR_STRUCTURAL', 'RMI_APPROVED', 'IATF_16949_AUTOMOTIVE'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Chassis Straightening Machine', 'Spray Booth Array'],
      serviceMethod: 'ISP_FIBER'
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
