# Quick Setup Guide for .NET Core 8 on Windows 11

## Step-by-Step Installation

### Method 1: Direct Download (Recommended)

1. **Download .NET 8 SDK**
   - Visit: https://dotnet.microsoft.com/download/dotnet/8.0
   - Click on "Download .NET SDK x64" (or the appropriate version for your system)
   - The file will be named something like `dotnet-sdk-8.0.xxx-win-x64.exe`

2. **Run the Installer**
   - Double-click the downloaded `.exe` file
   - Follow the installation wizard
   - Accept the license agreement
   - Choose installation location (default is fine)
   - Click "Install"

3. **Verify Installation**
   - Open a **new** PowerShell window (important: close and reopen to refresh PATH)
   - Run:
     ```powershell
     dotnet --version
     ```
   - You should see: `8.0.x` (where x is the patch version)

### Method 2: Using Chocolatey (If you have Chocolatey installed)

1. Open PowerShell as Administrator
2. Run:
   ```powershell
   choco install dotnet-8.0-sdk
   ```
3. Verify installation:
   ```powershell
   dotnet --version
   ```

### Method 3: Using winget (Windows Package Manager)

1. Open PowerShell
2. Run:
   ```powershell
   winget install Microsoft.DotNet.SDK.8
   ```
3. Verify installation:
   ```powershell
   dotnet --version
   ```

## Troubleshooting Installation

### Issue: "dotnet" command not recognized after installation

**Solution:**
1. Close all PowerShell/Command Prompt windows
2. Open a new PowerShell window
3. If still not working, manually add to PATH:
   - Press `Win + X` and select "System"
   - Click "Advanced system settings"
   - Click "Environment Variables"
   - Under "System variables", find "Path" and click "Edit"
   - Add: `C:\Program Files\dotnet` (or your installation path)
   - Click OK on all dialogs
   - Restart PowerShell

### Issue: Wrong version installed

**Solution:**
- Check installed versions:
  ```powershell
  dotnet --list-sdks
  ```
- If you see multiple versions, .NET will use the latest by default
- To use a specific version, you can specify it in your project file

## Verify Your Installation

Run these commands to verify everything is set up correctly:

```powershell
# Check .NET version
dotnet --version

# Check installed SDKs
dotnet --list-sdks

# Check installed runtimes
dotnet --list-runtimes

# Try creating a test project
dotnet new webapi -n TestProject
cd TestProject
dotnet run
```

If all commands work without errors, you're ready to go!

## Next Steps

Once .NET Core 8 is installed:

1. Navigate to the `backend` folder
2. Run `dotnet restore` to restore packages
3. Run `dotnet build` to build the project
4. Run `dotnet run` to start the backend server

For more details, see the main [README.md](README.md) file.


