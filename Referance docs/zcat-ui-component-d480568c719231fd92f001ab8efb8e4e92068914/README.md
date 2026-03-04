# ZCAT UI Component  

ZCAT UI Component is a reusable **UI component library** built for use with the **Slyte framework**. It provides a set of customizable UI elements to enhance your application's user experience.  

## 📦 Installation  

To install the package, run the following command:  

```sh
npm i @zcatalyst/zcat-ui-component
```

## 🚀 Usage  

### 1️⃣ Import & Register the Addon in `app.js`  

```js
import { ZcatUiComponentAddon } from "@zoho/zcat-components/addon";

class TestApp extends Lyte {
    lookups() {
        return [ZcatUiComponentAddon];
    }
}
```

### 2️⃣ Register Components in `component.js`  

```js
addRegistries() {
    return [this.$app.$zcatUiComponentAddon.$component];
}
```

### 3️⃣ Include the Stylesheet  

To use `zcat-ui-components.css`, include the following CSS file in your project:  

```css
"/slyte/dist/node_modules/@zcatalyst/zcat-ui-component/dist/css/zcat-ui-components.css"
```

## 📚 Features  

- Built specifically for the **Slyte framework**  
- Provides reusable and customizable UI components  
- Lightweight and optimized for performance  
- Easy to integrate into existing projects  

## 📚 Documentation  

For detailed documentation and examples, please refer to the [official guide](https://catalyst-components-773793963.catalystserverless.com/) or check the source code in this repository.  

## 🛠️ Contributing  

We welcome contributions! If you'd like to contribute, follow these steps:  

1. Fork the repository  
2. Create a new branch: `git checkout -b feature-name`  
3. Commit your changes: `git commit -m "Add new feature"`  
4. Push to the branch: `git push origin feature-name`  
5. Open a Pull Request  

---
