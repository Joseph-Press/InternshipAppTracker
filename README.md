# InternshipAppTracker

## Overview

This script automates the process of tracking and counting specific colored cells in a Google Sheet. 

Whenever a change is made to specified sheet tabs, the script counts the cells with certain background colors in column D and updates the count in specific cells in column B. This can be useful for visually tracking application statuses or other categorized data based on cell colors. 

The tracker also calculates the statistics for your apps (you get interviews in 2% of your apps, etc) with the checkboxes.

## How It Works

### `onEdit` Trigger
The `onEdit(e)` function is triggered whenever the sheet is edited. It checks if the edited sheet matches one of the specified sheet names. If so, the `colorFinder` function is invoked, passing the name of the active sheet.

### `colorFinder` Function
1. **Accessing the Target Sheet**:  
   The script opens the target sheet using its `sheetId` and the active `sheetName` where the edit occurred. It retrieves the background colors from column D starting from row 10.

2. **Color Counting**:  
   It counts occurrences of the following background colors in column D:
   - **Light Red** (#ea9999)
   - **Light Cornflower Blue** (#a4c2f4)
   - **Light Green** (#b6d7a8)
   - **Light Yellow** (#ffe599)
   - **Black** (#000000)

3. **Updating Counts**:  
   The script updates the following cells in column B of the sheet:
   - **B3**: Light Red count
   - **B4**: Light Yellow count
   - **B5**: Light Cornflower Blue count
   - **B6**: Light Green count
   - **B7**: Black count

## Setup Instructions

### 1. Copy the Example Sheet
   - Make a copy of the Google Sheet template.

   [Link To Example Sheet](https://docs.google.com/spreadsheets/d/1Pgh8kwB6fY_76fJWtJ7LlRSHWdzOqgtlaq5N8JJRcSI/edit?gid=1972607511#gid=1972607511)

### 2. Prepare the Sheet
   - Remove any existing data from the tables.
   - Leave some blank checkboxes or data points for easy reference and copying.

### 3. Configure the Script
   - Go to **Extensions** > **Apps Script** in your Google Sheet.
   - Modify the `sheetId` in the script to match the ID of your Google Sheet.
      - For example, for `https://docs.google.com/spreadsheets/d/14TyVMZdfg3M7lreK5png6sl1Wf_WuxKAZDDg-oBtGZ/edit?`, you would use `14TyVMZdfg3M7lreK5png6sl1Wf_WuxKAZDDg-oBtGZ`.

#### 3.5 Run
- After changing the sheet ID and configuring the sheet names (if needed), press run and review permissions.
- You'll go through a Google OAuth process to connect your Gmail to your sheet:
  - Select your Gmail account.
  - Press "Advanced" and choose "Go to Internship Application Counter GitHub (unsafe)".
  - Click "Allow." Since you're the owner of the Apps Script instance, it is safe to proceed.
  - You might get a `TypeError: Cannot read properties of undefined (reading 'source')` error, which is expected because the script works passively on edits.

### 4. Set Up Triggers
   - In the Apps Script Editor, click on **Triggers (the timer icon)** > **Add Trigger**.
   - Set the following trigger:
     - Function: `onEdit`
     - Deployment: `Head`
     - Event Type: `From spreadsheet`, `On edit`
   - Optionally, configure failure notifications (e.g., immediate or daily) to monitor the script's performance.

### 5. Enable Chrome V8 Runtime
   - Go to **Project Settings** in Apps Script and ensure the **Chrome V8 runtime** is enabled for improved performance and compatibility.

## Usage Tips

- **Sheet Names**: The script only works on sheets with specific names (e.g., "Fall 2024", "Summer 2025"). Ensure the names match or modify the script to suit your needs. To add more sheets, simply add the new sheet names to the condition in the script.
- **Customizing Colors**: You can adjust the script to track different colors by modifying the color codes in the `colorFinder` function.
- Raise an issue if something isn't working, and I'll try to help! 

## Future Improvements
- Explore using Google Smart Chips for tracking instead of color-based identification. This could potentially remove the need for Apps Scripts and streamline the process, bc the introduction of smart chips after the initial script was developed.

## License

This project is licensed under the MIT License.
