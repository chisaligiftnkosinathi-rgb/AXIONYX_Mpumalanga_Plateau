"use client";
import React, { useState } from 'react';

const mockProvider = {
  entityId: 'global_holdings_root',
  role: 'SOIL',
  legalName: 'Global IT and Business Solutions Pty Ltd',
  registrationNumber: '2021/999569/07',
  servicesOffered: ['REINSURANCE', 'ISP_INFRASTRUCTURE'],
  complianceStandards: ['ROOT_SYSTEM', 'ISO_27001', 'ISP_GROWTH_INSURANCE', 'STANDARD_PUBLISHING_AUTHORITY'],
  isProtectedAsset: true,
  paymentRouting: 'DIRECT_COLLECTION',
  declaredAssets: ['Global IT Datacenter (Witbank)', 'Network Core Switch A1'],
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
};

const mockSubsidiaries = [
  {
    entityId: 'gnc_subsidiary_01',
    role: 'SUBSIDIARY',
    legalName: 'Global Network Connect (Pty) Ltd',
    registrationNumber: '2023/111222/07',
    servicesOffered: ['ENTERPRISE_FIBER', 'CYBER_INSURANCE'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Fiber Backbone Ring (Mpumalanga)', 'Network Operations Vehicle (ND 123-456)'],
    status: 'ACTIVE'
  },
  {
    entityId: 'client_imbally_01',
    role: 'SUBSIDIARY',
    legalName: 'Imbally',
    registrationNumber: '2025/111999/07',
    servicesOffered: ['SCIENTIFIC_CALIBRATION', 'AGRICULTURAL_ROUTING'],
    complianceStandards: ['ISO_17025'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    seedEntityId: 'client_stokvel_01',
    seedName: 'Walala Wasala Stokvel',
    declaredAssets: ['Agricultural Cold Storage Unit', 'Imbally Transport Fleet'],
    status: 'ACTIVE'
  }
];

const generateImballyFleet = () => {
  return Array.from({ length: 50 }).map((_, i) => ({
    assetId: `ERT ${String(i + 1).padStart(3, '0')} MP`,
    assetType: 'VEHICLE',
    description: 'Suzuki Ertiga',
    seedOriginId: 'client_001',
    status: 'ACTIVE',
    telematics: ['GPS', 'DUAL_DASHCAM', 'LIVE_VIDEO', 'PANIC_BUTTON', 'PASSENGER_WIFI']
  }));
};

const generateSGSFleet = () => {
  return Array.from({ length: 5 }).map((_, i) => ({
    assetId: `SGS ${String(i + 1).padStart(3, '0')} MP`,
    assetType: 'VEHICLE',
    description: 'Mobile Environmental Lab (Toyota Hilux)',
    seedOriginId: 'vendor_eastvaal_motors',
    status: 'ACTIVE',
    telematics: ['GPS', 'LIVE_VIDEO', 'COLD_CHAIN_MONITOR', 'SATELLITE_UPLINK']
  }));
};

const eastvaalFleet = [
  { assetId: 'EVL 001 MP', assetType: 'VEHICLE', description: 'Heavy Vehicle Carrier', status: 'ACTIVE', telematics: ['GPS', 'LIVE_VIDEO', 'ASSET_TRACKING'] },
  { assetId: 'EVL 002 MP', assetType: 'VEHICLE', description: 'Dealership Demo (Ertiga)', status: 'ACTIVE', telematics: ['GPS'] },
  { assetId: 'EVL 003 MP', assetType: 'VEHICLE', description: 'Dealership Demo (Ertiga)', status: 'ACTIVE', telematics: ['GPS'] }
];

const timberFleet = [
  { assetId: 'TMB 001 MP', assetType: 'VEHICLE', description: 'Timber Haulage Truck', seedOriginId: 'client_001', status: 'ACTIVE', telematics: ['GPS', 'FATIGUE_MONITOR', 'LIVE_VIDEO'] },
  { assetId: 'TMB 002 MP', assetType: 'VEHICLE', description: 'Timber Haulage Truck', seedOriginId: 'client_001', status: 'ACTIVE', telematics: ['GPS', 'FATIGUE_MONITOR', 'LIVE_VIDEO'] }
];

const mockClients = [
  {
    entityId: 'seed_walala_wasala',
    role: 'SEED',
    legalName: 'Walala Wasala Genesis',
    registrationNumber: 'CONCEPTUAL',
    soilEntityId: 'global_holdings_root',
    complianceStandards: ['ROOT_SYSTEM', 'STANDARD_PUBLISHING_AUTHORITY'],
    isProtectedAsset: true,
    paymentRouting: 'NONE',
    declaredAssets: ['The Core Idea'],
    serviceMethod: 'NONE',
    status: 'ACTIVE'
  },
  {
    entityId: 'node_iphande',
    role: 'SOIL',
    legalName: 'iPhande (The Growth)',
    registrationNumber: 'CONCEPTUAL',
    seedEntityId: 'seed_walala_wasala',
    soilEntityId: 'global_holdings_root',
    seedName: 'Walala Wasala Genesis',
    serviceMethod: 'ISP_FIBER',
    complianceStandards: ['ROOT_SYSTEM'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['The Growth Network', 'Nutrient Distribution Logic'],
    status: 'ACTIVE'
  },
  {
    entityId: 'node_siyaphakamisa',
    role: 'INCUBATOR',
    legalName: 'Siyaphakamisa (The Upliftment)',
    registrationNumber: 'CONCEPTUAL',
    seedEntityId: 'node_iphande',
    soilEntityId: 'global_holdings_root',
    seedName: 'iPhande (The Growth)',
    serviceMethod: 'ISP_FIBER',
    complianceStandards: ['ROOT_SYSTEM'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['The Canopy Network', 'Upliftment Algorithms'],
    status: 'ACTIVE'
  },
  {
    entityId: 'client_002',
    role: 'CLIENT',
    legalName: 'Carolina Coal Processing',
    registrationNumber: '2015/654321/07',
    serviceMethod: 'ISP_FIBER',
    complianceStandards: ['ISO_17025', 'MELOKUHLE_SAMPLING_STANDARD'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Coal Washing Plant B', 'Heavy Duty Conveyor System'],
    status: 'ACTIVE'
  },
  {
    entityId: 'client_water_01',
    role: 'CLIENT',
    legalName: 'Mpumalanga Water Quality Board',
    registrationNumber: '2018/112233/08',
    serviceMethod: 'ISP_WIRELESS',
    complianceStandards: ['ISO_17025', 'SANS_241', 'MELOKUHLE_SAMPLING_STANDARD'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Witbank Dam Testing Facility', 'Mobile River Samplers'],
    status: 'ACTIVE'
  },
  {
    entityId: 'client_blood_01',
    role: 'SUBSIDIARY',
    legalName: 'Highveld Blood Testing Center',
    registrationNumber: '2020/445566/08',
    seedEntityId: 'client_001',
    seedName: 'Imbally',
    serviceMethod: 'ISP_FIBER',
    complianceStandards: ['ISO_15189', 'WHO_GMP'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Cryogenic Storage Unit A', 'Centrifuge Array'],
    status: 'ACTIVE'
  },
  {
    entityId: 'client_food_01',
    role: 'CLIENT',
    legalName: 'Mpumalanga Food Safety Authority',
    registrationNumber: '2021/778899/08',
    serviceMethod: 'ISP_FIBER',
    complianceStandards: ['ISO_17025', 'ISO_22000'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Microbiology Lab', 'Pathogen Detection Equipment'],
    status: 'ACTIVE'
  },
  {
    entityId: 'client_soil_01',
    role: 'CLIENT',
    legalName: 'Mpumalanga Geotechnical Services',
    registrationNumber: '2022/990011/07',
    serviceMethod: 'ISP_FIBER',
    complianceStandards: ['ISO_17025', 'SANS_3001', 'MELOKUHLE_SAMPLING_STANDARD'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Soil Core Analysis Rig', 'Geospatial Sensor Array'],
    status: 'ACTIVE'
  },
  {
    entityId: 'client_medical_01',
    role: 'CLIENT',
    legalName: 'Mpumalanga Clinical Pathology Labs',
    registrationNumber: '2023/554433/07',
    serviceMethod: 'ISP_FIBER',
    complianceStandards: ['ISO_15189', 'ISO_17025'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Automated Hematology Analyzer', 'BSL-3 Containment Unit'],
    status: 'ACTIVE'
  },
  {
    entityId: 'client_blood_01',
    role: 'CLIENT',
    legalName: 'Highveld Blood Testing Center',
    registrationNumber: '1998/001122/08',
    serviceMethod: 'ISP_WIRELESS',
    complianceStandards: ['ISO_15189', 'SANS_10339_BLOOD'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Cold Chain Transport Fleet', 'Centrifuge Array'],
    status: 'ACTIVE'
  },
  {
    entityId: 'oem_suzuki_sa',
    role: 'VENDOR',
    legalName: 'Suzuki Auto South Africa',
    registrationNumber: '2007/021200/07',
    serviceMethod: 'ISP_FIBER',
    complianceStandards: ['IATF_16949_AUTOMOTIVE', 'ISO_9001'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Ertiga Assembly Lines', 'National Parts Distribution Centre'],
    status: 'ACTIVE'
  },
  {
    entityId: 'oem_toyota_sa',
    role: 'VENDOR',
    legalName: 'Toyota South Africa Motors',
    registrationNumber: '1961/001358/07',
    serviceMethod: 'ISP_FIBER',
    complianceStandards: ['IATF_16949_AUTOMOTIVE', 'ISO_14001_ENVIRONMENTAL'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Prospecton Manufacturing Plant', 'Hilux Assembly Line'],
    status: 'ACTIVE'
  },
  {
    entityId: 'oem_ford_sa',
    role: 'VENDOR',
    legalName: 'Ford Motor Company of Southern Africa',
    registrationNumber: '1923/000789/07',
    serviceMethod: 'ISP_FIBER',
    complianceStandards: ['IATF_16949_AUTOMOTIVE', 'ISO_9001'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Silverton Assembly Plant', 'Ranger Production Line'],
    status: 'ACTIVE'
  },
  {
    entityId: 'vendor_mpumalanga_pulp',
    role: 'VENDOR',
    legalName: 'Siphanda Phansi CC',
    registrationNumber: '1936/008963/06',
    seedEntityId: 'client_001',
    seedName: 'Imbally',
    serviceMethod: 'ISP_FIBER',
    complianceStandards: ['FSC_CERTIFIED_FORESTRY', 'ISO_14001_ENVIRONMENTAL', 'ISO_9001', 'MELOKUHLE_SAMPLING_STANDARD'],
    laborArchetypes: ['Forestry Harvesters', 'Heavy Haulage Drivers', 'Pulp Mill Operators'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Ngodwana Pulp Mill', 'Commercial Timber Plantations'],
    physicalAssets: timberFleet,
    status: 'ACTIVE'
  },
  {
    entityId: 'client_stokvel_01',
    role: 'INCUBATOR',
    legalName: 'Walala Wasala Stokvel',
    registrationNumber: '2024/STK/998',
    serviceMethod: 'ISP_WIRELESS',
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Stokvel Treasury Account', 'Community Hall (Leased)'],
    status: 'ACTIVE'
  },
  {
    entityId: 'vendor_eastvaal_motors',
    role: 'INCUBATOR',
    legalName: 'Eastvaal Motors',
    registrationNumber: '1968/005218/07',
    vatNumber: '4190102030',
    seedEntityId: 'seed_walala_wasala',
    soilEntityId: 'global_holdings_root',
    serviceMethod: 'ISP_FIBER',
    complianceStandards: ['ROOT_SYSTEM'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Carolina Dealership', 'Suzuki Ertiga Genesis Fleet'],
    physicalAssets: eastvaalFleet,
    status: 'ACTIVE'
  },
  {
    entityId: 'client_001',
    role: 'SEED',
    legalName: 'Imbally',
    registrationNumber: '2019/123456/07',
    seedEntityId: 'client_001',
    soilEntityId: 'global_holdings_root',
    seedName: 'Imbally',
    complianceStandards: ['ISO_9001', 'IATF_16949_AUTOMOTIVE', 'SANS_10047_ROADWORTHINESS', 'SGS_SERVICE_GOVERNANCE_SELLER', 'BCEA_LABOUR_ACT', 'LRA_COMPLIANT'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Fleet of 50 Suzuki Ertigas', 'Johannesburg Depot'],
    physicalAssets: imballyFleet,
    costLedger: {
      fuelCosts: 1250000.00,
      maintenanceCosts: 350000.00,
      foodAndMaterialCosts: 180000.00,
      labourCosts: 2450000.00
    },
    capitalLedger: {
      initialInvestment: 13500000.00,
      unitCost: 270000.00,
      totalUnits: 50,
      financingSource: 'SEED_EASTVAAL_MOTORS'
    },
    labourGovernance: {
      shiftsTracked: 1500,
      minimumWageCompliant: true,
      bceaRegulated: true
    },
    certifyingSectors: [],
    serviceMethod: 'ISP_FIBER',
    status: 'ACTIVE'
  },
  {
    entityId: 'lab_umzamo',
    role: 'SUBSIDIARY',
    legalName: 'Umzamo Analytical Services',
    registrationNumber: 'PENDING',
    seedEntityId: 'client_001',
    seedName: 'Imbally',
    complianceStandards: ['ISO_17025'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Coal Testing Laboratory', 'Spectrometer Equipment'],
    serviceMethod: 'ISP_FIBER',
    status: 'ACTIVE'
  },
  {
    entityId: 'lab_sgs',
    role: 'SUBSIDIARY',
    legalName: 'SGS South Africa (Pty) Ltd',
    registrationNumber: '1949/032643/07',
    seedEntityId: 'client_001',
    seedName: 'Imbally',
    complianceStandards: ['ISO_17025', 'ISO_9001', 'MELOKUHLE_SAMPLING_STANDARD'],
    certifyingSectors: ['AGRICULTURE_SOIL_TESTING', 'PULP_AND_PAPER_INSPECTION', 'SHIPPING_LOGISTICS', 'MINING_ANALYSIS'],
    laborArchetypes: ['Environmental Samplers', 'Quality Assurance Auditors', 'Logistics Inspectors'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Mpumalanga Testing Facility', 'Environmental Sampling Fleet'],
    physicalAssets: generateSGSFleet(),
    serviceMethod: 'ISP_FIBER',
    status: 'ACTIVE'
  },
  {
    entityId: 'vendor_pjs',
    role: 'VENDOR',
    legalName: 'PJS',
    registrationNumber: 'PENDING',
    complianceStandards: ['ISO_9001'],
    isProtectedAsset: false,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['PJS Operations'],
    serviceMethod: 'ISP_FIBER',
    status: 'ACTIVE'
  },
  {
    entityId: 'lab_melokuhle',
    role: 'SUBSIDIARY',
    legalName: 'Melokuhle Sampling Services',
    registrationNumber: 'PENDING',
    seedEntityId: 'client_001',
    seedName: 'Imbally',
    complianceStandards: ['ISO_17025'],
    certifyingSectors: ['PULP_AND_PAPER_SAMPLING', 'PJS_OPERATIONS_SAMPLING'],
    laborArchetypes: ['Mobile Field Samplers', 'Soil Analysts', 'Testing Kit Technicians'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Mobile Sampling Fleet', 'Pulp Testing Kits'],
    serviceMethod: 'ISP_FIBER',
    status: 'ACTIVE'
  },
  {
    entityId: 'lab_ampath',
    role: 'VENDOR',
    legalName: 'Ampath Trust',
    registrationNumber: '1999/001234/09',
    complianceStandards: ['ISO_15189'],
    certifyingSectors: ['CLINICAL_PATHOLOGY', 'BLOOD_SAMPLING', 'MOLECULAR_TESTING'],
    laborArchetypes: ['Phlebotomists', 'Clinical Pathologists', 'Lab Technicians'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Mpumalanga Regional Laboratory', 'Phlebotomy Fleet'],
    serviceMethod: 'ISP_FIBER',
    status: 'ACTIVE'
  },
  {
    entityId: 'vendor_panelbeater_01',
    role: 'SUBSIDIARY',
    legalName: 'Global Auto Body & Panelbeaters',
    registrationNumber: '2023/112233/07',
    vatNumber: '4460193842',
    seedEntityId: 'global_holdings_root',
    soilEntityId: 'global_holdings_root',
    seedName: 'Global IT and Business Solutions Pty Ltd',
    complianceStandards: ['SAMBRA_MAJOR_STRUCTURAL', 'RMI_APPROVED', 'IATF_16949_AUTOMOTIVE'],
    isProtectedAsset: true,
    paymentRouting: 'ROUTE_TO_MOTHER',
    declaredAssets: ['Chassis Straightening Machine', 'Spray Booth Array'],
    serviceMethod: 'ISP_FIBER',
    status: 'ACTIVE'
  }
];

export default function HoldingsPage() {
  const [provider] = useState<any>(mockProvider);
  const [subsidiaries] = useState<any[]>(mockSubsidiaries);
  const [clients] = useState<any[]>(mockClients);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 flex flex-col">
      <header className="border-b border-slate-800 pb-4 mb-6 flex justify-between items-end">
         <div>
           <div className="text-sm font-bold text-sky-500 tracking-[0.3em] uppercase mb-2">Administration</div>
           <h1 className="text-3xl font-black text-white">🏛️ Corporate Holdings & Insurance</h1>
           <p className="text-slate-400 mt-2">Manage the Mother Company, Reinsurance, and Global Network Subsidiaries</p>
         </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
         <div className="xl:col-span-1 space-y-6">
            <div className="bg-slate-900 border-2 border-fuchsia-900/50 rounded-xl p-5 shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 px-3 py-1 bg-fuchsia-900/50 text-fuchsia-400 text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">MOTHER COMPANY</div>
               <h2 className="text-lg font-bold text-white mb-6">Supreme Entity Profile</h2>
               
               <div className="space-y-4">
                 <div>
                   <label className="text-xs text-slate-500 uppercase tracking-widest block mb-1">Legal Entity</label>
                   <div className="text-sm font-medium text-white">{provider.legalName}</div>
                 </div>
                 <div>
                   <label className="text-xs text-slate-500 uppercase tracking-widest block mb-1">Registration</label>
                   <div className="text-sm font-mono text-slate-300">{provider.registrationNumber}</div>
                 </div>
                 <div>
                   <label className="text-xs text-slate-500 uppercase tracking-widest block mb-1 mt-4">Corporate Offerings</label>
                   <div className="flex gap-2 mt-1">
                     {provider.servicesOffered.map((svc: string) => (
                        <span key={svc} className="bg-fuchsia-950 border border-fuchsia-800 text-fuchsia-300 px-2 py-1 rounded text-[10px] uppercase font-bold tracking-widest">{svc}</span>
                     ))}
                   </div>
                 </div>

                 <div className="mt-6 pt-4 border-t border-slate-800">
                   <h3 className="text-sm font-bold text-sky-400 mb-3 flex items-center gap-2">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                     </svg>
                     Head Office Contact
                   </h3>
                   <div className="space-y-2 text-xs bg-slate-950 p-4 rounded border border-slate-800">
                     <div className="flex justify-between">
                       <span className="text-slate-500">Client Care</span>
                       <span className="text-white font-medium">{provider.contactDetails.clientCare}</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-slate-500">Office</span>
                       <span className="text-white">{provider.contactDetails.officePhone}</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-slate-500">Email</span>
                       <span className="text-sky-400">{provider.contactDetails.email}</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-slate-500">Website</span>
                       <span className="text-sky-400">{provider.contactDetails.website}</span>
                     </div>
                     <div className="flex flex-col mt-2 pt-2 border-t border-slate-800/50">
                       <span className="text-slate-500 mb-1">Physical Address</span>
                       <span className="text-slate-300">{provider.contactDetails.physicalAddress}</span>
                     </div>
                     <div className="flex flex-col mt-2">
                       <span className="text-slate-500 mb-1">Postal Address</span>
                       <span className="text-slate-300">{provider.contactDetails.postalAddress}</span>
                     </div>
                   </div>
                 </div>
                 
                 <div className="mt-6 pt-4 border-t border-slate-800">
                   <h3 className="text-sm font-bold text-emerald-400 mb-3 flex items-center gap-2">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                     </svg>
                     Verified Banking Details
                   </h3>
                   <div className="space-y-2 text-sm bg-slate-950 p-4 rounded border border-emerald-900/50">
                     <div className="flex justify-between">
                       <span className="text-slate-500">Bank</span>
                       <span className="text-white font-medium">{provider.bankingDetails.bankName}</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-slate-500">Branch</span>
                       <span className="text-white">{provider.bankingDetails.branchName} ({provider.bankingDetails.branchCode})</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-slate-500">Account</span>
                       <span className="text-white font-mono">{provider.bankingDetails.accountNumber}</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-slate-500">SWIFT</span>
                       <span className="text-white font-mono">{provider.bankingDetails.swiftAddress}</span>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
         </div>

         <div className="xl:col-span-2 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg mb-6">
               <h2 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
                 <span>Global Network Companies (Subsidiaries)</span>
               </h2>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {subsidiaries.map(sub => (
                    <div key={sub.entityId} className="bg-slate-950 border border-slate-800 rounded p-4 relative">
                       {sub.isProtectedAsset && (
                         <div className="absolute top-2 right-2 text-fuchsia-400">
                           <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.642 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.358-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" /></svg>
                         </div>
                       )}
                       <h3 className="font-bold text-sky-400 mb-1 pr-6">{sub.legalName}</h3>
                       <div className="text-xs text-slate-500 font-mono mb-3">{sub.registrationNumber}</div>
                       <div className="flex flex-wrap gap-2 mb-3">
                         {sub.servicesOffered.map((svc: string) => (
                           <span key={svc} className="bg-slate-900 border border-slate-700 text-slate-300 px-2 py-1 rounded text-[10px] uppercase tracking-widest">{svc.replace('_', ' ')}</span>
                         ))}
                       </div>

                       {sub.complianceStandards && (
                         <div className="flex flex-wrap gap-2 mb-3">
                           {sub.complianceStandards.map((std: string) => (
                             <span key={std} className={`px-2 py-1 rounded text-[9px] uppercase tracking-widest font-bold border ${std === 'ISO_17025' ? 'bg-cyan-950/40 text-cyan-400 border-cyan-900/50' : std === 'ISO_15189' ? 'bg-rose-950/40 text-rose-400 border-rose-900/50' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                               {std === 'ISO_17025' ? (
                                 <span className="flex items-center gap-1">
                                   <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                   {std.replace('_', ' ')}
                                 </span>
                               ) : std === 'ISO_15189' ? (
                                 <span className="flex items-center gap-1">
                                   <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                   {std.replace('_', ' ')}
                                 </span>
                               ) : std.replace('_', ' ')}
                             </span>
                           ))}
                         </div>
                       )}
                       
                       {sub.seedEntityId && (
                         <div className="bg-fuchsia-950/30 border border-fuchsia-900/50 p-2 rounded mb-3 flex items-start gap-2">
                           <div className="mt-0.5 text-fuchsia-400">
                             <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                           </div>
                           <div>
                             <div className="text-[9px] text-fuchsia-400 uppercase tracking-widest font-bold mb-0.5">Seed Provenance</div>
                             <div className="text-xs text-fuchsia-200">Incubated by <span className="font-bold">{sub.seedName}</span></div>
                           </div>
                         </div>
                       )}
                       
                       <div className="border-t border-slate-800/50 pt-3 mt-3">
                         <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Financial Routing</div>
                         <div className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                           <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                           {sub.paymentRouting}
                         </div>
                       </div>
                       
                       <div className="border-t border-slate-800/50 pt-3 mt-3">
                         <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Declared Assets</div>
                         <ul className="list-disc list-inside text-xs text-slate-400">
                           {sub.declaredAssets.map((asset: string, i: number) => (
                             <li key={i}>{asset}</li>
                           ))}
                         </ul>
                       </div>
                    </div>
                 ))}
               </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg h-full">
               <h2 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
                 <span>External Clients & Partners</span>
                 <button className="bg-sky-600 hover:bg-sky-500 text-white text-xs px-4 py-2 rounded uppercase tracking-widest font-bold transition-colors">
                   + Register Client
                 </button>
               </h2>
               
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="border-b border-slate-800 text-xs uppercase tracking-widest text-slate-500">
                       <th className="py-3 px-4 font-normal">Business Name</th>
                       <th className="py-3 px-4 font-normal">Services / Assets</th>
                       <th className="py-3 px-4 font-normal">Governance</th>
                     </tr>
                   </thead>
                   <tbody className="text-sm divide-y divide-slate-800/50">
                     {clients.map(client => (
                       <React.Fragment key={client.entityId}>
                         <tr className="hover:bg-slate-800/30 transition-colors">
                           <td className="py-4 px-4 font-medium text-white">
                             {client.legalName}
                             {client.role === 'SOIL' && (
                                <span className="ml-2 inline-flex items-center gap-1 bg-amber-900/30 text-amber-400 border border-amber-800/50 px-1.5 py-0.5 rounded text-[9px] uppercase tracking-widest">
                                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                                  Fertile Soil
                                </span>
                              )}
                              {client.role === 'SEED' && (
                                <span className="ml-2 inline-flex items-center gap-1 bg-lime-900/30 text-lime-400 border border-lime-800/50 px-1.5 py-0.5 rounded text-[9px] uppercase tracking-widest">
                                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                                  Genesis Seed
                                </span>
                              )}
                              {client.role === 'INCUBATOR' && (
                               <span className="ml-2 inline-flex items-center gap-1 bg-fuchsia-900/30 text-fuchsia-400 border border-fuchsia-800/50 px-1.5 py-0.5 rounded text-[9px] uppercase tracking-widest">
                                 <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                                 Plant / Incubator
                               </span>
                             )}
                             <div className="text-xs text-slate-500 font-mono mt-1">
                               Reg: {client.registrationNumber}
                               {client.vatNumber && <span className="ml-2">VAT: {client.vatNumber}</span>}
                             </div>
                           </td>
                           <td className="py-4 px-4">
                             {client.complianceStandards && (
                                <div className="flex flex-wrap gap-1 mb-2">
                                  {client.complianceStandards.map((std: string) => (
                                    <span key={std} className={`px-1.5 py-0.5 rounded text-[9px] uppercase tracking-widest font-bold border ${std === 'ISO_17025' ? 'bg-cyan-950/40 text-cyan-400 border-cyan-900/50' : std === 'ISO_15189' ? 'bg-rose-950/40 text-rose-400 border-rose-900/50' : std.includes('AUTOMOTIVE') || std.includes('ROADWORTHINESS') ? 'bg-violet-950/40 text-violet-400 border-violet-900/50' : std.includes('SAMBRA') || std.includes('RMI') ? 'bg-orange-950/40 text-orange-400 border-orange-900/50' : std.includes('SGS') || std.includes('LABOUR') || std.includes('LRA') ? 'bg-yellow-950/40 text-yellow-400 border-yellow-900/50' : std.includes('FSC') || std.includes('FORESTRY') || std.includes('ENVIRONMENTAL') ? 'bg-emerald-950/40 text-emerald-400 border-emerald-900/50' : std.includes('ISP_GROWTH_INSURANCE') ? 'bg-sky-950/40 text-sky-400 border-sky-900/50' : std.includes('MELOKUHLE') ? 'bg-pink-950/40 text-pink-400 border-pink-900/50' : std.includes('PUBLISHING') ? 'bg-indigo-950/40 text-indigo-400 border-indigo-900/50' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                                      {std === 'ISO_17025' ? (
                                        <span className="flex items-center gap-1">
                                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                          {std.replace(/_/g, ' ')}
                                        </span>
                                      ) : std === 'ISO_15189' ? (
                                        <span className="flex items-center gap-1">
                                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                          {std.replace(/_/g, ' ')}
                                        </span>
                                      ) : std.includes('AUTOMOTIVE') || std.includes('ROADWORTHINESS') ? (
                                        <span className="flex items-center gap-1">
                                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8a2 2 0 012 2v6m-2 2H6m14-2a2 2 0 11-4 0 2 2 0 014 0zM6 15a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                          {std.replace(/_/g, ' ')}
                                        </span>
                                      ) : std.includes('SAMBRA') || std.includes('RMI') ? (
                                        <span className="flex items-center gap-1">
                                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                                          {std.replace(/_/g, ' ')}
                                        </span>
                                      ) : std.includes('SGS') || std.includes('LABOUR') || std.includes('LRA') ? (
                                        <span className="flex items-center gap-1">
                                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                          {std.replace(/_/g, ' ')}
                                        </span>
                                      ) : std.includes('FSC') || std.includes('FORESTRY') || std.includes('ENVIRONMENTAL') ? (
                                        <span className="flex items-center gap-1">
                                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                                          {std.replace(/_/g, ' ')}
                                        </span>
                                      ) : std.includes('ISP_GROWTH_INSURANCE') ? (
                                        <span className="flex items-center gap-1">
                                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                          {std.replace(/_/g, ' ')}
                                        </span>
                                      ) : std.includes('MELOKUHLE') ? (
                                        <span className="flex items-center gap-1">
                                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                          {std.replace(/_/g, ' ')}
                                        </span>
                                      ) : std.includes('PUBLISHING') ? (
                                        <span className="flex items-center gap-1">
                                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                          {std.replace(/_/g, ' ')}
                                        </span>
                                      ) : std.replace(/_/g, ' ')}
                                    </span>
                                  ))}
                                </div>
                             )}
                             
                             {client.certifyingSectors && (
                                <div className="mb-3 p-2 bg-indigo-950/30 border border-indigo-900/40 rounded-lg">
                                  <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Testing & Certification Sectors
                                  </div>
                                  <div className="flex flex-wrap gap-1.5">
                                    {client.certifyingSectors.map((sector: string) => (
                                      <span key={sector} className="px-2 py-0.5 bg-indigo-950/60 text-indigo-300 border border-indigo-800/50 rounded-md text-[9px] uppercase tracking-wider font-medium">
                                        {sector.replace(/_/g, ' ')}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                             {client.laborArchetypes && (
                                <div className="mb-3 p-2 bg-fuchsia-950/30 border border-fuchsia-900/40 rounded-lg">
                                  <div className="text-[10px] text-fuchsia-400 font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    Labor Archetypes
                                  </div>
                                  <div className="flex flex-wrap gap-1.5">
                                    {client.laborArchetypes.map((archetype: string) => (
                                      <span key={archetype} className="px-2 py-0.5 bg-fuchsia-950/60 text-fuchsia-300 border border-fuchsia-800/50 rounded-md text-[9px] uppercase tracking-wider font-medium">
                                        {archetype.replace(/_/g, ' ')}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                             <div className="text-xs text-slate-300 font-bold mb-1">Assets:</div>
                             <div className="flex flex-col gap-2">
                               <span className="bg-slate-950 border border-slate-700 text-slate-300 px-2 py-1 rounded text-xs w-fit">
                                 {client.serviceMethod.replace('ISP_', '')}
                               </span>
                               {client.seedEntityId && (
                                  <div className="bg-fuchsia-950/30 border border-fuchsia-900/50 px-2 py-1 rounded text-[10px] flex items-center gap-1 text-fuchsia-200">
                                    <svg className="w-2.5 h-2.5 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                                    Linked to <span className="font-bold">{client.seedName || client.seedEntityId}</span>
                                  </div>
                                )}
                               <div className="text-[10px] text-slate-400 mt-1">
                                 {client.declaredAssets.length} Declared Assets
                               </div>
                             </div>
                           </td>
                           <td className="py-4 px-4">
                             <div className="flex flex-col gap-2">
                               {client.isProtectedAsset && (
                                 <span className="text-[10px] text-fuchsia-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                   <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.642 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.358-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" /></svg>
                                   Protected
                                 </span>
                               )}
                               <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                                 <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                 {client.paymentRouting}
                               </span>
                             </div>
                           </td>
                         </tr>
                         {client.physicalAssets && client.physicalAssets.length > 0 && (
                           <tr className="bg-slate-900/30 border-b border-slate-800">
                             <td colSpan={3} className="p-4 pl-12">
                               <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-2">
                                 <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                                 Fleet Tracker ({client.physicalAssets.length} Vehicles)
                               </div>
                               {client.capitalLedger && (
                                 <div className="mb-4 bg-sky-950/30 rounded-lg p-4 border border-sky-900/50">
                                   <h5 className="text-[10px] text-sky-400 font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                                     <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                     Fleet Origination Capital
                                   </h5>
                                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                     <div>
                                       <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Total Investment</div>
                                       <div className="text-sm font-mono text-sky-300">R {client.capitalLedger.initialInvestment.toLocaleString()}</div>
                                     </div>
                                     <div>
                                       <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Unit Cost (x{client.capitalLedger.totalUnits})</div>
                                       <div className="text-sm font-mono text-sky-300">R {client.capitalLedger.unitCost.toLocaleString()}</div>
                                     </div>
                                     <div className="md:col-span-2">
                                       <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Capital Source Seed</div>
                                       <div className="text-xs font-mono text-fuchsia-400 mt-1">{client.capitalLedger.financingSource.replace(/_/g, ' ')}</div>
                                     </div>
                                   </div>
                                 </div>
                               )}
                               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                                  {client.physicalAssets.map((asset: any) => (
                                    <div key={asset.assetId} className="bg-slate-950 border border-slate-800 p-3 rounded flex flex-col gap-2 items-start justify-center hover:border-slate-600 transition-colors">
                                      <div className="flex justify-between w-full items-center">
                                        <div className="text-[10px] text-slate-400 font-mono tracking-widest">{asset.assetId}</div>
                                        <div className={`w-2 h-2 rounded-full ${asset.status === 'ACTIVE' ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                                      </div>
                                      <div className="text-xs font-bold text-slate-200 leading-tight">{asset.description}</div>
                                      
                                      {asset.telematics && asset.telematics.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mt-1">
                                          {asset.telematics.map((feat: string, i: number) => (
                                            <span key={i} className="text-[8px] bg-slate-800 text-slate-300 px-1 py-0.5 rounded border border-slate-700">
                                              {feat.replace(/_/g, ' ')}
                                            </span>
                                          ))}
                                        </div>
                                      )}

                                      {asset.seedOriginId && (
                                         <div className="text-[8px] bg-fuchsia-950/40 text-fuchsia-400 border border-fuchsia-900/50 px-1.5 py-0.5 rounded uppercase mt-auto w-full text-center">
                                           Seed: {client.seedName || client.seedEntityId}
                                         </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                             </td>
                           </tr>
                         )}
                       </React.Fragment>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
