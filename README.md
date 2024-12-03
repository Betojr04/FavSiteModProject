# Quantitative Brokers Clone

## Project Overview
This project is a responsive website inspired by the official [Quantitative Brokers](https://www.quantitativebrokers.com/) website. The goal was to emulate the clean, professional aesthetic of the original site while demonstrating the use of Bootstrap components and JavaScript for dynamic functionality.

The website includes a fully responsive navigation bar, a hero section with a video background, service cards, a pricing table, and a contact form. Although the JavaScript functions are not yet integrated into the site, they simulate potential future interactive features.

---

## Use of Bootstrap Components
Bootstrap was utilized extensively to ensure responsiveness and a polished layout:

1. **Navigation Bar**:
   - A responsive navbar was created using `navbar-expand-lg`, ensuring it collapses on smaller screens.
   - Custom styling was added to align with the Quantitative Brokers theme.

2. **Cards**:
   - Service cards were implemented to display key solutions offered (e.g., Algorithmic Trading, Workflow Automation).
   - Cards include images, titles, and descriptive text.

3. **Carousel**:
   - A rotating testimonial carousel was included to showcase client feedback.

4. **Accordion**:
   - An FAQ accordion was added for dynamic content display, allowing users to view or hide information.

5. **Table**:
   - A pricing table was included to display services and their costs, styled with `table` and `table-bordered`.

---

## JavaScript Functions
Below are the JavaScript functions included in the project. These functions are currently written in a separate `.js` file and simulate features that may be added in the future.

### 1. **`validateContactForm`**
- **Description**: Validates the contact form fields to ensure all required fields are filled and the email format is correct.
- **Purpose**: Ensures users submit valid information in the form.
- **Integration**: This function can be linked to the form's `onsubmit` event to provide real-time validation feedback.

### 2. **`calculateTotalCost`**
- **Description**: Calculates the total cost of selected services from a predefined list.
- **Purpose**: Provides users with a quick estimate when selecting multiple services.
- **Integration**: This function can be used in a pricing calculator feature or a service selection form.

### 3. **`getRandomTestimonial`**
- **Description**: Returns a random testimonial from a predefined array.
- **Purpose**: Simulates dynamic updates to the testimonial section on the homepage.
- **Integration**: This function could power a dynamic carousel or periodically update the testimonial content.

---

## Future Plans
The following features may be implemented in future iterations:
- **Dynamic Integration**: JavaScript functions will be directly tied to the website to enable interactivity.
- **Database Connection**: The contact form and feedback system will store data in a database for persistence.
- **Improved Animations**: Add smooth transitions for dynamic elements like the carousel and accordion.

---

## Technologies Used
- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **JavaScript**

---

## Author
This project was built as part of a web development exercise, demonstrating proficiency in Bootstrap, responsive design, and JavaScript.

