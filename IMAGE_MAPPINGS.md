# Image Mappings for San Gabriel Website

## Hero Images (from `/heroimages/`)

All pages now use hero images as backgrounds in their hero sections:

- **Home Page** (`AgencyHero`): `homeherosection1.jpeg` (opacity: 20%)
- **Services Page**: `servicesherosectionimage.jpeg` (opacity: 20%)
- **About Page**: `aboutsectionimage.jpeg` (opacity: 20%)
- **Industries Page**: `aboutsectionimage.jpeg` (opacity: 20%)
- **Case Studies Page**: `servicesherosectionimage.jpeg` (opacity: 20%)
- **Insights Page**: `homeherosection1.jpeg` (opacity: 20%)
- **Careers Page** (`CareersHero`): `servicesherosectionimage.jpeg` (opacity: 20%)
- **Contact Page**: `homeherosection1.jpeg` (opacity: 10%, with morphing shapes)
- **Service Detail Pages**: Uses individual service's `heroImage` (opacity: varies)

All hero sections include:
- Background image with reduced opacity for text readability
- Gradient overlay for enhanced contrast
- Responsive design across all device sizes

## Service Images (from `/11servicesimages/`)

### Agency Services (Main Services Page)
1. **Marketing Strategy & Planning**: `10.STRATEGY, TECHNOLOGY & AI.png`
2. **Brand Development & Positioning**: `2.BRANDING, BANNERS & SIGNS (HIGH-YIELD .png`
3. **Advertising & Campaign Management**: `1.REVENUE-GENERATING ADVERTISING SOLUTIONS .png`
4. **Digital Presence & Growth**: `7.WEBSITE DESIGN & DEVELOPMENT.png`
5. **Business & Marketing Consulting**: `6.SOCIAL MEDIA & DIGITAL ADVERTISING SERVICES.png`

### Original Services (from services.js)
1. **Revenue-Generating Advertising Solutions**: `1.REVENUE-GENERATING ADVERTISING SOLUTIONS .png`
2. **Branding, Banners & Signs**: `2.BRANDING, BANNERS & SIGNS (HIGH-YIELD .png`
3. **Mobile Advertising – Trucking Fleets**: `3.MOBILE ADVERTISING – TRUCKING FLEETS .png`
4. **Monetize Your Location**: `4.MONETIZE YOUR LOCATION.png`
5. **Advertise With Us**: `5.ADVERTISE WITH US (SMBs & NONPROFITS) .png`
6. **Social Media & Digital Advertising**: `6.SOCIAL MEDIA & DIGITAL ADVERTISING SERVICES.png`
7. **Website Design & Development**: `7.WEBSITE DESIGN & DEVELOPMENT.png`
8. **Events & Community Advertising**: `8.EVENTS & COMMUNITY ADVERTISING.png`
9. **Incorporation & Not-for-Profit Services**: `9.INCORPORATION & NOT-FOR-PROFIT SERVICES .png`
10. **Strategy, Technology & AI**: `10.STRATEGY, TECHNOLOGY & AI.png`

## Implementation Details

- Service cards now display hero images at the top with a gradient overlay
- Service detail pages show the hero image as a background in the hero section
- All hero sections have proper fallback handling if images fail to load
- Images are optimized for responsive display across all device sizes
