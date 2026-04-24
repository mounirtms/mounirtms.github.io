# MAB Modules Suite - Professional Magento 2 Extensions

<div align="center">

![MAB Extensions Suite](https://img.shields.io/badge/MAB-Extensions%20Suite-blue?style=for-the-badge)
![Magento 2.4+](https://img.shields.io/badge/Magento-2.4%2B-orange?style=for-the-badge)
![Algerian Market](https://img.shields.io/badge/Algerian-Market-green?style=for-the-badge)

**28 Professional Extensions for the Algerian E-commerce Market**

*Developed by Mounir Abderrahmani | Techno Stationery*

</div>

---

## Quick Links

- 📊 **[Comprehensive Report](MAB_MODULES_COMPREHENSIVE_REPORT.md)** - Full documentation with pricing, architecture, and market analysis
- 🚚 **[Yalidine Carrier](app/code/Mab/YalidineCarrier/README.md)** - Algerian shipping integration (165+ centers, 58 wilayas)
- 📦 **[Source Selector](app/code/Mab/SourceSelector/README.md)** - Multi-source inventory management
- 🛒 **[Checkout Customization](app/code/Mab/CheckoutCustomization/README.md)** - Enhanced checkout experience
- 👤 **[Social Login](app/code/Mab/SocialLogin/README.md)** - Firebase authentication (Google, Facebook)
- 🔔 **[Notifications](app/code/Mab/Notifications/README.md)** - Push notification system

---

## Overview

The **MAB Modules Suite** is a comprehensive collection of **28 professional Magento 2 extensions** specifically designed for the Algerian e-commerce market.

### Key Features

✅ **Yalidine Integration**: Real-time shipping with 165+ centers across all 58 Algerian wilayas  
✅ **Multi-Source Inventory**: Intelligent warehouse management with distance-based selection  
✅ **Enhanced Checkout**: Algerian address validation with pickup-source mismatch detection  
✅ **Social Login**: Firebase Authentication (Google, Facebook) with checkout success integration  
✅ **Push Notifications**: WebPush API for customer engagement and abandoned cart recovery  
✅ **Bilingual Support**: Complete French localization with Arabic readiness  
✅ **Performance Optimized**: Caching, CDN integration, and database optimization  

### Statistics

| Metric | Value |
|--------|-------|
| Total Modules | 28 |
| Algerian Wilayas | 58/58 |
| Yalidine Centers | 165+ |
| Languages | English, French |
| Magento Version | 2.4.x |
| PHP Version | 8.1+ |

---

## Module Categories

### 🚚 Shipping & Logistics
- **Mab_YalidineCarrier** - Yalidine Express integration (home delivery, stop desk, source pickup)
- **Mab_SourceSelector** - Multi-source inventory with intelligent allocation
- **Mab_DeliveryOptions** - Advanced shipping configuration

### 🛒 Checkout & Sales
- **Mab_CheckoutCustomization** - Enhanced checkout with Algerian validations
- **Mab_GuestFix** - Guest checkout improvements
- **Mab_AlgeriaProducts** - Localized product catalog (DZD, taxes)

### 👤 Customer Experience
- **Mab_SocialLogin** - Firebase Authentication (Google, Facebook)
- **Mab_Notifications** - Push notification system
- **Mab_VisualEffects** - UI animations and feedback
- **Mab_Theme** - Frontend customization

### ⚡ Performance & Optimization
- **Mab_Cache** - Intelligent caching system
- **Mab_CachePurge** - Cache management
- **Mab_Cloudflare** - CDN integration
- **Mab_ElasticsearchFix** - Search optimization

### 🔧 Infrastructure
- **Mab_Core** - Foundation module (license, config, error handling)
- **Mab_License** - License management
- **Mab_EnvironmentManager** - Multi-environment configuration
- **Mab_Testing** - Quality assurance framework

### 📢 Marketing
- **Mab_OneSignal** - Push notification campaigns
- **Mab_AbandonedCartNotification** - Cart recovery system
- **Mab_YellowSaturdayPopup** - Promotional campaigns

### 🔗 Compatibility
- **Mab_AmastyCompat** - Amasty integration
- **Mab_AmastyColorSwatchesFix** - Swatch display fixes
- **Mab_ConfigurableProductFix** - Product UI improvements
- **Mab_CoreFixes** - Magento core patches
- **Mab_UrlBuilderFix** - URL resolution fixes
- **Mab_AdminLocale** - Multi-language admin

---

## Installation

### Prerequisites
- Magento 2.4.x (Open Source or Commerce)
- PHP 8.1+
- MySQL 8.0+
- Elasticsearch 7.x

### Quick Install

```bash
# Clone repository
git clone https://github.com/mounirtms/mab-modules.git

# Copy modules to Magento
cp -r mab-modules/app/code/Mab/* /path/to/magento/app/code/Mab/

# Enable all modules
cd /path/to/magento
bin/magento module:enable Mab_Core Mab_License Mab_YalidineCarrier Mab_SourceSelector
bin/magento setup:upgrade
bin/magento setup:di:compile
bin/magento setup:static-content:deploy fr_FR en_US
bin/magento cache:flush
```

### Individual Module Installation

```bash
# Enable specific module
bin/magento module:enable Mab_YalidineCarrier
bin/magento setup:upgrade
bin/magento cache:flush
```

---

## Configuration

### Yalidine Carrier Setup

1. **Get API Credentials**: Register at [Yalidine Express](https://www.yalidine.com/)
2. **Configure Module**: `Admin → Stores → Configuration → Sales → Shipping Methods → Yalidine`
3. **Set API ID and Token**
4. **Configure Origin Wilaya** (your store location)
5. **Enable Delivery Options** (home, stop desk, pickup)

### Social Login Setup

1. **Create Firebase Project**: [Firebase Console](https://console.firebase.google.com/)
2. **Enable Authentication**: Google and Facebook providers
3. **Add Firebase Config**: `Admin → MAB Extensions → Social Login`
4. **Configure OAuth**: Google Cloud Console + Facebook Developers

---

## Pricing

### Algerian Market (DZD)

| Package | Modules | Price (DZD) | Support |
|---------|---------|-------------|---------|
| **Starter** | 1-3 modules | 25,000 - 60,000 | Email |
| **Professional** | 5-10 modules | 80,000 - 150,000 | Email + Chat |
| **Enterprise** | Full suite | 200,000+ | Priority + Phone |

### International Market (USD)

| Package | Modules | Price (USD) | Support |
|---------|---------|-------------|---------|
| **Community** | 1-3 modules | $79 - $199 | Email |
| **Business** | 5-10 modules | $299 - $599 | Email + Chat |
| **Enterprise** | Full suite | $999+ | Priority + Phone |

*See [Comprehensive Report](MAB_MODULES_COMPREHENSIVE_REPORT.md) for detailed pricing per module.*

---

## Documentation

- **[Comprehensive Report](MAB_MODULES_COMPREHENSIVE_REPORT.md)** - Full documentation
- **Module READMEs** - Each module has detailed documentation
- **Development Sessions** - 38+ sessions of iterative improvement
- **Validation Script** - `php validate_mab_modules.php`

---

## Support

### Contact

**Mounir Abderrahmani**  
*Senior Full Stack Developer & Magento Certified Expert*

- 📧 **Email**: mounir.webdev@gmail.com
- 🌐 **Portfolio**: https://mounir1.github.io
- 💻 **GitHub**: https://github.com/mounirtms

### Support Channels

| Channel | Availability | Response Time |
|---------|--------------|---------------|
| Email | 24/7 | <24 hours |
| GitHub Issues | Community | Variable |
| Enterprise | Business hours | <1 hour |

---

## License

**MIT License** with professional support options

- **Free**: Development/testing
- **Single Site**: 1 production domain
- **Multi Site**: Up to 5 domains
- **Enterprise**: Unlimited domains + priority support

---

## Development History

Developed through **38+ intensive development sessions** on Beta Techno Stationery environment:

- **Sessions 1-10**: Core infrastructure
- **Sessions 11-20**: E-commerce features
- **Sessions 21-30**: Customer experience
- **Sessions 31-38**: Optimization and fixes

---

<div align="center">

## MAB Modules Suite

**Professional Magento 2 Extensions for the Algerian Market**

*Built with excellence by Mounir Abderrahmani*

[GitHub](https://github.com/mounirtms) | [Portfolio](https://mounir1.github.io) | [Email](mailto:mounir.webdev@gmail.com)

© 2026 Techno Stationery | MIT License

</div>

