# Change to the target directory
Set-Location "C:\Users\jsvgo\PLTFRM\PLTFRM-Internal-Dashboard\src"

# Run the Uvicorn server
uvicorn server:app --reload --port 7010
