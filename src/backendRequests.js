import axios from "axios";

const Admin = axios.create({
    baseURL: "https://s2c-nexus-backend-vmf2.onrender.com/admin",
    //add headers later
}) 
const Company = axios.create({
    baseURL: "https://s2c-nexus-backend-vmf2.onrender.com/company",
    //add headers later
})
const Student = axios.create({
    baseURL: "https://s2c-nexus-backend-vmf2.onrender.com/student",
    //add headers later
})
const Email = axios.create({
    baseURL: "https://s2c-nexus-backend-vmf2.onrender.com/email",
    //add headers later
})
const Discussion = axios.create({
    baseURL: "https://s2c-nexus-backend-vmf2.onrender.com/discussion",
    //add headers later
})

export {
    Admin, Company, Student, Email, Discussion
}
