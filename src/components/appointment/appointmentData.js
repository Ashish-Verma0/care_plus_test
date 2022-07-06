import ActionCell from "./cells/ActionCell";
import ImageCell from "./cells/ImageCell";

let filterTextParams = {
  filterOptions: ["contains", "notContains"],
  textFormatter: (r) => {
    if (r == null) return null;
    return r
      .toLowerCase()
      .replace(/[àáâãäå]/g, "a")
      .replace(/æ/g, "ae")
      .replace(/ç/g, "c")
      .replace(/[èéêë]/g, "e")
      .replace(/[ìíîï]/g, "i")
      .replace(/ñ/g, "n")
      .replace(/[òóôõö]/g, "o")
      .replace(/œ/g, "oe")
      .replace(/[ùúûü]/g, "u")
      .replace(/[ýÿ]/g, "y");
  },
  debounceMs: 200,
  suppressAndOrCondition: true,
};

export const columns = [
  {
    headerName: "S.No",
    valueGetter: "node.rowIndex + 1",
    width: "70px",
  },
  {
    field: "id",
    headerName: "ID",
    width: "70px",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "image",
    headerName: "Image",
    cellRenderer: ImageCell,
    width: "100px",
  },
  {
    field: "name",
    headerName: "Patient Name",
    width: "150px",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "age",
    headerName: "Age",
    width: "70px",
  },
  {
    field: "doctor",
    headerName: "Doctor",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "department",
    headerName: "Department",
    width: "150px",
    filter: true,
    filterParams: filterTextParams,
  },

  {
    field: "date",
    headerName: "Date",
    width: "120px",
  },
  {
    field: "time",
    headerName: "Time",
    width: "100px",
  },
  {
    field: "disease",
    headerName: "Disease",
    width: "100px",
  },
  {
    field: "action",
    headerName: "Action",
    cellRenderer: ActionCell,
    width: "100px",
  },
];

export const rows = [
  {
    id: "25",
    name: "Jon",
    age: "25",
    image:
      "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    doctor: "R. Alexender",
    department: "Radiology",
    date: "24 June 2022",
    day: "Sunday",
    time: "09:00",
    disease: "cold",
    action: "delete",
  },
  {
    id: "885",
    name: "Cersei",
    age: "25",
    image:
      "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    doctor: "R. Alexender",
    department: "Radiology",
    date: "24 June 2022",
    day: "Sunday",
    time: "09:00",
    disease: "cold",
    action: "delete",
  },
  {
    id: "78",
    name: "Jaime",
    age: "25",
    image:
      "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    doctor: "R. Alexender",
    department: "Radiology",
    date: "24 June 2022",
    day: "Sunday",
    time: "09:00",
    disease: "cold",
    action: "delete",
  },
  {
    id: "23",
    name: "Arya",
    age: "25",
    image:
      "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    doctor: "R. Alexender",
    department: "Radiology",
    date: "24 June 2022",
    day: "Sunday",
    time: "09:00",
    disease: "cold",
    action: "delete",
  },
  {
    id: "55",
    name: "Daenerys",
    age: "25",
    image:
      "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    doctor: "R. Alexender",
    department: "Radiology",
    date: "24 June 2022",
    day: "Sunday",
    time: "09:00",
    disease: "cold",
    action: "delete",
  },
  {
    id: "66",
    name: "Hommie",
    age: "25",
    image:
      "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    doctor: "R. Alexender",
    department: "Radiology",
    date: "24 June 2022",
    day: "Sunday",
    time: "09:00",
    disease: "cold",
    action: "delete",
  },
  {
    id: "77",
    name: "Ferrara",
    age: "25",
    image:
      "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    doctor: "R. Alexender",
    department: "Radiology",
    date: "24 June 2022",
    day: "Sunday",
    time: "09:00",
    disease: "cold",
    action: "delete",
  },
  {
    id: "88",
    name: "Rossini",
    age: "25",
    image:
      "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    doctor: "R. Alexender",
    department: "Radiology",
    date: "24 June 2022",
    day: "Sunday",
    time: "09:00",
    disease: "cold",
    action: "delete",
  },
  {
    id: "44",
    name: "Harvey",
    age: "25",
    image:
      "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    doctor: "R. Alexender",
    department: "Radiology",
    date: "24 June 2022",
    day: "Sunday",
    time: "09:00",
    disease: "cold",
    action: "delete",
  },
  {
    id: "78",
    name: "Harvey",
    age: "25",
    image:
      "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    doctor: "R. Alexender",
    department: "Radiology",
    date: "24 June 2022",
    day: "Sunday",
    time: "09:00",
    disease: "cold",
    action: "delete",
  },
  {
    id: "79",
    name: "Harvey",
    age: "25",
    image:
      "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    doctor: "R. Alexender",
    department: "Radiology",
    date: "24 June 2022",
    day: "Sunday",
    time: "09:00",
    disease: "cold",
    action: "delete",
  },
  {
    id: "29",
    name: "Harvey",
    age: "25",
    image:
      "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    doctor: "R. Alexender",
    department: "Radiology",
    date: "24 June 2022",
    day: "Sunday",
    officeAddress: "27 Houston California",
  },
];
