export const renderEmployeeCard = (employee) => {
  let employeeCard = document.createElement("div");
  employeeCard.innerHTML = `
      <div class="employee-image">
          <img src="${employee.imageUrl}" alt="" />
             </div>
        <p id="emp${employee.id}">${employee.firstName} ${employee.lastName}</p>
        <p>${employee.company}</p>`;
  employeeCard.clssName = "employee-card";
  return employeeCard;
};
