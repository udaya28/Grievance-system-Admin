const getFilteredStudentDetails = (studentDetails, filters) => {
  let filteredData = studentDetails.filter(
    (data) =>
      (filters.departmentName === 'ALL' ||
        data.departmentName === filters.departmentName) &&
      (filters.jointYear === 'ALL' || data.jointYear == filters.jointYear) &&
      isSubString(data, filters.searchString)
  );
  return filteredData;
};

const isSubString = (data, str) => {
  return (
    Object.values(data)
      .join(' ')
      .toLocaleLowerCase()
      .search(str.toLocaleLowerCase()) !== -1
  );
};
export default getFilteredStudentDetails;
