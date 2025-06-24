
# Web-Based Calculator using Node.js + C Executables

This project builds a simple frontend web calculator that:
- Takes two input numbers.
- Lets you choose **Avg**, **Max**, or **Min**
- Sends data to a Node.js backend
- Backend calls compiled **C programs** to compute the result
- Returns the output to the frontend via fetch()

## 📁 Project Structure

```
project-root/
├── docs/                    # Frontend files served via Express
│   ├── index.html           # Web UI with input form
│   ├── script.js            # Client-side JS for fetch() calls
│   └── style.css            # Simple CSS styling

├── render-backend/          # Backend files
│   ├── server.js            # Node.js Express backend server
│   ├── package.json
│   ├── package-lock.json
│   ├── avg                  # ✅ Compiled C program (binary)
│   ├── max                  # ✅ Compiled C program (binary)
│   └── min                  # ✅ Compiled C program (binary)

├── all-c-programs/          # Source code for C programs
│   ├── avg.c
│   ├── max.c
│   └── min.c

└── README.md                
```

## ⚙️ Setup Instructions

### 1. Clone or Download the Repo

```bash
git clone https://your-repo-url.git
cd project-root
```

### 2. Install Dependencies

```bash
cd render-backend
npm init -y
npm install express cors body-parser
sudo apt update
sudo apt install build-essential
```

### 3. ⚙️ Compile the C Programs

```bash
cd all-c-programs
gcc avg.c -o ../render-backend/avg
gcc max.c -o ../render-backend/max
gcc min.c -o ../render-backend/min
```

### 4. ▶️ Start the Server

```bash
cd render-backend
node server.js
```

You should see:

```
Server running on http://localhost:3000
```

### 5. 🌐 Open the Web

Open browser and go to:

```
http://localhost:3000
```

## 🧪 Test 

1. Enter two numbers in the form
2. Select **Avg**, **Max**, or **Min**
3. Click **Calculate**
4. See result appear instantly below the button

## 🐞 Troubleshooting

- **Network Error or `POST /calculate` not seen?**
  - Don’t open `index.html` directly.
  - You must visit via: `http://localhost:3000`

- **C Executable Error?**
  - Make sure you compiled the C files and binaries (`avg`, `min`, `max`) are present in `render-backend/`

- **Test API manually** with:
```bash
curl -X POST http://localhost:3000/calculate -H "Content-Type: application/json" -d '{"num1": "10", "num2": "5", "operation": "avg"}'
```

## 📌 Dependencies

- Node.js
- Express
- body-parser
- C Compiler (gcc)

## 💡 Author Notes

This is a minimal full-stack integration of:
- Web frontend
- Node.js backend
- Native C-based computation

## Deployment Guidelines:-

Same as this: ["web-implement1" main branch](https://github.com/upadhyayabha95/web-implement1.git)
