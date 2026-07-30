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
  transitRoutes?: string[]; // e.g. 'N4_TOLL_ROUTE', 'N12_HIGHWAY', 'N17_FREIGHT_CORRIDOR'
  realEstateHoldings?: string[]; // E.g., 'Retail Shops', 'Commercial Offices', 'Warehouses'
  nationalStatistics?: {
    totalLearners: string;
    totalEducators: string;
    totalFacilities: string;
    educationPhases: string[];
    schoolCategories?: string[]; // e.g., Private, Combined, Local Public
  };
  errorSpaceRedundancies?: string[]; // Risk minimization and safety buffers
  workforceSize?: string; // Maps the growth/scale of the business
  auditStatus?: 'CLEAN_AUDIT' | 'PENDING_REVIEW' | 'CRITICAL_RISK'; // 5th Gen Compliance Tracking
  lastAuditDate?: string;
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
      realEstateHoldings: ['Sandton Corporate HQ', 'Witbank Industrial Park'],
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
      realEstateHoldings: ['CBD Retail Complex', 'Community Hall'],
      serviceMethod: 'ISP_WIRELESS'
    });

    // 4. The Grassroots Feeder: Unregistered Local Crèches
    this.entities.set('node_informal_creche', {
      entityId: 'node_informal_creche',
      role: 'INCUBATOR',
      legalName: 'Informal Community Crèche Network',
      registrationNumber: 'UNREGISTERED_INFORMAL',
      seedEntityId: 'client_stokvel_01', // Sustained by the local Stokvel/Community
      servicesOffered: ['CHILDMINDING', 'EARLY_SOCIALIZATION', 'INFORMAL_LEARNING'],
      complianceStandards: ['COMMUNITY_TRUST', 'MAKWANDE_GROWTH_INDEX'], // No formal government compliance
      laborArchetypes: ['Community Mothers', 'Local Childminders', 'Elders'],
      isProtectedAsset: false,
      paymentRouting: 'CASH_COLLECTION',
      declaredAssets: ['Community Backyards', 'Donated Toys & Materials'],
      serviceMethod: 'NONE', // Completely off the grid
      workforceSize: '50 - 200 (Community / Startup Scale)'
    });

    // 5. The Formal Spark: Curiosity & Early Education Node
    this.entities.set('node_curiosity_education', {
      entityId: 'node_curiosity_education',
      role: 'INCUBATOR',
      legalName: 'Curiosity Learning Initiative',
      registrationNumber: '2025/EDU/000',
      parentEntityId: 'node_informal_creche', // Children move from informal crèches to formal ECD
      seedEntityId: 'client_stokvel_01', // Seeded by Stokvel community
      servicesOffered: ['CURIOSITY_INCUBATION', 'EARLY_EDUCATION'],
      complianceStandards: ['ROOT_SYSTEM', 'MAKWANDE_GROWTH_INDEX'], // Makwande drives the growth of early minds
      laborArchetypes: ['Curious Minds', 'ECD Practitioners', 'Childminders'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Community Library', 'Early Learning Center'],
      serviceMethod: 'ISP_WIRELESS'
    });

    // 6. The Formal Pipeline: National Department of Basic Education (DBE)
    this.entities.set('node_dbe_national', {
      entityId: 'node_dbe_national',
      role: 'INCUBATOR', // Incubating the nation's youth
      legalName: 'National Department of Basic Education',
      registrationNumber: 'GOV/DBE/001',
      parentEntityId: 'node_curiosity_education', // Curiosity flows into formal education
      seedEntityId: 'global_holdings_root',
      servicesOffered: ['PUBLIC_SCHOOLING', 'CURRICULUM_ASSESSMENT', 'MATRICULATION'],
      complianceStandards: ['SOUTH_AFRICAN_SCHOOLS_ACT', 'ROOT_SYSTEM', 'MAKWANDE_GROWTH_INDEX'],
      laborArchetypes: ['Foundation Phase Educators', 'Subject Specialists', 'Career Counselors', 'Principals'],
      isProtectedAsset: true,
      paymentRouting: 'NONE', // Government funded
      nationalStatistics: {
        totalLearners: '13.4 Million Learners',
        totalEducators: '450,000+ Educators',
        totalFacilities: '25,000+ Public Schools',
        educationPhases: ['Foundation Phase (Gr R-3: 4 Subjects)', 'Intermediate Phase (Gr 4-6: 6 Subjects)', 'Senior Phase (Gr 7-9: 9 Subjects)', 'FET Phase (Gr 10-12: 7 Subjects)'],
        schoolCategories: ['Private Independent', 'Combined Schools', 'Local Public Schools', 'Faith-Based Schools']
      },
      declaredAssets: ['National Curriculum Assessment Database', 'Public School Infrastructure'],
      serviceMethod: 'ISP_FIBER'
    });

    // 6. The Moral Compass: Faith & Spiritual Network
    this.entities.set('node_faith_network', {
      entityId: 'node_faith_network',
      role: 'INCUBATOR',
      legalName: 'Community Faith & Spiritual Network',
      registrationNumber: 'NPO/FAITH/001',
      seedEntityId: 'client_stokvel_01', // Deeply tied to the Stokvel community structure
      servicesOffered: ['SPIRITUAL_GUIDANCE', 'MORAL_INCUBATION', 'COMMUNITY_OUTREACH'],
      complianceStandards: ['COMMUNITY_TRUST'],
      laborArchetypes: ['Clergy', 'Spiritual Leaders', 'Youth Pastors'],
      isProtectedAsset: true,
      paymentRouting: 'CASH_COLLECTION', // Tithes and offerings
      declaredAssets: ['Places of Worship', 'Community Halls', 'Faith-Based Schools'],
      serviceMethod: 'ISP_WIRELESS'
    });

    // 7. The Sky Regulators: Civil Aviation Authority
    this.entities.set('node_aviation_governance', {
      entityId: 'node_aviation_governance',
      role: 'INCUBATOR', // Incubates safety and airspace regulation
      legalName: 'National Civil Aviation Authority (SACAA)',
      registrationNumber: 'GOV/CAA/001',
      seedEntityId: 'global_holdings_root',
      servicesOffered: ['AIRSPACE_REGULATION', 'PILOT_LICENSING', 'AIRCRAFT_CERTIFICATION'],
      complianceStandards: ['ICAO_STANDARDS', 'CIVIL_AVIATION_ACT'],
      certifyingSectors: ['AVIATION_SAFETY', 'AEROSPACE_ENGINEERING'],
      laborArchetypes: ['Air Traffic Controllers', 'Aviation Inspectors', 'Flight Examiners'],
      isProtectedAsset: true,
      paymentRouting: 'NONE', // Government funded / Regulatory Fees
      errorSpaceRedundancies: ['Predictive Safety Analytics', 'Automated Airspace Override', 'Redundant Certification Servers'],
      declaredAssets: ['National Radar Grid', 'Aviation Safety Database'],
      serviceMethod: 'ISP_FIBER'
    });

    // 8. Heavy Industry: Platinum Group Metals (PGMs)
    this.entities.set('client_pgm_mining_01', {
      entityId: 'client_pgm_mining_01',
      role: 'CLIENT',
      legalName: 'Bushveld Complex PGM Smelters',
      registrationNumber: '2010/PGM/05',
      seedEntityId: 'global_holdings_root',
      complianceStandards: ['ISO_9001', 'ISP_GROWTH_INSURANCE', 'MELOKUHLE_SAMPLING_STANDARD'],
      certifyingSectors: ['MINING', 'PRECIOUS_METALS'],
      laborArchetypes: ['Underground Miners', 'Smelter Operators', 'Tactical Security Teams'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      shippingLogic: {
        engineId: 'secure_bullion_transit',
        enabled: true
      },
      transitRoutes: ['N4_TOLL_ROUTE (Secure Convoy)', 'DOMESTIC_AIR_CORRIDOR (High Value Cargo)'],
      errorSpaceRedundancies: ['Armored Convoy Escorts', 'Satellite Tracking (Dual Band)', 'Geofenced Route Locks'],
      declaredAssets: ['Platinum Smelter A', 'Armored Transport Fleet'],
      serviceMethod: 'ISP_FIBER',
      workforceSize: '5,500+ (Heavy Industry / Corporate Scale)'
    });

    // 9. The Digital Alternative: Homeschooling & Publishing Network
    this.entities.set('node_digital_homeschool', {
      entityId: 'node_digital_homeschool',
      role: 'INCUBATOR',
      legalName: 'Digital Homeschooling & Publishing Network',
      registrationNumber: 'GLOBAL/DIGITAL/001',
      parentEntityId: 'node_informal_creche', // Can bypass formal DBE
      seedEntityId: 'global_holdings_root', // Powered by Global IT internet
      servicesOffered: ['HOMESCHOOLING_SUPPORT', 'DIGITAL_CONTENT_PUBLISHING', 'REMOTE_LEARNING'],
      complianceStandards: ['STANDARD_PUBLISHING_AUTHORITY', 'ISP_GROWTH_INSURANCE'],
      laborArchetypes: ['Content Creators', 'Digital Tutors', 'Homeschooling Parents'],
      isProtectedAsset: true,
      paymentRouting: 'DIRECT_COLLECTION',
      declaredAssets: ['YouTube Educational Channels', 'Spotify Podcast Network', 'Remote Learning Portals'],
      serviceMethod: 'ISP_FIBER',
      workforceSize: '10,000+ (Global Enterprise Scale)'
    });

    // 10. The Watchdog: Independent Audit & Compliance Bureau
    this.entities.set('node_audit_bureau', {
      entityId: 'node_audit_bureau',
      role: 'INCUBATOR',
      legalName: 'National Bureau of Audits & Systems Compliance',
      registrationNumber: 'GOV/AUDIT/000',
      seedEntityId: 'global_holdings_root',
      servicesOffered: ['SYSTEM_AUDITING', 'COMPLIANCE_ENFORCEMENT', 'RISK_ASSESSMENT'],
      complianceStandards: ['INTERNATIONAL_AUDITING_STANDARDS', 'ISP_GROWTH_INSURANCE'],
      laborArchetypes: ['Forensic Auditors', 'Systems Analysts', 'Risk Mitigators'],
      isProtectedAsset: true,
      paymentRouting: 'NONE', // Independent funding
      declaredAssets: ['National Compliance Ledger', 'Forensic Data Vaults'],
      serviceMethod: 'ISP_FIBER',
      workforceSize: '500+ (Elite Forensic Scale)',
      auditStatus: 'CLEAN_AUDIT',
      lastAuditDate: '2026-07-30'
    });

    // 11. Third-Party Quality Assurance: Bureau Veritas
    this.entities.set('vendor_bureau_veritas', {
      entityId: 'vendor_bureau_veritas',
      role: 'VENDOR',
      legalName: 'Bureau Veritas Inspectorate (TIC)',
      registrationNumber: 'INT/TIC/001',
      parentEntityId: 'node_audit_bureau', // Submits compliance reports to the national watchdog
      servicesOffered: ['MINERAL_ASSAYING', 'MARITIME_INSPECTION', 'QUALITY_ASSURANCE'],
      complianceStandards: ['ISO_17025', 'MELOKUHLE_SAMPLING_STANDARD'],
      certifyingSectors: ['MINING', 'MARITIME_LOGISTICS'],
      laborArchetypes: ['Marine Surveyors', 'Chemical Analysts', 'Quality Auditors'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER', // Independent contracting fees
      declaredAssets: ['Independent Assay Laboratories', 'Mobile Inspection Fleets'],
      serviceMethod: 'ISP_FIBER',
      workforceSize: '1,500+ (Regional Inspection Scale)',
      auditStatus: 'CLEAN_AUDIT',
      lastAuditDate: '2026-07-30'
    });

    // 12. Early Talent & Aptitude Discovery Engine
    this.entities.set('node_talent_discovery', {
      entityId: 'node_talent_discovery',
      role: 'INCUBATOR',
      legalName: 'Early Talent & Aptitude Discovery Engine',
      registrationNumber: '2025/APT/001',
      parentEntityId: 'node_dbe_national', // Happens during schooling (Senior Phase)
      seedEntityId: 'global_holdings_root',
      servicesOffered: ['PSYCHOMETRIC_TESTING', 'VOCATIONAL_ROUTING', 'TALENT_IDENTIFICATION'],
      complianceStandards: ['ROOT_SYSTEM', 'MAKWANDE_GROWTH_INDEX'],
      laborArchetypes: ['Educational Psychologists', 'Career Guidance Counselors', 'Aptitude Testers'],
      isProtectedAsset: true,
      paymentRouting: 'NONE',
      declaredAssets: ['Psychometric Testing Database', 'Career Mapping Algorithms'],
      serviceMethod: 'ISP_FIBER'
    });

    // 7. The Training Ground: CBD Skills Incubator
    this.entities.set('node_cbd_training', {
      entityId: 'node_cbd_training',
      role: 'INCUBATOR',
      legalName: 'CBD Vocational Training Hub',
      registrationNumber: '2025/EDU/001',
      parentEntityId: 'node_talent_discovery', // Routed here by the Discovery Engine
      seedEntityId: 'client_stokvel_01', // Birthed by the Stokvel
      servicesOffered: ['VOCATIONAL_TRAINING', 'SKILLS_INCUBATION'],
      complianceStandards: ['ROOT_SYSTEM', 'MAKWANDE_GROWTH_INDEX'],
      laborArchetypes: ['Apprentice Plumbers', 'Trainee Nurses', 'Fitter Apprentices', 'All-Rounder Trainees'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['CBD Training Campus', 'Practical Simulation Labs'],
      serviceMethod: 'ISP_FIBER'
    });

    // 5. The Fruit: Imbally (Incubated by the Stokvel)
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
      transitRoutes: ['N4_TOLL_ROUTE', 'N12_HIGHWAY'],
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
      transitRoutes: ['N12_HIGHWAY', 'N17_FREIGHT_CORRIDOR'], // Heavy haulage toll route
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
      certifyingSectors: ['BLOOD_STORAGE', 'CRYOGENIC_PRESERVATION'],
      laborArchetypes: ['Cryogenic Specialists', 'Blood Bank Technicians'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      shippingLogic: {
        engineId: 'blood_transit_logic',
        enabled: true
      },
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
      transitRoutes: ['N4_TOLL_ROUTE', 'R539_FORESTRY_LINK'], // Freight trucks cross tollgates
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
      transitRoutes: ['N4_TOLL_ROUTE', 'N12_HIGHWAY'], // Mobile fleet routes
      declaredAssets: ['Mobile Sampling Fleet', 'Pulp Testing Kits'],
      serviceMethod: 'ISP_FIBER'
    });

    // 14.3 Ampath (Blood Sampling & Pathology)
    this.entities.set('lab_ampath', {
      entityId: 'lab_ampath',
      role: 'VENDOR', // Medical Pathology Vendor
      legalName: 'Ampath Trust',
      registrationNumber: '1999/001234/09',
      parentEntityId: 'client_blood_01', // Linked to the Blood Bank
      complianceStandards: ['ISO_15189'], // Medical laboratory standards
      certifyingSectors: ['CLINICAL_PATHOLOGY', 'BLOOD_SAMPLING', 'MOLECULAR_TESTING'],
      laborArchetypes: ['Phlebotomists', 'Clinical Pathologists', 'Lab Technicians'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      shippingLogic: {
        engineId: 'blood_transit_logic',
        enabled: true
      },
      transitRoutes: ['N4_TOLL_ROUTE', 'N12_HIGHWAY', 'N17_FREIGHT_CORRIDOR'], // Medical logistics fleet
      declaredAssets: ['Mpumalanga Regional Laboratory', 'Phlebotomy Fleet'],
      serviceMethod: 'ISP_FIBER'
    });

    // 14. Infrastructure: National Toll Concession
    this.entities.set('vendor_national_toll', {
      entityId: 'vendor_national_toll',
      role: 'VENDOR',
      legalName: 'Trans-African Concessions (TRAC N4)',
      registrationNumber: '1997/005536/06',
      complianceStandards: ['NATIONAL_ROAD_AGENCY_APPROVED', 'ISP_GROWTH_INSURANCE'],
      certifyingSectors: ['ROAD_INFRASTRUCTURE', 'TOLLGATE_GOVERNANCE'],
      laborArchetypes: ['Tollgate Operators', 'Highway Patrol Officers', 'Road Maintenance Crews'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      declaredAssets: ['Middelburg Toll Plaza', 'Machadodorp Toll Plaza', 'N4 Highway Grid'],
      serviceMethod: 'ISP_FIBER'
    });

    // 15. Infrastructure: Regional Airport (KMIA)
    this.entities.set('vendor_kmia_airport', {
      entityId: 'vendor_kmia_airport',
      role: 'VENDOR',
      legalName: 'Kruger Mpumalanga International Airport',
      registrationNumber: '2001/KMIA/09',
      parentEntityId: 'node_aviation_governance', // Regulated by the Aviation Authority
      complianceStandards: ['ICAO_STANDARDS', 'ISP_GROWTH_INSURANCE'],
      certifyingSectors: ['AIRPORT_LOGISTICS', 'PASSENGER_TRANSIT'],
      laborArchetypes: ['Ground Handlers', 'Baggage Operators', 'Aviation Security Personnel'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      transitRoutes: ['DOMESTIC_AIR_CORRIDOR', 'INTERNATIONAL_FLIGHT_PATH'],
      errorSpaceRedundancies: ['Secondary Radar Arrays', 'Backup Diesel Generators', 'Zero-Single-Point-Of-Failure Comm Grid'],
      declaredAssets: ['Runway 05/23', 'Cargo Terminal', 'Air Traffic Control Tower'],
      serviceMethod: 'ISP_FIBER'
    });

    // 16. Infrastructure: Global Export Maritime Port
    this.entities.set('vendor_maritime_port', {
      entityId: 'vendor_maritime_port',
      role: 'VENDOR',
      legalName: 'Richards Bay Bulk Terminal & Port',
      registrationNumber: 'GOV/PORT/004',
      parentEntityId: 'global_holdings_root', // Direct line to global markets
      complianceStandards: ['INTERNATIONAL_MARITIME_ORG', 'ISP_GROWTH_INSURANCE'],
      certifyingSectors: ['MARITIME_LOGISTICS', 'GLOBAL_EXPORT'],
      laborArchetypes: ['Stevedores', 'Crane Operators', 'Harbor Masters'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      transitRoutes: ['INDIAN_OCEAN_SHIPPING_LANES', 'INTERNATIONAL_WATERS'],
      errorSpaceRedundancies: ['Tsunami Early Warning System', 'Backup Harbor Tug Fleet', 'Automated Mooring Locks'],
      declaredAssets: ['Deep Water Berths', 'Coal Export Terminal', 'Bulk Container Cranes'],
      serviceMethod: 'ISP_FIBER'
    });

    // 17. Real Estate & Retail: Highveld Property Group
    this.entities.set('subsidiary_real_estate', {
      entityId: 'subsidiary_real_estate',
      role: 'SUBSIDIARY',
      legalName: 'Highveld Commercial Properties',
      registrationNumber: '2019/332211/07',
      seedEntityId: 'global_holdings_root',
      complianceStandards: ['PROPERTY_MANAGEMENT_ACT'],
      certifyingSectors: ['REAL_ESTATE', 'RETAIL_LEASING'],
      laborArchetypes: ['Property Managers', 'Leasing Agents', 'Maintenance Technicians'],
      isProtectedAsset: true,
      paymentRouting: 'ROUTE_TO_MOTHER',
      realEstateHoldings: ['Witbank Mall Retail Spaces', 'Middelburg Industrial Units', 'Nelspruit Office Parks'],
      declaredAssets: ['Commercial Leasing Database', 'Facilities Management Fleet'],
      serviceMethod: 'ISP_FIBER'
    });

    // 16. The Auto Body Spinoff (Birthed by Global IT)
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
