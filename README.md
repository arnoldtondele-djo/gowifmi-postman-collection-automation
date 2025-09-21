# 🚀 Gowifmi Postman Collection Automation

🚀 **Automated API testing and performance monitoring for Gowifmi platform**

## 📋 Overview

This repository contains automated API tests and performance monitoring for the Gowifmi API using Postman collections, Newman CLI, and GitHub Actions.

## 🎯 Features

- ✅ **Automated API Testing** - Runs on every commit and PR
- 📊 **Performance Monitoring** - Scheduled performance tests
- 📈 **Detailed Reports** - HTML reports with metrics and trends
- 🔔 **Slack Notifications** - Real-time alerts for failures
- 🌍 **Multi-Environment** - Production, Staging, Development
- 📱 **CI/CD Integration** - Seamless GitHub Actions workflow

## 🏗️ Repository Structure

```
├── .github/workflows/     # GitHub Actions workflows
├── postman/              # Postman collections and environments
├── scripts/              # Automation scripts
├── reports/              # Generated test reports
└── docs/                 # Documentation
```

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/your-username/gowifmi-postman-collection-automation.git
cd gowifmi-postman-collection-automation
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
# Copy environment template
cp postman/environments/development.template.json postman/environments/development.json

# Edit with your API credentials
nano postman/environments/development.json
```

### 4. Run tests locally
```bash
# Run functional tests
npm run test:functional

# Run performance tests  
npm run test:performance

# Generate reports
npm run report:generate
```

## 🔧 Configuration

### GitHub Secrets
Add these secrets in your repository settings:

- `GOWIFMI_API_KEY` - API authentication key
- `GOWIFMI_BASE_URL` - Base URL for API endpoints
- `SLACK_WEBHOOK_URL` - Slack notifications (optional)

### Environment Files
- `development.json` - Local development environment
- `staging.json` - Staging environment  
- `production.json` - Production environment

## 📊 Automated Workflows

### 🔄 Continuous Testing
- **Trigger**: Push to main/develop branches
- **Frequency**: On every commit
- **Tests**: Full API test suite

### ⏰ Scheduled Monitoring  
- **Trigger**: Cron schedule (daily at 8 AM UTC)
- **Frequency**: Daily
- **Tests**: Health checks and performance monitoring

### 🚀 Performance Testing
- **Trigger**: Weekly (Sundays at 10 PM UTC)
- **Frequency**: Weekly  
- **Tests**: Load testing with 100+ virtual users

## 📈 Performance Metrics

Current performance targets:
- **Response Time**: < 200ms (95th percentile)
- **Availability**: > 99.9%
- **Error Rate**: < 0.1%

## 📚 Documentation

- [API Testing Guide](docs/API-TESTING-GUIDE.md)
- [Performance Monitoring](docs/PERFORMANCE-MONITORING.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add/modify tests as needed
4. Ensure all tests pass
5. Submit a pull request

## 📞 Support

For issues and questions:
- 📧 **Email**: support@gowifmi.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/your-username/gowifmi-postman-collection-automation/issues)
- 📖 **Wiki**: [Project Wiki](https://github.com/your-username/gowifmi-postman-collection-automation/wiki)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Last Updated**: September 2025 | **Maintained by**: Gowifmi Development Team
