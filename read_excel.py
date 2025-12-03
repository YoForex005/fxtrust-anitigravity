import pandas as pd
import json
import sys

file_path = r"C:\Users\ADMIN\Downloads\Active Accounts 12-3-2025 6-52-25 PM.xlsx"

try:
    # Read the excel file
    df = pd.read_excel(file_path)
    
    # Convert datetime objects to string format
    for col in df.columns:
        if pd.api.types.is_datetime64_any_dtype(df[col]):
            df[col] = df[col].dt.strftime('%m/%d/%Y %I:%M %p')
            
    # Replace NaN with empty string or dashes
    df = df.fillna('---')
    
    # Convert to list of dicts
    data = df.to_dict(orient='records')
    
    # Print as JSON
    print(json.dumps(data, indent=2))

except Exception as e:
    print(f"Error: {e}")
