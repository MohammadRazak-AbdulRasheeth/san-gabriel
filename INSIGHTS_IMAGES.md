# Insights Images Documentation

All insight articles now have professional images from Unsplash (free stock photos).

## Image Mappings

### Marketing Strategy Articles

1. **Strategic Marketing Planning Framework**
   - Image: Business analytics dashboard
   - URL: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80`
   - Theme: Data analysis, charts, planning

2. **Brand Positioning in Competitive Markets**
   - Image: Team collaboration and strategy
   - URL: `https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80`
   - Theme: Business meeting, teamwork

3. **Integrated Campaign Management**
   - Image: Team working together
   - URL: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80`
   - Theme: Collaboration, planning, teamwork

### Industry Trends Articles

4. **Marketing Technology Trends 2025**
   - Image: Technology and data visualization
   - URL: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80`
   - Theme: Charts, analytics, technology

5. **Digital Advertising Landscape 2025**
   - Image: Digital marketing workspace
   - URL: `https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80`
   - Theme: Laptop, mobile, digital advertising

6. **Content Marketing ROI**
   - Image: Content creation and writing
   - URL: `https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80`
   - Theme: Writing, content, creativity

### Business Growth Articles

7. **Scaling Marketing Operations**
   - Image: Business growth and planning
   - URL: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80`
   - Theme: Documents, planning, strategy

8. **Fractional CMO Benefits**
   - Image: Business leadership and collaboration
   - URL: `https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80`
   - Theme: Team meeting, leadership, discussion

9. **Marketing Budget Optimization**
   - Image: Financial planning and analysis
   - URL: `https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80`
   - Theme: Calculator, budget, financial planning

## Image Specifications

- **Source**: Unsplash (free, high-quality stock photos)
- **Size**: 800px width, optimized quality (q=80)
- **Format**: JPEG (automatically served by Unsplash)
- **License**: Free to use (Unsplash License)
- **Optimization**: Images are served via Unsplash CDN with automatic optimization

## Usage in Components

Images are used in:
1. **InsightCard** - Thumbnail display in grid view
2. **InsightDetail** - Hero image at top of article
3. **SEO/OG Tags** - Social media sharing previews

## Fallback Handling

All components include error handling:
- If image fails to load, falls back to default hero image
- `onError` handlers prevent broken image icons
- Graceful degradation for better UX

## Benefits of Unsplash Images

1. **Professional Quality**: High-resolution, professionally shot images
2. **Free to Use**: No licensing fees or attribution required
3. **CDN Delivery**: Fast loading via Unsplash's global CDN
4. **Automatic Optimization**: Images are automatically optimized for web
5. **Responsive**: Can request different sizes via URL parameters
6. **Reliable**: Hosted on robust infrastructure

## Future Considerations

- Consider creating custom branded images for insights
- Add image alt text for better accessibility
- Implement lazy loading for performance
- Consider WebP format for better compression
