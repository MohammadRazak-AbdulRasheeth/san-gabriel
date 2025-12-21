# Hero Background Images Summary

## ✅ All Pages Updated with Hero Background Images

Every page on the San Gabriel website now features a hero section with a background image from the `/heroimages/` folder with **increased visibility** for better visual impact.

### Implementation Details

#### 1. **Home Page** (`/`)
- Component: `AgencyHero.jsx`
- Background: `homeherosection1.jpeg`
- **Opacity: 40%** ⬆️
- Overlay: from-blue-900/70 via-blue-800/70 to-blue-900/70
- Additional: Animated dot pattern overlay

#### 2. **Services Page** (`/services`)
- Component: `Services.jsx`
- Background: `servicesherosectionimage.jpeg`
- **Opacity: 40%** ⬆️
- Overlay: from-primary-900/70 via-primary-800/70 to-primary-900/70

#### 3. **About Page** (`/about`)
- Component: `AboutUs.jsx`
- Background: `aboutsectionimage.jpeg`
- **Opacity: 40%** ⬆️
- Overlay: from-primary-900/60 via-primary-700/60 to-primary-600/60

#### 4. **Industries Page** (`/industries`)
- Component: `Industries.jsx`
- Background: `aboutsectionimage.jpeg`
- **Opacity: 30%** ⬆️
- Overlay: from-white/80 to-neutral-50/80

#### 5. **Case Studies Page** (`/case-studies`)
- Component: `CaseStudies.jsx`
- Background: `servicesherosectionimage.jpeg`
- **Opacity: 30%** ⬆️
- Overlay: from-white/80 to-neutral-50/80

#### 6. **Insights Page** (`/insights`)
- Component: `Insights.jsx`
- Background: `homeherosection1.jpeg`
- **Opacity: 40%** ⬆️
- Overlay: bg-primary-900/70

#### 7. **Careers Page** (`/careers`)
- Component: `CareersHero.jsx`
- Background: `servicesherosectionimage.jpeg`
- **Opacity: 40%** ⬆️
- Overlay: from-blue-900/70 via-blue-800/70 to-blue-900/70
- Additional: Animated dot pattern overlay

#### 8. **Contact Page** (`/contact`)
- Component: `Contact.jsx`
- Background: `homeherosection1.jpeg`
- **Opacity: 30%** ⬆️
- Additional: Morphing background shapes animation

#### 9. **Service Detail Pages** (`/services/:category`)
- Component: `ServiceDetail.jsx`
- Background: Individual service's `heroImage` from service data
- **Opacity: 40%** ⬆️
- Overlay: bg-primary-900/70
- Dynamic: Each service has its own unique image

### Design Principles

1. **Enhanced Visibility**: Background images now at 30-40% opacity (increased from 10-20%)
2. **Balanced Overlays**: Gradient overlays reduced to 60-70% (from 80-90%) for better image visibility
3. **Readability**: Text contrast still meets WCAG standards with proper overlays
4. **Performance**: Images are optimized and loaded efficiently
5. **Accessibility**: Maintained excellent text contrast despite increased image visibility
6. **Responsive**: Images scale properly on all device sizes

### Available Hero Images

From `/heroimages/` folder:
- `homeherosection1.jpeg` - Used for Home, Insights, Contact
- `servicesherosectionimage.jpeg` - Used for Services, Case Studies, Careers
- `aboutsectionimage.jpeg` - Used for About, Industries

### Service-Specific Images

From `/11servicesimages/` folder (10 images total):
1. `1.REVENUE-GENERATING ADVERTISING SOLUTIONS .png`
2. `2.BRANDING, BANNERS & SIGNS (HIGH-YIELD .png`
3. `3.MOBILE ADVERTISING – TRUCKING FLEETS .png`
4. `4.MONETIZE YOUR LOCATION.png`
5. `5.ADVERTISE WITH US (SMBs & NONPROFITS) .png`
6. `6.SOCIAL MEDIA & DIGITAL ADVERTISING SERVICES.png`
7. `7.WEBSITE DESIGN & DEVELOPMENT.png`
8. `8.EVENTS & COMMUNITY ADVERTISING.png`
9. `9.INCORPORATION & NOT-FOR-PROFIT SERVICES .png`
10. `10.STRATEGY, TECHNOLOGY & AI.png`

Each service card and service detail page uses its corresponding image.
