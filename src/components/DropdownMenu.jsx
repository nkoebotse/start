// Importing images
import todoIcon from '../assets/iconTodo.svg';
import calendarIcon from '../assets/iconcalendar.svg' ; // Check for capitalization
import reminderIcon from '../assets/iconReminders.svg'; // Corrected name or path
import planningIcon from '../assets/iconPlanning.svg';

const FeatureDropdownMenu = () => {
  const featureDropdownItems = [
    { name: "Todo List", img: todoIcon },
    { name: "Calendar", img: calendarIcon },
    { name: "Reminder", img: reminderIcon },
    { name: "Planning", img: planningIcon },
  ];

  return (
    <div className="dropdown__dropdown-menu">
      <ul>
        {featureDropdownItems.map((x, index) => {
          return (
            <li key={index}>
              <img src={x.img} alt={x.name} />
              <a href="#">{x.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const CompanyDropdownMenu = () => {
  const companyDropdownItems = [
    { name: "History" },
    { name: "Our Team" },
    { name: "Blog" },
  ];

  return (
    <div className="dropdown__dropdown-menu">
      <ul>
        {companyDropdownItems.map((x, index) => {
          return (
            <li key={index}>
              <a href="#">{x.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { FeatureDropdownMenu, CompanyDropdownMenu };
