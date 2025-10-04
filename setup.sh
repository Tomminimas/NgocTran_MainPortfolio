#!/bin/bash

echo "🚀 Setting up Ngoc Tran Portfolio..."

# Check if we can install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! Run the following to start development:"
    echo "   npm run dev"
    echo ""
    echo "🌐 Then open http://localhost:3000 in your browser"
else
    echo "❌ Installation failed due to npm cache permissions."
    echo ""
    echo "🔧 To fix this, run the following command:"
    echo "   sudo chown -R 501:20 /Users/tranvietmyngoc/.npm"
    echo ""
    echo "Then run this script again:"
    echo "   ./setup.sh"
fi










