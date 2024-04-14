# Asgardeo htmx sample app

## How to run

1. Clone the repo
2. Install dependencies.

```bash
npm install
```

3. Generate self signed certificate in the project root.

```bash
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 3650 -nodes -subj "/C=XX/ST=StateName/L=CityName/O=CompanyName/OU=CompanySectionName/CN=CommonNameOrHostname"
```

4. Start the server.

```bash
npm run dev
```
