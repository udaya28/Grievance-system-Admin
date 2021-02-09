const getFilteredComplaints = (allComplains, filters) => {
  console.log(filters);
  const {
    category,
    departmentName,
    gender,
    jointYear,
    month,
    searchString,
    status,
    year,
  } = filters;
  const filteredData = allComplains.filter(
    (data) =>
      filterCategory(data, category) &&
      filterStatus(data, status) &&
      filterDepartment(data, departmentName) &&
      filterJointYear(data, jointYear) &&
      filterGender(data, gender) &&
      filterYear(data, year) &&
      filterMonth(data, month) &&
      isSubString(data, searchString)
  );
  return filteredData;
};

const filterCategory = (data, category) =>
  category === 'all' || data.category === category;

const filterStatus = (data, status) =>
  status === 'all' || data.status === status;
export default getFilteredComplaints;

const filterDepartment = (data, departmentName) =>
  departmentName === 'all' || data.departmentName === departmentName;

const filterJointYear = (data, jointYear) =>
  jointYear === 'all' || data.jointYear == jointYear;

const filterGender = (data, gender) =>
  gender === 'all' || data.gender === gender;

const filterYear = (data, year) =>
  year === 'all' || data.createdAt.split('-')[0] === year;

const filterMonth = (data, month) =>
  month === 'all' || data.createdAt.split('-')[1] === month;

const isSubString = (data, str) => {
  return (
    Object.values(data)
      .join(' ')
      .toLocaleLowerCase()
      .search(str.toLocaleLowerCase()) !== -1
  );
};
