/** Set to a string such as "£1,000,000" to show public liability cover on the site. */
export const PUBLIC_LIABILITY_AMOUNT = null;

export const SIA_DEPLOY_STATEMENT =
  "Officers we deploy hold the SIA licence required for their role.";

export const BS_7858_SCREENING = "We screen staff in line with BS 7858";
export const BS_7984_KEY_HOLDING = "We provide key holding in line with BS 7984-1";
export const BS_7499_STATIC_GUARDING = "We deliver static guarding in line with BS 7499";

function publicLiabilityCoverText() {
  if (PUBLIC_LIABILITY_AMOUNT == null) return null;
  return `${PUBLIC_LIABILITY_AMOUNT} public liability insurance`;
}

const siteContact = {
  email: "admin@skywatchsecurity.co.uk",
  addressLines: [
    "SkyWatch Security Ltd",
    "289 Park Street",
    "Luton",
    "Bedfordshire LU1 3HH",
    "United Kingdom"
  ],
  phone: {
    display: "+44 7365 128 680",
    tel: "+447365128680"
  },
  coverageArea: "Luton, Bedfordshire, Hertfordshire and Greater London"
};

const schemaAddress = {
  streetAddress: "289 Park Street",
  addressLocality: "Luton",
  addressRegion: "Bedfordshire",
  postalCode: "LU1 3HH",
  addressCountry: "GB"
};

export { publicLiabilityCoverText, schemaAddress, siteContact };