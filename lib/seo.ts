export const SITE_NAME = "Titan Homes Group";
export const SITE_URL = "https://titanhomesgroup.com";
export const PHONE_TAMPA = "(727) 709-4141";
export const PHONE_SARASOTA = "(727) 709-4141";
export const PHONE_TAMPA_RAW = "+17277094141";
export const PHONE_SARASOTA_RAW = "+17277094141";
export const EMAIL = "info@titanhomesgroup.com";
export const LICENSE = "#CBC1264713";
export const ADDRESS_TAMPA = "5103 Memorial Hwy, Tampa, FL 33634";
export const TAGLINE = "Tampa Bay's Premier Home Remodeling & Construction Experts";

export function generateServiceLocationTitle(
  service: string,
  location: string,
  state: string
): string {
  return `${service} ${location} ${state} - Expert Contractors | ${SITE_NAME}`;
}

export function generateServiceLocationDescription(
  service: string,
  location: string,
  state: string
): string {
  return `Top-rated ${service.toLowerCase()} in ${location}, ${state}. Licensed general contractor with 10+ years and 350+ completed projects. Free consultations — call ${PHONE_TAMPA} | ${SITE_NAME}.`;
}

export function generateServiceTitle(service: string): string {
  return `${service} Services Tampa Bay FL | ${SITE_NAME}`;
}

export function generateLocationTitle(location: string, state: string): string {
  return `Home Remodeling ${location} ${state} - Contractors Near You | ${SITE_NAME}`;
}
