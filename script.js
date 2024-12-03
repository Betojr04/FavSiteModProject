const validate_contact_form = (name, email, message) => {
  if (!name || !email || !message) {
    return "All fields required!";
  }

  if (!email.includes("@") || !email.includes(".")) {
    return "Please enter a valid email address";
  }

  return "Form Submitted Successfully";
};

const services = [
  { name: "Algorithmic Trading", price: 500 },
  { name: "Workflow Automation", price: 400 },
  { name: "Market Analytics", price: 300 }
];

const calculateTotalCost = (selectedServices) => {
  return selectedServices.reduce((total, service) => total + service.price, 0);
};

const testimonials = [
  "Quantitative Brokers transformed our trading strategies.",
  "Their algorithms saved us time and money.",
  "Exceptional service and advanced tools.",
  "The best decision we made for our workflow efficiency!"
];

const getRandomTestimnonial = () => {
  const randomIndex = Math.floor(Math.random() * testimonials.length);
  return testimonials[randomIndex];
};
