# Easy Editing Guide for Your Portfolio

This guide will help you customize your portfolio without needing to know much about coding!

## 🎯 Quick Start: What You Need

1. **Text Editor** - Use one of these (all free):
   - **VS Code** (Recommended) - Download from https://code.visualstudio.com/
   - Notepad++ - Simple and lightweight
   - Even Windows Notepad works!

2. **Browser** - Chrome, Firefox, or Edge to preview changes

## 📝 How to Edit Content

### Step 1: Open the File
1. Right-click `index.html`
2. Choose "Open with" → Your text editor (VS Code recommended)

### Step 2: Find What to Edit
Use **Ctrl+F** (Find) to search for text you want to change!

---

## 🔧 Common Edits

### 1️⃣ Change Your Name and Title

**Search for:** `CHAITHU`

**Replace with:** Your actual name

**Search for:** `Data Analyst`

**Replace with:** Your job title

**Lines to edit:** 54-55 in index.html

```html
<h1 class="home-title">Your Name Here</h1>
<p class="home-subtitle">Your Job Title</p>
```

---

### 2️⃣ Update Your Bio (About Me Section)

**Search for:** `I am a passionate data analyst`

**Replace the entire paragraph** with your own bio

**Lines to edit:** 78-87 in index.html

```html
<p class="about-description">
    Write your own bio here. Talk about your background,
    what you're passionate about, and what makes you unique.
</p>
```

---

### 3️⃣ Update Statistics

**Search for:** `10+` or `5+` or `100%`

**Lines to edit:** 90-102 in index.html

```html
<span class="stat-number">10+</span>
<span class="stat-label">Projects</span>
```

Change the numbers and labels to match your achievements!

---

### 4️⃣ Edit Skills

**Search for:** `Data Analysis` or `Python` or `SQL`

**Lines to edit:** 115-166 in index.html

Each skill card looks like this:
```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fas fa-chart-line"></i>
    </div>
    <h3 class="skill-name">Your Skill Name</h3>
    <p class="skill-description">Description of your skill</p>
</div>
```

**To add more skills:** Copy an entire `<div class="skill-card">...</div>` block and paste it below the others.

---

### 5️⃣ Update Education & Experience

**Search for:** `Bachelor of Science` or `Data Analyst`

**Lines to edit:** 179-228 in index.html

Each timeline item looks like this:
```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h4 class="timeline-title">Your Degree/Job Title</h4>
        <p class="timeline-organization">University/Company Name</p>
        <p class="timeline-date">2019 - 2023</p>
        <p class="timeline-description">
            Description of what you learned or accomplished
        </p>
    </div>
</div>
```

---

### 6️⃣ Update Projects

**Search for:** `Sales Analytics Dashboard`

**Lines to edit:** 241-343 in index.html

Each project card looks like this:
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-chart-pie"></i>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">
            Describe what the project does and your achievements
        </p>
        <div class="project-tags">
            <span class="tag">Tool 1</span>
            <span class="tag">Tool 2</span>
            <span class="tag">Tool 3</span>
        </div>
    </div>
</div>
```

**To add more projects:** Copy an entire project card block and paste it.

---

### 7️⃣ Update Contact Information

**Search for:** `your.email@example.com`

**Lines to edit:** 361-379 in index.html

```html
<p>your.email@example.com</p>  <!-- Change this -->
<p>+1 (123) 456-7890</p>        <!-- Change this -->
<p>Your City, Country</p>        <!-- Change this -->
```

---

### 8️⃣ Update Social Media Links

**Search for:** `href="#"`

**Lines to edit:** 386-401 in index.html

Replace `#` with your actual social media URLs:
```html
<a href="https://linkedin.com/in/yourprofile" class="social-link">
    <i class="fab fa-linkedin"></i>
</a>
<a href="https://github.com/yourusername" class="social-link">
    <i class="fab fa-github"></i>
</a>
```

---

## 🖼️ How to Add Your Photos

### Replace Profile Image

1. Save your photo in the `portfolio-clone` folder
2. Name it something simple like `profile.jpg`
3. **Search for:** `<i class="fas fa-user-circle"></i>` (line 51)
4. **Replace with:**
   ```html
   <img src="profile.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
   ```

### Add Project Images

1. Save project images in the `portfolio-clone` folder
2. **Search for:** `<i class="fas fa-chart-pie"></i>` (in project cards)
3. **Replace with:**
   ```html
   <img src="project1.jpg" alt="Project Name" style="width: 100%; height: 100%; object-fit: cover;">
   ```

---

## 🎨 Change Colors (Optional)

**File:** `style.css` (lines 2-15)

```css
:root {
    --accent-color: #00d9ff;      /* Change this color */
    --accent-purple: #a855f7;     /* Change this color */
}
```

Use a color picker tool: https://htmlcolorcodes.com/color-picker/

---

## 👀 Preview Your Changes

### Method 1: Using the Server (Already Running)
1. Save your changes in the text editor
2. Go to http://localhost:3000 in your browser
3. Press **Ctrl+F5** to refresh and see changes

### Method 2: Double-Click
1. Save your changes
2. Double-click `index.html` to open in browser
3. Refresh to see changes

---

## ✅ Checklist: What to Edit

- [ ] Name and title (Home section)
- [ ] Tagline/description
- [ ] About Me bio
- [ ] Statistics (projects, tools, etc.)
- [ ] Skills list
- [ ] Education timeline
- [ ] Work experience timeline
- [ ] Projects (at least 3-6 projects)
- [ ] Email address
- [ ] Phone number
- [ ] Location
- [ ] LinkedIn URL
- [ ] GitHub URL
- [ ] Other social media links
- [ ] Profile photo
- [ ] Project images (optional)

---

## 🚀 After Editing: Deploy Your Portfolio

Once you're happy with your edits, deploy it online! See `DEPLOYMENT_GUIDE.md` for instructions.

---

## 🆘 Common Issues

**Q: Changes don't show up?**
- Press **Ctrl+F5** to hard refresh the browser
- Make sure you saved the file

**Q: Page looks broken?**
- Check if you accidentally deleted a `>` or `</div>`
- Use Ctrl+Z to undo recent changes

**Q: Want to undo all changes?**
- I can regenerate the original files for you

---

## 💡 Pro Tips

1. **Make small changes** - Edit one thing at a time and preview
2. **Keep backups** - Copy the folder before making big changes
3. **Use VS Code** - It highlights HTML syntax and catches errors
4. **Search is your friend** - Use Ctrl+F to find what you need to edit

---

Need help? Just ask! 😊
