# 👥 Random Users UI - Web Dev Cohort 2026

A modern user profile web application built using HTML, CSS, and JavaScript that fetches data from the **Random Users API**.

This project demonstrates API integration, dynamic user rendering, and responsive UI development using vanilla JavaScript.

---

## 🎯 Project Overview

**Timeline:**
- **Start:** May 2, 2026 (8:00 PM)
- **Due:** May 10, 2026 (11:59 PM)

### Objective
Build a React-based user interface using the Random Users API that fetches and displays user information in a structured, clean layout.

---

## 🚀 Features

- 👤 Fetch user profiles dynamically from API
- 🖼️ Display user photos, names, contact info, and location
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast and lightweight vanilla JavaScript
- 🎨 Beautiful card-based UI with hover effects
- 📊 Summary statistics (users loaded, nationalities, genders)
- 🔄 Load more users functionality
- ♿ Accessible HTML with proper semantic elements

---

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid & Flexbox
- **JavaScript (Vanilla)** - DOM manipulation & API integration
- **REST API** - Random Users API

---

## 📂 Project Structure

```bash
free-api-product/
│
├── index.html       # HTML structure
├── styles.css       # CSS styling & responsive design
├── script.js        # JavaScript logic & API handling
└── README.md        # Documentation
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository:
```bash
git clone https://github.com/Vishal33bisht/free-api-product.git
```

### 2. Navigate to the project directory:
```bash
cd free-api-product
```

### 3. Open the project in your browser:
```bash
open index.html
```

Or simply double-click `index.html` to open it in your default browser.

---

## 📡 API Integration

### API Endpoint
```
https://api.freeapi.app/api/v1/public/randomusers
```

### Expected Response Structure
```json
{
  "statusCode": 200,
  "data": {
    "data": [
      {
        "gender": "female",
        "name": {
          "title": "Ms",
          "first": "Jane",
          "last": "Doe"
        },
        "location": {
          "street": "123 Main St",
          "city": "Springfield",
          "country": "United States"
        },
        "email": "jane.doe@example.com",
        "phone": "+1 234 567 8900",
        "cell": "+1 234 567 8901",
        "login": {
          "username": "janedoe123"
        },
        "dob": {
          "date": "1990-01-15",
          "age": 34
        },
        "picture": {
          "large": "https://...",
          "medium": "https://...",
          "thumbnail": "https://..."
        },
        "nat": "US"
      }
    ]
  }
}
```

---

## 🔥 Usage

1. **Open the application** - The app automatically loads user profiles on page load
2. **Browse users** - Scroll through the user cards to see profiles
3. **View details** - Each card displays:
   - Profile photo
   - Name and username
   - Age and location
   - Contact information (email, phone, cell)
   - Nationality
4. **Load more** - Click "Load More Users" button to fetch new profiles
5. **Contact** - Click on email or phone links to contact users

---

## 📋 Data Fields Displayed

Each user card shows:
- 🖼️ **Avatar** - Profile picture
- 👤 **Name** - First and last name
- 📝 **Username** - Login username
- 🎂 **Age** - User's age
- 📍 **Location** - City and country
- 📧 **Email** - Email address (clickable)
- 📞 **Phone** - Landline number (clickable)
- 📱 **Cell** - Mobile number (clickable)
- 🌍 **Nationality** - Country code

---

## 🎨 Design Features

- **Gradient Headers** - Beautiful gradient backgrounds for each profile
- **Hover Effects** - Smooth animations and elevation on hover
- **Responsive Grid** - Adapts from 1 column on mobile to 3+ columns on desktop
- **Gender Badges** - Color-coded badges (blue for male, pink for female)
- **Clean Typography** - Inter font family for modern appearance
- **Accessible Links** - Email and phone links for easy contact

---

## 📚 What You'll Learn

This project helps you practice:
- ✅ **Fetch API** - Making HTTP requests
- ✅ **Async JavaScript** - Handling promises and async/await
- ✅ **DOM Manipulation** - Dynamic HTML generation
- ✅ **CSS Grid & Flexbox** - Modern layout techniques
- ✅ **Responsive Web Design** - Mobile-first design principles
- ✅ **Error Handling** - Managing API failures gracefully
- ✅ **Semantic HTML** - Proper HTML structure
- ✅ **Frontend Architecture** - Organizing JavaScript code

---

## 🐛 Troubleshooting

### Users not loading?
- Check your internet connection
- Verify the API endpoint is accessible
- Open browser DevTools (F12) and check the Console tab for errors

### Styling looks off?
- Clear browser cache (Ctrl+Shift+Delete)
- Try a different browser
- Ensure CSS file is in the same directory

### Images not showing?
- Images come from the API - if they don't load, it's an API issue
- Check the browser console for CORS errors

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes
4. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
5. Push to the branch:
   ```bash
   git push origin feature-name
   ```
6. Create a Pull Request

---

## 💡 Enhancement Ideas

- Add filtering by gender or nationality
- Implement search functionality
- Add pagination for better performance
- Create a modal view for full user details
- Add theme switcher (dark mode)
- Export user data to CSV
- Add animation on page load

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Vishal Bisht**
- GitHub: https://github.com/Vishal33bisht

---

## ⭐ Support

If you find this project helpful, please give it a star on GitHub! ⭐

---

**Happy Coding!** 🚀
