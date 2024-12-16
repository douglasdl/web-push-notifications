# Web Push Notifications
Sample Web Push Notifications

Create the server directory:
```sh
mkdir server
```

Create the "package.json" file:
```sh
npm init -y
```

Install the dependencies:
```sh
npm i express cors web-push dotenv
```

Generate the private and publick VAPID (Voluntary Application Server Identification) keys:
```sh
npx web-push generate-vapid-keys
```

Start the project:
```sh
npm run dev
```
