
## How to run the application

 **Backend**
 - Navigate to the backend directory
 - Create a Conda environment (Make sure Anaconda/Miniconda is installed)
 - Install dependencies with `pip install -r requirements.txt
`
 - Run the backend with `python main.py`

**Frontend**

 - Navigate to the frontend directory
 - npm install
 - Run the frontend with `expo start` or `expo start -c`
 - You should see a line in terminal with Metro waiting on exp://xxx.xxx.x.x:19000
 - Create a `.env` file and copy the contents from `env.txt`
 - Replace the SERVER_IP value with xxx.xxx.x.x      
 - Download the Expo Go application to start the application on your device.

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