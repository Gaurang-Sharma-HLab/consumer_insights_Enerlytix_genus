# Consumer Insights Hub

A full-stack web application with .NET Core 8 backend and Angular 18 frontend.

## Project Structure

```
Consumer Insights Hub/
├── backend/              # .NET Core 8 Web API
│   ├── Controllers/      # API Controllers
│   ├── Program.cs        # Application entry point
│   └── *.csproj         # Project file
└── frontend/            # Angular 18 Application
    ├── src/
    │   └── app/         # Angular components and services
    └── package.json     # Node.js dependencies
```

## Prerequisites

Before running this application, you need to install the following:

### 1. .NET Core 8 SDK

**For Windows 11:**

1. Download the .NET 8 SDK from: https://dotnet.microsoft.com/download/dotnet/8.0
2. Run the installer and follow the installation wizard
3. Verify installation by opening PowerShell and running:
   ```powershell
   dotnet --version
   ```
   You should see version `8.0.x` or higher.

**Alternative: Using Chocolatey (if installed)**
```powershell
choco install dotnet-8.0-sdk
```

### 2. Node.js and npm

Node.js is already installed on your system (v24.11.0).

**Verify installation:**
```powershell
node --version
npm --version
```

### 3. Angular CLI

Angular CLI has been installed globally. If you need to reinstall:
```powershell
npm install -g @angular/cli@18
```

**Verify installation:**
```powershell
ng version
```

## Setup Instructions

### Backend Setup (.NET Core 8)

1. Navigate to the backend directory:
   ```powershell
   cd backend
   ```

2. Restore NuGet packages:
   ```powershell
   dotnet restore
   ```

3. Build the project:
   ```powershell
   dotnet build
   ```

### Frontend Setup (Angular 18)

1. Navigate to the frontend directory:
   ```powershell
   cd frontend
   ```

2. Install dependencies (if not already installed):
   ```powershell
   npm install
   ```

## Running the Application

### Option 1: Run Both Services Separately (Recommended for Development)

**Terminal 1 - Backend:**
```powershell
cd backend
dotnet run
```
The backend will be available at:
- HTTP: http://localhost:5000
- HTTPS: https://localhost:5001
- Swagger UI: http://localhost:5000/swagger

**Terminal 2 - Frontend:**
```powershell
cd frontend
ng serve
```
The frontend will be available at:
- http://localhost:4200

### Option 2: Run Backend with Specific Port

If you need to run the backend on a specific port:
```powershell
cd backend
dotnet run --urls "http://localhost:5000"
```

## Testing the Application

1. Start the backend server (Terminal 1)
2. Start the frontend server (Terminal 2)
3. Open your browser and navigate to: http://localhost:4200
4. You should see the Consumer Insights Hub homepage
5. Click the "Refresh" button to load weather forecast data from the backend API

## API Endpoints

### Weather Forecast
- **GET** `/api/weatherforecast`
- Returns a list of weather forecasts

You can test the API directly using:
- Swagger UI: http://localhost:5000/swagger
- Browser: http://localhost:5000/api/weatherforecast
- Postman or any HTTP client

## Troubleshooting

### Backend Issues

**Problem: `dotnet` command not found**
- Solution: Install .NET Core 8 SDK (see Prerequisites section)
- After installation, restart your terminal/PowerShell

**Problem: Port 5000 already in use**
- Solution: Change the port in `backend/Properties/launchSettings.json` or use:
  ```powershell
  dotnet run --urls "http://localhost:5001"
  ```
- Update the API URL in `frontend/src/app/services/api.service.ts` accordingly

**Problem: CORS errors**
- Solution: The backend is already configured for CORS. Make sure:
  - Backend is running on http://localhost:5000
  - Frontend is running on http://localhost:4200
  - The CORS policy in `backend/Program.cs` matches your frontend URL

### Frontend Issues

**Problem: `ng` command not found**
- Solution: Install Angular CLI globally:
  ```powershell
  npm install -g @angular/cli@18
  ```

**Problem: Cannot connect to backend API**
- Solution: 
  1. Verify backend is running on http://localhost:5000
  2. Check browser console for CORS errors
  3. Verify the API URL in `frontend/src/app/services/api.service.ts`

**Problem: npm install fails**
- Solution: Clear npm cache and try again:
  ```powershell
  npm cache clean --force
  npm install
  ```

## Development Tips

1. **Hot Reload**: Both Angular and .NET Core support hot reload during development
2. **Swagger UI**: Use Swagger UI (http://localhost:5000/swagger) to test API endpoints
3. **Browser DevTools**: Use browser developer tools (F12) to debug frontend issues
4. **Logs**: Check terminal output for both backend and frontend logs

## Next Steps

- Add authentication and authorization
- Implement database connectivity
- Add more API endpoints
- Create additional Angular components
- Set up unit and integration tests
- Configure CI/CD pipeline

## Technologies Used

- **Backend**: .NET Core 8, ASP.NET Core Web API
- **Frontend**: Angular 18, TypeScript, RxJS
- **API Documentation**: Swagger/OpenAPI

## License

This project is for development purposes.


