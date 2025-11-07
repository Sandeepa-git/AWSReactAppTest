```markdown
# Deploy React + Express App to AWS EC2

This guide walks you through deploying a full-stack React (Vite) + Express application to an **AWS EC2 instance (Amazon Linux)**. The app will be served via Node.js, made publicly accessible, and optionally kept alive with **PM2** and exposed on port 80 using **Nginx** as a reverse proxy.

---

## Prerequisites

- AWS account with an EC2 instance (Amazon Linux 2/2023 recommended)
- Key pair (`.pem`) for SSH access
- Local project with:
  - `server.js`
  - `package.json`
  - `dist/` folder (Vite build output)

---

## 1️⃣ Upload Project Files to EC2

Ensure your entire project is uploaded to the EC2 instance:

```bash
scp -i your-key.pem -r ./your-app-folder ec2-user@your-ec2-ip:/home/ec2-user/
```

**Required files:**
- `server.js`
- `package.json`
- `package-lock.json`
- `dist/` (built React assets)

> **Missing `dist/`?** Build locally first:
> ```bash
> npm install
> npm run build
> ```

---

## 2️⃣ Install Node.js & Dependencies

SSH into your EC2 instance:

```bash
ssh -i your-key.pem ec2-user@your-ec2-ip
```

Navigate to your app directory:

```bash
cd /home/ec2-user/your-app-folder
```

Install dependencies:

```bash
npm install
```

---

## 3️⃣ Start the Server

Run your Express server:

```bash
npm start
```

> By default, Express serves the React app on **PORT 3000**.

Test locally on the EC2 instance:

```bash
curl http://localhost:3000
```

You should see the HTML content from `dist/index.html`.

---

## 4️⃣ Make It Publicly Accessible

EC2 blocks all ports except SSH by default.

### Update Security Group

1. Go to your EC2 instance → **Security** → **Security groups**
2. Edit **Inbound rules**
3. Add rule:
   - **Type**: Custom TCP
   - **Port range**: `3000`
   - **Source**: `0.0.0.0/0` (or your IP for testing)

### Access in Browser

```
http://<your-ec2-public-ip>:3000
```

---

## 5️⃣ Optional: Keep App Running with PM2

Prevent the app from stopping when SSH closes.

```bash
npm install -g pm2
pm2 start server.js --name "react-app"
pm2 startup
pm2 save
```

**Useful PM2 commands:**

```bash
pm2 status          # Check status
pm2 restart react-app
pm2 stop react-app
pm2 logs react-app  # View logs
```

---

## 6️⃣ Optional: Use Nginx as Reverse Proxy (Port 80)

Expose your app on standard HTTP port (`80`) — no `:3000` needed.

### Install & Start Nginx

```bash
sudo yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Configure Nginx

Edit the config:

```bash
sudo nano /etc/nginx/nginx.conf
```

Replace or add inside `http {}` block:

```nginx
server {
    listen 80;
    server_name your-ec2-public-ip;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Open Port 80 in Security Group

Add inbound rule:
- **Type**: HTTP
- **Port**: 80
- **Source**: 0.0.0.0/0

### Restart Nginx

```bash
sudo systemctl restart nginx
```

---

## Final Access

```
http://<your-ec2-public-ip>
```

Your React app is now live on port 80! 🚀

---

## Troubleshooting Tips

| Issue | Solution |
|------|----------|
| `curl: (7) Failed to connect` | Check Security Group, port, and if server is running |
| Blank page in browser | Check browser console; ensure `dist/` is served correctly |
| Nginx 502 Bad Gateway | Ensure Node.js app is running on `localhost:3000` |
| Permission denied | Use `sudo` for system commands |

---

## Security Recommendations

- Restrict Security Group source to your IP (not `0.0.0.0/0`)
- Set up HTTPS with **Let's Encrypt** (Certbot)
- Use a domain name instead of public IP
- Disable root login & password SSH

---

**Done!** Your full-stack app is deployed and production-ready.
