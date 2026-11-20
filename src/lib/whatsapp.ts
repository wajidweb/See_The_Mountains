// Official confirmed contact number for See The Mountains: 0311 0005006
// Pakistan country code format for WhatsApp direct link: 923110005006
export const AGENCY_PHONE_DISPLAY = "0311 0005006";
export const AGENCY_PHONE_TEL = "+923110005006";
export const AGENCY_WHATSAPP_NUMBER = "923110005006";

export function buildWhatsAppLink(message: string): string {
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${AGENCY_WHATSAPP_NUMBER}?text=${encodedText}`;
}

export function buildDestinationInquiryLink(destinationName: string): string {
  return buildWhatsAppLink(
    `Hello See The Mountains, I would like information about trips to ${destinationName}. Please share available dates, itinerary and price.`
  );
}

export function buildPackageInquiryLink(packageTitle: string, duration: string): string {
  return buildWhatsAppLink(
    `Hello See The Mountains, I am interested in inquiring about the "${packageTitle}" (${duration}). Please share upcoming departure dates and custom group quote.`
  );
}

export function buildGeneralInquiryLink(): string {
  return buildWhatsAppLink(
    `Hello See The Mountains, I would like to plan a trip to northern Pakistan. Please share your current packages and travel advice.`
  );
}
