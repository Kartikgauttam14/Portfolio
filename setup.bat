@echo off
REM Kartik Gauttam - Portfolio Website Setup Script for Windows

echo.
echo ========================================
echo  Portfolio Website Setup (Windows)
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo Error: Node.js is not installed or not in PATH.
    echo Please install Node.js 18+ from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js version:
node --version

echo npm version:
npm --version

echo.

REM Check if package.json exists
if not exist "package.json" (
    echo Error: package.json not found. Please run this script from the project root.
    pause
    exit /b 1
)

echo Installing dependencies...
echo.

npm install

if errorlevel 1 (
    echo.
    echo Error: Failed to install dependencies.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next Steps:
echo -----------
echo 1. Run development server:
echo    npm run dev
echo.
echo 2. Open your browser:
echo    http://localhost:3000
echo.
echo 3. Build for production:
echo    npm run build
echo.
echo 4. Start production server:
echo    npm run start
echo.
echo Documentation:
echo ---------------
echo - README.md for overview
echo - SETUP_GUIDE.md for detailed setup
echo - PORTFOLIO_SUMMARY.md for summary
echo.
pause
