#!/bin/bash

echo "🚀 Kartik Gauttam - Portfolio Website Setup"
echo "==========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Check if we're in the correct directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Please run this script from the project root."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies."
    exit 1
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "==========="
echo "1. Run development server:  npm run dev"
echo "2. Build for production:    npm run build"
echo "3. Start production server: npm run start"
echo ""
echo "📖 Documentation:"
echo "   - README.md for overview"
echo "   - SETUP_GUIDE.md for detailed setup"
echo "   - PORTFOLIO_SUMMARY.md for summary"
echo ""
echo "🌐 Open http://localhost:3000 in your browser"
echo ""
