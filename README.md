# Hệ thống giả lập các cuộc tấn công mạng nhằm phục vụ công tác đào tạo tại Học viện Công nghệ Bưu chính Viễn thông

This project is initialized with [Hệ thống giả lập các cuộc tấn công mạng nhằm phục vụ công tác đào tạo tại Học viện Công nghệ Bưu chính Viễn thông](https://pro.ant.design). Follow is the quick guide for how to use.

## 1. Requirement( CPU, RAM, Memory, OS, Browser, ...)

- CPU: Intel Core i5 2.4GHz
- RAM: 4GB
- Memory: 10GB
- OS: Windows 10 64bit or Ubuntu 18.04 64bit
- Browser: Chrome, Firefox, Edge, Opera, Safari

## 2. Environment Prepare

### 2.1. Install nodejs in https://nodejs.org/en/download/ if you don't have it

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## 2.2. Provided Scripts

Hệ thống giả lập các cuộc tấn công mạng nhằm phục vụ công tác đào tạo tại Học viện Công nghệ Bưu chính Viễn thông provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Install typescript

```bash
npm install -g typescript
```

### Install yarn

```bash
npm install -g yarn
```

### Install dependencies

```bash
yarn
```

### Start project

```bash
yarn start
```

### Open browser

```bash
http://localhost:8000 or http://your_ip:8000
```

### Change ip address in `src/utils/ip.ts`

```bash
ip = 'http://your_ip:port'
```

### Build project

```bash
yarn build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).
