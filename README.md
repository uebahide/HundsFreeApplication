
## How to run the application

 **Backend**
 - Navigate to the backend directory
 - Create a Conda environment (Make sure Anaconda/Miniconda is installed)
 - Check if your Python version is 3.7, 3.8, or 3.9. Otherwise, it doesn't work well.
 - Install dependencies with `pip install -r requirements.txt
`
 - Run the backend with `python main.py`
 - You see a line in the terminal with Running on http://x.x.x.x:yyyy.
 - x.x.x.x is the server IP address. It should be input into profile of the frontend application
 - yyyy is the server port number. It should be input into profile of the frontend application

**Frontend**

 - Navigate to the frontend directory
 - npm install
 - Run the frontend with `npx expo start`
 - You should see a line in the terminal with Metro waiting on exp://xxx.xxx.x.x:19000
 - Download the Expo Go application to start the application on your device.
 - Read QR code with Expo Go applicatioin.
 - In the start screen, click profile.
 - Please input the server IP address.
 - Please input the serve port number.

## Following information is just memos.

**Developer fix memo**
-frontend: SERVER_IP should be server ip, not expo uri
-frontend: Create a types folder in your source folder.
-frontend: Create a file named env.d.ts in the types folder.
-frontend: Define your env variables in env.d.ts as strings.
declare module '@env' {
  export const SERVER_IP: string;
  export const SERVER_PORT: string;
}
-backend: add sentencepiece==0.2.0 to requirements.txt
-backend: add data folder in the root directory
